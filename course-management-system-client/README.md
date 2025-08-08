# BD Programming

A fully functional online learning platform frontend developed using React.js, styled with Tailwind CSS and DaisyUI. This platform enables users to browse, view details, and enroll in courses, as well as join free seminars and track their progress. Authenticated users can securely enroll in a course, and admin users can manage content.

## 🔗 Live URL https://bd-programminf.web.app/

## 🎯 Purpose

The goal of BD Programming is to provide beginner-friendly and affordable programming education in Bangla. It helps aspiring developers learn frontend and backend technologies through interactive and hands-on courses.

## ⚙️ Core Features
🔐 Firebase Authentication (Email/Password + GitHub)
📚 View available courses with detailed pages
🧠 Role-based access (User & Admin)
✅ Enroll / Unenroll toggle system (1 user can’t enroll twice)
🧾 Free Seminar Schedule form
📆 Course seat availability, tags, duration
🔑 Protected routes with JWT authorization
🧑 Admin access to add/manage courses (optional)
🎨 Dynamic title via route metadata
📱 Responsive UI


## 🛠️ Tech Stack
⚛️ React.js
🔁 React Router DOM
🎨 Tailwind CSS + DaisyUI
🔐 Firebase Auth
🔐 JWT Auth (client integration)
🧠 React Context API
🔄 Axios + useAxiosSecure
📋 React Hook Form
🔔 React Toastify + SweetAlert2

## 🔐 Authentication
🔑 Firebase Auth (Email/Password + GitHub login)
🌐 Context API manages global auth state
🔒 useAxiosSecure ensures secure API communication
⛔ Enroll button disabled for unauthenticated users

## 📘 Courses
🧑 View course details (title, description, instructor, date, time)
✅ Enroll / Unenroll toggle for authenticated users
🚫 Prevent multiple enrollments
📤 Enrollment stored via secure POST request

## 🗓️ Free Seminar Form
📛 Name, 📧 Email, 📝 Message
📨 Submit seminar participation request
🧾 Success feedback via Toast

##📖 Environment Setup

```
VITE_API_BASE_URL=your_backend_api_url
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
```

## 🧪 Run Locally
```
git clone https://github.com/tushar-hossain/Course_Management_System.git
cd course-management-system-client
npm install
npm run dev
```

## ✨ Contribution
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## ✉️ Contact
Have questions or suggestions?
📧 tusharsu97@gmail.com
