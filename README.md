[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  # admin-patient-system
  
  ## Description
  
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contact](#contact)
    
  ## Installation

  To install the dependencies, type `  npm i  ` at the command line.
  
  ## Usage
    
  1. Create a `.env` file and add your database name, MySQL username, and MySQL password as follows: 
  ```
  DB_NAME='shrinko_db'
  DB_USER='your_mysql_username'
  DB_PW='your_mysql_pw'
  ```
  2. Open MySQL shell and migrate the database schema by typing `source schema.sql`
  3. Type `exit` to exit the MySQL shell
  4. Create a `.gitignore` file and the following folder and files:
  ```
  node_modules
  .DS_Store
  .env
  ```
  5. At the command line, type `npm run seeds` to seed the tables
  6. Start the server by typing `npm start`

  ## Tests

  1. At the command line run `npm run seed` to seed data to the database so you can test the routes
  2. Start the server by typing `npm start`
  3. Test the routes in Insomnia or other API design platform

  ## Contact
