import React from "react";

const Home = React.lazy(() => import("../pages/home/Home"));
const Login = React.lazy(() => import("../pages/login/Login"));
const Register = React.lazy(() => import("../pages/register/Register"));
const Reset = React.lazy(() => import("../pages/resetpassword/Reset"));

export default [
  {
    element: <Home />,
    path: "/"
  },
  {
    element: <Login />,
    path: "login",
  },
  {
    element: <Register />,
    path: "register",
  },
  {
    element: <Reset />,
    path: "reset",
  },
];
