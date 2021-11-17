# Storefront Backend Project SOLUTION

For information what this project is about please refer to the REQUIREMENTS section within this document

## Package installation instructions (Step 1)

Install PostgreSQL on your machine (Step 1.1)

Install Postman on your machine (Step 1.2)

Create an .ENV file (Step 1.3)
```
TEST_VAR=testing123
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=fantasy_worlds_test
POSTGRES_TEST_DB=full_stack_test
POSTGRES_TESTTEST_DB=fantasy_worlds_test
POSTGRES_USER=full_stack_user
POSTGRES_PASSWORD=password123
ENV=dev
BCRYPT_PASSWORD=password
SALT_ROUNDS=10
TOKEN_SECRET=alohomora123!
```
Install Dependencies (Step 1.4)
```
yarn install
```

## How to setup and connect to the database (Step 2)

Use the following commands for initial setup (Step 2.1)

- switch to the postgres user: su postgres
- start psql: psql postgres
- CREATE USER full_stack_user WITH PASSWORD 'password123';
- CREATE DATABASE fantasy_worlds_test;
- \c fantasy_worlds_test;
- GRANT ALL PRIVILEGES ON DATABASE fantasy_worlds_test TO full_stack_user;
- get out of psql: \q

Create the tables after Step 2.1 (Step 2.2a)
- switch to the postgres user: su postgres
- start psql: psql postgres
- Sign in with your username and password
- \c fantasy_worlds_test;
- CREATE TABLE If NOT EXISTS users9 (id SERIAL PRIMARY KEY, first_name VARCHAR(100), last_name VARCHAR(100), password_digest VARCHAR);
- CREATE TABLE IF NOT EXISTS products9 (id SERIAL PRIMARY KEY, name varchar(50), price integer, category text);
- CREATE TABLE orders9 (id SERIAL PRIMARY KEY, user_id BIGINT REFERENCES users9(id) NOT NULL, status VARCHAR NOT NULL);
- CREATE TABLE order_products9 (id SERIAL PRIMARY KEY, quantity INTEGER NOT NULL, order_id BIGINT REFERENCES orders9(id) NOT NULL, product_id BIGINT REFERENCES products9(id) NOT NULL);
- get out of psql: \q

Alternatively use the following command in the terminal after Step 2.1 (Step 2.2b)
```
yarn upupup
```

<br>

Start the server (Step 2.3)
```
yarn start2
```

<br>

Visit the endpoints with the correct HTTP-verb via Postman (Step 2.4a)
- Please refer to the SOLUTION-Sections within in the REQUIREMENTS.md file

<br>

Test the backend with Jasmine (Step 2.4b)
```
yarn testtest_without_migr
```

<br>

Start down migration (Step 2.5)
```
yarn downdowndown2
```

<br>

## Ports the backend and database are running on and Engineering information

- database port: 5432 (default)
- backend: Please refer to the SOLUTION-Sections within in the REQUIREMENTS.md file
- All relevant models/services/handlers/spec file names and database table names end with the number '9'




<br>

# Storefront Backend Project REQUIREMENTS

## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `yarn` in your terminal at the project root.

## Required Technologies
Your application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Steps to Completion

### 1. Plan to Meet Requirements

In this repo there is a `REQUIREMENTS.md` document which outlines what this API needs to supply for the frontend, as well as the agreed upon data shapes to be passed between front and backend. This is much like a document you might come across in real life when building or extending an API. 

Your first task is to read the requirements and update the document with the following:
- Determine the RESTful route for each endpoint listed. Add the RESTful route and HTTP verb to the document so that the frontend developer can begin to build their fetch requests.    
**Example**: A SHOW route: 'blogs/:id' [GET] 

- Design the Postgres database tables based off the data shape requirements. Add to the requirements document the database tables and columns being sure to mark foreign keys.   
**Example**: You can format this however you like but these types of information should be provided
Table: Books (id:varchar, title:varchar, author:varchar, published_year:varchar, publisher_id:string[foreign key to publishers table], pages:number)

**NOTE** It is important to remember that there might not be a one to one ratio between data shapes and database tables. Data shapes only outline the structure of objects being passed between frontend and API, the database may need multiple tables to store a single shape. 

### 2.  DB Creation and Migrations

Now that you have the structure of the databse outlined, it is time to create the database and migrations. Add the npm packages dotenv and db-migrate that we used in the course and setup your Postgres database. If you get stuck, you can always revisit the database lesson for a reminder. 

You must also ensure that any sensitive information is hashed with bcrypt. If any passwords are found in plain text in your application it will not pass.

### 3. Models

Create the models for each database table. The methods in each model should map to the endpoints in `REQUIREMENTS.md`. Remember that these models should all have test suites and mocks.

### 4. Express Handlers

Set up the Express handlers to route incoming requests to the correct model method. Make sure that the endpoints you create match up with the enpoints listed in `REQUIREMENTS.md`. Endpoints must have tests and be CORS enabled. 

### 5. JWTs

Add JWT functionality as shown in the course. Make sure that JWTs are required for the routes listed in `REQUIUREMENTS.md`.

### 6. QA and `README.md`

Before submitting, make sure that your project is complete with a `README.md`. Your `README.md` must include instructions for setting up and running your project including how you setup, run, and connect to your database. 

Before submitting your project, spin it up and test each endpoint. If each one responds with data that matches the data shapes from the `REQUIREMENTS.md`, it is ready for submission!
