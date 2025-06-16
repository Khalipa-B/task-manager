# Task Manager API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB** that allows users to manage tasks — including creating, reading, updating, and deleting them.

## Features

- Create a new task
- Get all tasks
- Get a task by ID
- Update a task
- Delete a task (optional if added)
- MongoDB integration using Mongoose

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (for testing)

## Project Structure

task-manager/
├── task.js # Mongoose model
├── routes.js # Express routes
├── server.js # Entry point
├── .gitignore
├── package.json
└── README.md

## Installation

1. Clone the repository:

- git clone https://github.com/yourusername/task-manager.git
- cd task-manager
  
2. Install dependencies:
- npm install

3. Start MongoDB locally (make sure it's running on mongodb://localhost:27017).

4. Start the server:
- node server.js
The API should now be running at: http://localhost:3000

**API Endpoints**

**Create a Task**
- POST /tasks:
Body:
{
  "title": "Buy groceries",
  "completed": false
}

**Get All Tasks**
- GET /tasks

**Get Task by ID**
- GET /tasks/:id

**Update Task**
- PUT /tasks/:id
Body:
{
  "title": "Do laundry",
  "completed": true
}

**(Optional) Delete Task**
- DELETE /tasks/:id

**Testing with Postman**
- You can test the API using Postman by sending HTTP requests to the endpoints listed above.

**Author**
- Khalipa Baba - 
Passionate Full Stack Developer in training
- South Africa


