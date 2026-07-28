# BLOGDEN - Full Stack Blog Website

A Full Stack Blog Website developed as part of a **14-Day Full Stack Development Internship** at **Codomax Digital Solutions**.

The project demonstrates the complete journey of building a blog application from frontend development to backend API integration using React.js and Express.js.

---

# Features

## Frontend
- Home Page
- Add Blog Page
- Responsive Navigation Bar
- Footer
- Responsive Design
- Form Validation
- Modern UI

## Backend
- Express.js Server
- GET API
- POST API
- Blog Creation API
- JSON Request Handling
- JavaScript Array Storage
- Input Validation

---

# Tech Stack

### Frontend
- React.js
- Vite
- Bootstrap 5
- CSS3
- JavaScript (ES6)

### Backend
- Node.js
- Express.js

### Tools
- Git
- GitHub
- VS Code
- Postman
- Nodemon

---

# Folder Structure

```text
BLOGDEN/
│
├── backend/
│   ├── controllers/
│   ├── data/
│   ├── routes/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── README.md
│
├── blog/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone <your-github-repository-url>
```

Move into the project folder.

```bash
cd BLOGDEN
```

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## Frontend Setup

```bash
cd blog
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# Development Journey

## ✅ Day 1 – Environment Setup

Completed:

- Installed VS Code
- Installed Node.js
- Installed Git
- Installed Postman
- Initialized Node.js project
- Installed Express.js
- Created Hello World server

Outcome:

Successfully configured the development environment and ran the first Express server.

---

## ✅ Day 2 – Blog Website Structure

Completed:

- Created Home Page
- Created Add Blog Page
- Added Navigation Bar
- Added Footer
- Configured React Router

Outcome:

Created the basic frontend structure of the blog application.

---

## ✅ Day 3 – UI Styling

Completed:

- Styled Navigation Bar
- Styled Hero Section
- Styled Blog Cards
- Styled Add Blog Form
- Styled Footer
- Added Responsive Design

Outcome:

Developed a clean and responsive user interface.

---

## ✅ Day 4 – Form Validation

Completed:

- Added client-side validation
- Displayed validation errors
- Prevented empty submissions
- Improved user interaction

Outcome:

Created a user-friendly blog submission form.

---

## ✅ Day 5 – Express.js Backend

Completed:

- Created Express Server
- Implemented GET Route
- Implemented POST Route
- Added JSON Middleware
- Tested APIs using Postman

Outcome:

Backend server successfully handles requests.

---

## ✅ Day 6 – Add Blog API

Completed:

- Created Blog API
- Stored Blogs in JavaScript Array
- Added Input Validation
- Returned Success/Error Responses
- Tested API using Postman

Outcome:

Users can create blog posts through the backend API.


# Learning Outcomes

Through this project I learned:

- React.js Fundamentals
- Component-Based Architecture
- Routing with React Router
- Responsive Design
- JavaScript Form Validation
- Express.js Development
- REST API Development
- API Testing with Postman
- Git & GitHub Workflow
- Full Stack Project Structure

---
---

# Day 7 – View Blogs API

## 📖 About

On Day 7, I developed the **View Blogs API** for **BLOGDEN** using **Node.js** and **Express.js**. This API retrieves all blog posts stored in a JavaScript array and returns them in JSON format.

---

## 🚀 Features

- GET API to fetch all blog posts
- Returns JSON responses
- Retrieves data from a JavaScript array
- Tested using Postman

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript
- Postman

---


## 📌 API Endpoint

### GET `/blogs`

**Response**

```json
{
  "success": true,
  "blogs": [
    {
      "title": "My First Blog",
      "author": "Krutagna Patel",
      "content": "Learning Express.js is fun!"
    }
  ]
}
```

---

## 📚 What I Learned

- Creating GET APIs with Express.js
- Returning JSON responses
- Fetching data from a JavaScript array
- Testing APIs using Postman

---

## 🎯 Outcome

Successfully created a **View Blogs API** that retrieves and returns all blog posts, preparing the backend for complete CRUD operations.

---

## 👨‍💻 Author

**Krutagna Patel**
