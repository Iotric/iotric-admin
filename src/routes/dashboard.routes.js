import React from "react";
import Credentials from "../pages/credentials/Credentials";

const Dashboard = React.lazy(() => import("../pages/dashboard/dashboard"));

export default [
  {
    element: <Dashboard />,
    path: "/dashboard",
  },
  {
    element: <Credentials />,
    path: "/credentials"
  }
];
