# Full Stack Environment Setup

## Overview

This project is a beginner-friendly setup for learning Full Stack Development using **Node.js**, **Express.js**, **Git**, **GitHub**, **VS Code**, and **Postman**. It demonstrates how to initialize a Node.js project, install Express, and run a basic **Hello World** server.

---

## Technologies Used

* Node.js
* Express.js
* Git
* GitHub
* Visual Studio Code
* Postman

---

## Prerequisites

Before running this project, make sure you have installed:

* Node.js (LTS)
* Git
* Visual Studio Code
* Postman

Verify the installations:

```bash
node -v
npm -v
git --version
```

---

### Navigate to the Project

```bash
cd fullstack
```

### Install Dependencies

```bash
npm install
```

---

## Run the Application

Start the Express server:

```bash
node server.js
```

You should see:

```text
Server is running on http://localhost:5000
```

Open your browser and visit:

```text
http://localhost:5000
```

Response:

```text
Hello World!
```

---

## Project Structure

```text
BLOGDEN/
│
├── node_modules/
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## API

### GET /

Returns a simple welcome message.

**Response**

```text
Hello World!
```

---

## Learning Objectives

* Set up a Node.js development environment
* Initialize a Node.js project
* Install and use Express.js
* Create a basic web server
* Test an application locally
* Manage source code using Git and GitHub

---

## Future Enhancements

* Add multiple routes
* Build REST APIs
* Connect to MongoDB
* Implement CRUD operations
* Add authentication using JWT
* Deploy the application

# Day 2 – React Blog Website

## 📖 About the Project

This project is part of my Full Stack Development learning journey. On Day 2, I built the basic structure of a blog website using **React.js**. The main goal was to understand how React components work and how to navigate between pages using **React Router**.

The application includes a **Home** page, an **Add Blog** page, a reusable **Navigation Bar**, and a **Footer** component.

---

## 🚀 Features

* Home page
* Add Blog page
* Navigation Bar
* Footer
* React Router for page navigation
* Component-based structure
* Responsive layout using Bootstrap

---

## 🛠️ Tech Stack

* React.js
* Vite
* React Router DOM
* Bootstrap 5
* CSS3

---

## 📂 Project Structure

```text
day2-react-blog/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── AddBlog.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

Clone the repository:

```bash
git clone https://github.com/yourusername/day2-react-blog.git
```

Move into the project folder:

```bash
cd day2-react-blog
```

Install the required packages:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## 📚 What I Learned

During this project, I learned how to:

* Set up a React project using Vite
* Create reusable React components
* Use React Router for navigation
* Organize a React project into components and pages
* Build a simple multi-page application

---

## 🎯 Project Outcome

By the end of Day 2, I successfully created:

* A Home page
* An Add Blog page
* A reusable Navigation Bar
* A reusable Footer
* Client-side routing with React Router
* A clean and organized project structure

---

## 🔮 Next Steps

In the next phase, I plan to:

* Improve the UI with CSS and Bootstrap
* Display blog posts dynamically
* Add form validation
* Connect the project to an Express.js backend
* Store blog data in MongoDB
* Implement authentication and authorization

---

## 👨‍💻 Author

**Krutagna Patel**

Computer Engineering Student | Full Stack Developer | Cybersecurity Enthusiast

