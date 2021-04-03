# Crate 👕👖📦
_open sourced project from [Crate](https://github.com/atulmy/crate), with a plan to contribute to a `user style survey` to better user experience. This was our first time with a `cross pollenated team`, working with both Frontend and Backend Developers._

### Contributors
- Samuel Yeo: [github profile](https://github.com/SK-Sam)|[linkedIn](https://www.linkedin.com/in/samuel-horishin-yeo/)
- Ely Hess: [github profile](https://github.com/elyhess)|[linkedIn](https://www.linkedin.com/in/ely-hess/)
- Jeff Kersting: [github profile](https://github.com/JeffKersting/)|[linkedIn](https://www.linkedin.com/in/jeff-kersting/)
- Cameron Aregon: [github profile](https://github.com/camaragon)|[linkedIn](https://www.linkedin.com/in/camaragon/)
- Kevin Hartmann: [github profile](https://github.com/kevinhartmann23)|[linkedIn](https://www.linkedin.com/in/kevin-hartmann/)

### Project Managers
- Dione Wilson
- David Whitaker

#### Get monthly subscription of trendy clothes and accessories.
- **API** built with Node, GraphQL, Express, Sequelize (MySQL) and JWT Auth
- **WebApp** built with React and Redux along with Server Side Rendering (SSR) / SEO friendly
- **Mobile** (Android and iOS) Native App build with React Native
- Written in ES6+ using Babel + Webpack
- Designed using Adobe Experience Design. Preview it [here](https://xd.adobe.com/view/a662a49f-57e7-4ffd-91bd-080b150b0317/).


## Features
- User style survey - generated images to determine a users style for their subscription box
- Restake Survey from user profile


### Desktop
![GIPHY](https://media.giphy.com/media/ycl5xBNBrORnGWSqp4/giphy.gif)


## Added Structure To code/web
    code
      ├── package.json
      │
      ├── mobile (Android, iOS) : did not contribute
      │   
      │
      ├── web (example.com)
      │   ├── public
      │   ├── src
      │   │   ├── modules
      │   │   │    ├── user
      │   │   │    │    └── api
      │   │   │    │
      │   │   │    └── survey
      │   │   │         ├── list
      │   │   │         ├── item
      │   │   │         └── api
      │   │   ├── setup
      │   │   ├── ui
      │   │   └── index.js
      │   ├── storybook
      │   │
      │   └── package.json
      │
      ├── .gitignore
      └── README.md


## Added Structure To code/api
    code
      ├── api (api.example.com)
      │   ├── public
      │   ├── src
      │   │   ├── config
      │   │   ├── migrations
      │   │   ├── modules
      │   │   ├── seeders
      │   │   ├── setup
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      │
      ├── .gitignore
      └── README.md

## Setup and Running
- Prerequisites
  - Node
  - MySQL (or Postgres / Sqlite / MSSQL)
- Clone repo `git clone git@github.com:atulmy/crate.git crate`
- Switch to `code` directory `cd code`
- Configurations
  - ADD `/api/src/config/database.json` for database credentials
<details>
  <Summary>Add This To You Database.JSON file</summary>
    <code>
    {
      "development": {
        "username": {your user name here},
        "password": null,
        "database": "crate",
        "host": "127.0.0.1",
        "dialect": "postgres",
        "seederStorage": "sequelize"
      },
      "production": {
        "username": {your user name here},
        "password": null,
        "database": "crate",
        "host": "127.0.0.1",
        "dialect": "postgresql",
        "seederStorage": "sequelize"
      }
    }
  </code>
</details>

  - Modify `/api/.env` for PORT (optional)
  - Modify `/web/.env` for PORT / API URL (optional)
  - Modify `/mobile/src/setup/config.json` for API URL (tip: use `ifconfig` to get your local IP address)
- Setup
  - API: Install packages and database setup (migrations and seed) `cd api` and `npm run setup`
  - Webapp: Install packages `cd web` and `npm install`
  - Mobile: 
    1. Install packages `cd mobile` and `npm install`
    2. Install iOS dependencies `cd mobile/ios` `pod install`
- Development
  - Run API `cd api` and `npm start`, browse GraphiQL at http://localhost:8000/
  - Run Webapp `cd web` and `npm start`, browse webapp at http://localhost:3000/
- Production
  - Run API `cd api` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server
  - Run Webapp `cd web` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server

## Challenges & Wins
### Challenges
- **Getting to know FE File Structure and Existing Naming Conventions** This was something proven to be rather confusing for the Frontend team. Although we took the time to plan and study the file structure, naming conventions became rather confusing from the existing repository.  
- **Jumping into an existing codebase in an unfamiliar language** For the Backend team, going from an opinionated framework such as Ruby on Rails to Node/Express held some initial challenges. The learning curve was somewhat high initially due to figuring out what the framework DOES NOT do for us. After taking notes as to what we have to code manually(setup, teardown, explicit import/exports, etc), we thrived and delivered.
- **Setting up GraphQL for the first time** GraphQL took a few days for both teams to become proficient enough to maneuver. Exploratory time was necessary as GraphQL is essentially another language itself. From getting to know the preferred POST request to refactoring a single schema file into a type, model, query, mutation, and resolver file all held their own challenges. Testing GraphQL was unfamiliar also, along with utilizing Jest and Supertest.

### Wins/Reflections
- **Working as a full cross poll team, and enjoying our team environment**
- **Organization, Planning, Communication:** Workflow was smooth, communication was strong, documents were shared! Everyone was ready to help each other out and eager to learn from one another. Our planning was thourough and set us up for a really smooth, successful project. 
- **We delivered** We completed a feature from start to finish while jumping into unfamiliar waters. The knowledge we knew previous to this project held relevance to our tasks. We were as resourceful as could be in order to succeed.

## Appreciation 

- Huge shout out to everyone that contributed!
