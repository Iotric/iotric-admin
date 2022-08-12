import React from "react";

const Login = React.lazy(() => import("../pages/login/Login"));
const Register = React.lazy(() => import("../pages/register/Register"));
const Reset = React.lazy(() => import("../pages/resetpassword/Reset"));

export default [
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
