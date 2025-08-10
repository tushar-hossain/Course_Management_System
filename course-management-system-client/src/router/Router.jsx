import { createBrowserRouter } from "react-router";
import RootLayouts from "../Pages/layouts/RootLayouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Shared/Login";
import Registration from "../Pages/Shared/Registration";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Loading from "../components/Loading";
import AddCourse from "../Pages/AddCourse/AddCourse";
import ManageCourse from "../Pages/manageCourse/manageCourse";
import EditCourse from "../Pages/EditCourse/EditCourse";
import MyEnrolledCourses from "../Pages/MyEnrolledCourses/MyEnrolledCourses";
import Error from "../Pages/Error/Error";
import PrivateRoute from "../Pages/Routes/PrivateRoute/PrivateRoute";
import Instructor from "../Pages/Instructor/Instructor";
import AllCourses from "../Pages/AllCourses/AllCourses";
import CoursesItem from "../Pages/CoursesItem/CoursesItem";
import FreeSeminarSchedule from "../Pages/FreeSeminarSchedule/FreeSeminarSchedule";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardHome from "../Pages/Dashboard/Home/DashboardHome";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: { title: "Home" },
      },
      {
        path: "login",
        element: <Login />,
        handle: { title: "Login" },
      },
      {
        path: "registration",
        element: <Registration />,
        handle: { title: "Registration" },
      },
      {
        path: "free-seminar-schedule",
        Component: FreeSeminarSchedule,
      },
      {
        path: "course-details/:id",
        element: <CourseDetails />,
        handle: { title: "Course Details" },
      },
      {
        path: "editCourse/:id",
        hydrateFallbackElement: <Loading />,
        loader: ({ params }) =>
          fetch(
            `https://course-management-system-server-ashen.vercel.app/courses/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <EditCourse />
          </PrivateRoute>
        ),
        handle: { title: "Edit Course" },
      },
      {
        path: "myEnrolledCourses",
        element: (
          <PrivateRoute>
            <MyEnrolledCourses />
          </PrivateRoute>
        ),
        handle: { title: "My Enrolled Courses" },
      },
      {
        path: "instructor",
        Component: Instructor,
        loader: () =>
          fetch(
            "https://course-management-system-server-ashen.vercel.app/instructor"
          ),
        hydrateFallbackElement: <Loading />,
        handle: { title: "Instructor" },
      },
      {
        path: "all-courses",
        element: <AllCourses />,
        loader: () =>
          fetch(
            "https://course-management-system-server-ashen.vercel.app/all-courses"
          ),
        hydrateFallbackElement: <Loading />,
        handle: { title: "All Courses" },
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },

  // dashboard
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "home",
        element: (
          <PrivateRoute>
            <DashboardHome />
          </PrivateRoute>
        ),
        handle: { title: "Add Course" },
      },
      {
        path: "addCourse",
        element: (
          <PrivateRoute>
            <AddCourse />
          </PrivateRoute>
        ),
        handle: { title: "Add Course" },
      },
      {
        path: "all-courses-item",
        element: (
          <PrivateRoute>
            <CoursesItem />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://course-management-system-server-ashen.vercel.app/all-courses"
          ),
        hydrateFallbackElement: <Loading />,
        handle: { title: "All Courses" },
      },
      {
        path: "manageCourse",
        element: (
          <PrivateRoute>
            <ManageCourse />
          </PrivateRoute>
        ),
        handle: { title: "Manage Course" },
      },
    ],
  },

  {
    path: "forgot-password",
    element: <ForgotPassword />,
    handle: { title: "Forgot Password" },
  },
]);
