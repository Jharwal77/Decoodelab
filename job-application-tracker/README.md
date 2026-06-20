# Job Application Tracker API

A backend REST API built with Node.js, Express.js, PostgreSQL, and Prisma ORM for managing job applications.

## Features

* User Management

  * Create User
  * Get All Users
  * Get User By ID
  * Update User
  * Delete User

* PostgreSQL Database Integration

* Prisma ORM

* RESTful API Design

* Database Migrations

* JSON Request/Response Handling

## Tech Stack

* Node.js
* Express.js
* PostgreSQL
* Prisma ORM
* JavaScript

## Project Structure

```text
job-application-tracker/
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── controllers/
│   ├── routes/
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd job-application-tracker
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
DATABASE_URL="your_postgresql_connection_string"
```

### Run Database Migration

```bash
npx prisma migrate dev --name init
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Start Development Server

```bash
npm run dev
```

Server runs on:

```text
http://localhost:5000
```

## API Endpoints

### Create User

```http
POST /users
```

Request Body:

```json
{
  "name": "Rahul",
  "email": "rahul@gmail.com",
  "password": "123456"
}
```

### Get All Users

```http
GET /users
```

### Get User By ID

```http
GET /users/:id
```

### Update User

```http
PUT /users/:id
```

### Delete User

```http
DELETE /users/:id
```

## Database Schema

### User

| Field    | Type   |
| -------- | ------ |
| id       | Int    |
| name     | String |
| email    | String |
| password | String |

## Learning Outcomes

* Database Integration
* PostgreSQL Fundamentals
* Prisma ORM Usage
* CRUD Operations
* REST API Development
* Backend Architecture

## Author

Rahul Meena

* GitHub: https://github.com/Jharwal77
* Portfolio: https://rahul-portfolio-teal.vercel.app/
* LinkedIn: https://www.linkedin.com/in/rahuljharwal2468/
