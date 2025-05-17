
const url = "https://api.github.com/users/kamranahmedse/events"
let response = await fetch(url)


if (response.ok){
    let data = await response.json();
    console.log(data);
    
    
    
}
