#!/usr/bin/env node

import {fileURLToPath} from "node:url";
import path from "node:path";


const __filename = fileURLToPath(import.meta.url); //path to module
const __dirname = path.dirname(__filename); //directory in which module lives





const [,, username] = process.argv; //retrieve username cli argument and store in const username variable

//checks if username was provided as a cli argument, if not ...terminate the process (in this case app.js)
if (!username){  
    console.error("Usage: github-activity <username>");
    process.exit(1)
    
}




async function fetchUserEvents(uname){
    try {
        
        const response = await fetch(`https://api.github.com/users/${uname}/events/public`);

        if (!response.ok){
            throw new Error(`GitHub API error: ${response.status}`);
        }

        

        const events = await response.json();
        const recentEvents = events.slice(0, 10); //retrieve only first 10 events

        console.log(`\nRecent activity for ${username}`);
        recentEvents.forEach(event => {
            console.log("- " + formatEvent(event));
            
        })
       
       

        
    } catch(err){
        console.error("Fetched failed: ", err);
    }
}


function formatEvent(event){
    const {type, repo, payload} = event;

    switch(type){
        case 'PushEvent':
            return `Pushed ${payload.commits?.length|| 0} commit(s) to ${repo.name}`;
        case 'IssueEvent':
            return `Opened a new issue in ${repo.name}`;
        case 'WatchEvent':
            return `Starred ${repo.name}`;
        case 'PullRequest':
            return `Opened a pull request in ${repo.name}`;
        default:
            return `Performed ${type} in ${repo.name}`
    }

}

fetchUserEvents(username);


