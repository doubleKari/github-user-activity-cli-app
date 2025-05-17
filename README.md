# GitHub Activity CLI

A simple command line interface (CLI) application to fetch and display recent GitHub activities of any user directly from your terminal.

## Overview

GitHub Activity CLI is a lightweight Node.js application that helps you quickly view a GitHub user's recent public activities. It fetches data from the GitHub API and presents it in an easy-to-read format right in your terminal.

## Features

- Fetch recent GitHub activities for any user
- Display activity details in a clean, readable format
- View different types of activities (pushes, issues, stars, pull requests)
- Simple to use with a straightforward command

## Installation

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/github-activity-cli.git
   cd github-activity-cli
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Make the script executable:
   ```
   chmod +x app.js
   ```

4. Create a symlink to use the CLI globally (optional):
   ```
   npm link
   ```

## Usage

```
github-activity <username>
```

Replace `<username>` with the GitHub username you want to check.

### Example

```
github-activity kamranahmedse
```

### Output

```
Recent activity for kamranahmedse
- Pushed 3 commit(s) to kamranahmedse/developer-roadmap
- Opened a new issue in kamranahmedse/developer-roadmap
- Starred kamranahmedse/developer-roadmap
- Performed IssueCommentEvent in kamranahmedse/developer-roadmap
...
```
