import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Pages/Blog/Blog";
import Course from "../Components/Pages/Course/Course";
import CourseDetails from "../Components/Pages/CourseDetails/CourseDetails";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";
import FAQ from "../Components/Pages/FAQ/FAQ";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import PremiumCourse from "../Components/Pages/PremiumCourse/PremiumCourse";
import Register from "../Components/Pages/Register/Register";
import Reset from "../Components/Pages/Reset/Reset";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "course",
        element: <Course></Course>,
        loader: () => fetch("http://localhost:5000/course"),
      },
      {
        path: "/course/:courseID",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.courseID}`),
      },
      { path: "FAQ", element: <FAQ></FAQ> },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
      { path: "blog", element: <Blog></Blog> },
      { path: "premium", element: <PremiumCourse></PremiumCourse> },
      { path: "/reset", element: <Reset></Reset> },
    ],
  },
]);

export default router;
