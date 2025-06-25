# BD Programming - Server

This is the backend server for the **BD Programming** platform. It handles API requests, course and user data storage, authentication, and authorization.

## 🔗 Live URL https://course-management-system-server-ashen.vercel.app/

## 📌 Purpose

- Manage course data via MongoDB.
- Handle user enrollment logic securely.
- Authenticate users using Firebase Admin SDK.
- Authorize users via JWT.
- Provide protected routes for course management (add, delete, enroll, etc.).

## 🧰 Technologies Used

- **Express.js** – Node.js web framework.
- **MongoDB** – NoSQL database for storing course and user data.
- **Firebase Admin SDK** – For verifying Firebase tokens and user info.
- **dotenv** – For environment variable management.
- **CORS** – To allow cross-origin resource sharing.
- **jsonwebtoken** – For server-side JWT handling.
