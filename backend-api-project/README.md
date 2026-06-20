# Backend API Development

A simple RESTful Backend API built using **Node.js** and **Express.js**. This project demonstrates basic backend development concepts, including API creation, request handling, input validation, and CRUD operations.

## 🚀 Features

* Get all users
* Get a user by ID
* Add a new user
* Update an existing user
* Delete a user
* Basic input validation
* JSON request and response handling

## 🛠️ Tech Stack

* Node.js
* Express.js
* JavaScript (ES6)

## 📂 Project Structure

```
backend-api-project/
│
├── controllers/
│   └── userController.js
│
├── routes/
│   └── userRoutes.js
│
├── data/
│   └── users.js
│
├── server.js
├── package.json
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Move into the project folder:

```bash
cd backend-api-project
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm run dev
```

or

```bash
npm start
```

The server runs at:

```
http://localhost:5000
```

## 📌 API Endpoints

### Get All Users

```
GET /users
```

### Get User By ID

```
GET /users/:id
```

### Add User

```
POST /users
```

Request Body:

```json
{
  "name": "Rahul",
  "age": 22
}
```

### Update User

```
PUT /users/:id
```

Request Body:

```json
{
  "name": "Rahul Meena",
  "age": 23
}
```

### Delete User

```
DELETE /users/:id
```

## 📷 Testing

You can test the API using:

* Postman
* Thunder Client
* Insomnia

## 🎯 Learning Outcomes

* REST API fundamentals
* Express routing
* Controllers and route separation
* CRUD operations
* JSON request/response handling
* Basic server-side validation

## 📄 License

This project is created for learning and educational purposes as part of the DecodeLabs Full Stack Development Industrial Training Program.
