[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  # SHRINKO
  
  ## Description
  
  Shrinko is a web based electronic mental health records system that provides clinicians and administrative staff easy access to client records.
  This application has been deployed on Heroku and can be found at [HEROKU LINK HERE].


  ## Table of Contents

  * [Demo](#demo)
  * [Models Structure](#models)
  * [Packages Used](#packages)
  * [Installation](#installation)
  * [Tests](#tests)
  * [Collaborators](#collaborators)

  ## Demo

  [DEMO HERE]

  ## Models

  ![ScreenShot](erdiagscreenshot.png)

  ## Packages

  Node.js, Express.js, MySQL and the Sequelize ORM, UUID.

  ## Installation

  1. To install the dependencies, type `  npm i ` at the command line.
  2. Create a `.env` file and add your database name, MySQL username, and MySQL password as follows: 
      ```
      DB_NAME='shrinko_db'
      DB_USER='your_mysql_username'
      DB_PW='your_mysql_pw'
      ```
  3. Open MySQL shell and migrate the database schema by typing `source schema.sql`
  4. Type `exit` to exit the MySQL shell
  5. Create a `.gitignore` file and the following folder and files:
      ```
      node_modules
      .DS_Store
      .env
      ```

  ## Tests

  1. At the command line run `npm run seed` to seed data to the database so you can test the routes
  2. Start the server by typing `npm start`
  3. Test the routes in Insomnia or other API design platform

  ## Collaborators

  - Sean Cone ([@seanc0ne](https://github.com/seanc0ne))
  - Sandrine Poissonnet ([@PetitsPoissons](https://github.com/PetitsPoissons/))
  - Alicia Ross ([@designurhappy](https://github.com/designurhappy))
