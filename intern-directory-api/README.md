# 🚀 Job Tracker

A production-style full-stack Job Tracker application built with Node.js, Express.js, PostgreSQL, Prisma ORM, and Vanilla JavaScript.

The application helps users manage job applications with CRUD operations, status management, filtering, search, dashboard statistics, dark mode, and responsive UI.

---

## ✨ Features

- Create, Read, Update, and Delete Jobs
- Edit existing job applications
- Update application status (Applied, Interview, Rejected)
- Search jobs by company name
- Filter jobs by status
- Sort jobs by company or status
- Dashboard statistics
- Dark mode with localStorage persistence
- Toast notifications
- Loading state and empty state handling
- Responsive design
- RESTful API architecture
- PostgreSQL database with Prisma ORM

---

## 🛠 Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript (ES6)

### Backend

- Node.js
- Express.js
- REST APIs

### Database

- PostgreSQL
- Prisma ORM

### Tools

- Git
- GitHub
- Postman
- VS Code

---

## 📂 Folder Structure

```text
job-tracker/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── prisma.js
│   ├── server.js
│   └── routes/
│       └── jobRoutes.js
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd job-tracker
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
DATABASE_URL="your_database_url"
```

### Run Prisma Migration

```bash
npx prisma migrate dev
```

### Start Server

```bash
npm run dev
```

---

## 🔗 API Endpoints

### Get All Jobs

```http
GET /api/jobs
```

### Filter Jobs

```http
GET /api/jobs?status=Interview
```

### Create Job

```http
POST /api/jobs
```

### Update Status

```http
PUT /api/jobs/:id
```

### Edit Job

```http
PATCH /api/jobs/:id
```

### Delete Job

```http
DELETE /api/jobs/:id
```

---

## 📈 Key Functionalities

- Job Application Management
- Dashboard Statistics
- Search and Filter System
- Sorting
- Dark Mode
- Responsive UI
- Toast Notifications
- Loading State

---

## 🧠 Concepts Used

- REST API Design
- CRUD Operations
- Express Routing
- Prisma ORM
- PostgreSQL
- Fetch API
- DOM Manipulation
- Event Handling
- Responsive Design
- Local Storage

---

## 👨‍💻 Author

### Rahul Meena

Software Engineer Intern | Backend Developer | Full Stack Developer

- Jaipur, India
- IIIT Manipur
- Email: rahuljharwal2468@gmail.com

---

## ⭐ Future Improvements

- JWT Authentication
- User Registration & Login
- Protected Routes
- Pagination
- Deployment on Render & Vercel
- Swagger Documentation
- Role Based Access Control
- Email Notifications