# Node with Express API

# Node.Js

- Node.js is a JavaScript rintime.
- Runtime: A program that runs another program
- Run JS in local machine
- Built on C++
- Powered by Google Chrome v8 engine
- Used to build: API, real time apps, micro-services


## Architecture

 - Single threaded
 - Non-blocking I/O operation
 - Event loop

## File System


## Express.js
- It is a Node.js API/backend framewoek.
- Used to build API (Application program interface)
- It simplifies the HTTP module of node.js
- Fast, unopinionated, minimalist web framework for node.js

## API
- API format: JSON(JavaScript Objet Notation)
- REST (Representational state transfer) API

## HTTP Methods


## Layered Architecture(Backend)
1. API Layer
    a. Routes: Handle routes/endpoints
    b. Controllers: Handle request/response
    c. Middlewares: Handle request/response, Logging, Auth

2. Business Logic Layer
    a. Services

3. Data Logic Layer
    a. Models

4. Database Layer

## MongoDB
- Non-relational Database
- Data are stored in collections and documents
- Database: Main container, all coolections are stored here
- Collection: Equivalent to table of relational dabase
- DOcument: Equivalent to Row
- Field: Equivalent to Column

## Tools used
- Locally: MongoDB Compass
- Cloud:MongoDB Atlas

** Run MongoDB in compass
1. Open MongoDB Compass
2. Setup a new connection(mongodb://localhost:27017)

## MongoDB Queries
- `show dbs` : show list of database
- `use <dbname>` : use existing db or create a new one
- `show collenction` : 

1. create
- `db.users.insertOne({name:"Ram})`
- `db.users.insertMany([{name:"Hari"}, {name :"Sita"}])`'

2. Read

3. Update

4. Delete 

** Complex Filters
1. seqm
2. 
3. 
4. 
5. 
6. 
7. $in: db.users.find({name: {$in: ["Hari", "Rohan"]}})

a.
b.
c.

## Mongoose
- ODM of MongoDB for NOde.js
- create schema
- validata schema
- create models using schema
- Relationships


## Postman