# 🧠 BD Programming — Backend

A robust backend server for the BD Programming online learning platform built with Node.js, Express, and MongoDB. This server powers course enrollment, seminar scheduling, user authentication, and role-based access using Firebase Admin and JWT.

## 🔗 Live URL https://course-management-system-server-ashen.vercel.app/

## 🚀 Features

✅ RESTful API built with Express.js
🔐 JWT-based route protection
🔍 Firebase Admin SDK for auth token verification
🧑‍🏫 Role-based access: admin & user
📚 Course management (view, enroll, update, delete)
📝 Seminar scheduling with form submissions
🎫 Enrollment system prevents duplicates
🛡️ Secure middleware for route protection
🌐 CORS enabled
⚙️ Environment config using dotenv

## 🧰 Tech Stack
🟢 Node.js
🚀 Express.js
🛢️ MongoDB (Native Driver)
🔐 Firebase Admin SDK
🌐 CORS
🔒 dotenv
🔐 JSON Web Token (JWT)

## 🔐 Authentication
Firebase Admin SDK verifies tokens from frontend
Middleware functions:
verifyToken: Ensures valid JWT for protected routes
verifyAdmin: Restricts certain actions to admins only

## 📚 API Endpoints
🔐 Auth & Users
POST /jwt — Generate JWT for logged-in user
GET /users — Get all users (admin only)
PATCH /users/admin/:id — Make a user an admin
GET /users/:email — Get user by email

## 📘 Courses
GET /courses — Get all courses
GET /courses/:id — Get single course
POST /courses — Add a new course (admin only)
PATCH /courses/:id — Update course (admin only)
DELETE /courses/:id — Delete course (admin only)

## 📝 Enrollments
POST /enrollments — Enroll in a course (only once per user per course)
GET /enrollments/:email — Get enrolled courses by user
DELETE /enrollments/:id — Cancel enrollment

## 🗓️ Seminars
POST /seminars — Submit seminar participation form
GET /seminars — View all seminar submissions (admin only)

## ⚙️ Environment Variables
Create a .env file in the root directory:

```
PORT=3000
DB_USER=yourMongoUser
DB_PASS=yourMongoPassword
DB_NAME=bdProgramming
JWT_SECRET=yourJWTSecret

FIREBASE_TYPE=service-account-type
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY=your-private-key
FIREBASE_CLIENT_EMAIL=your-service-email
```

## ▶️ Run Locally
```
git clone https://github.com/tushar-hossain/Course_Management_System.git
cd course-management-system-server
npm install
npm run start
# or
nodemon index.js
```

## 🛡️ Security Practices
🔐 JWT + Firebase-based auth
🌍 CORS enabled for frontend/backend integration
🔒 Role-based access protection for admin-only routes

## 📬 Contact
For support or feedback:
📧 tusharsu97@gmail.com
