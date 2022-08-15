import React from "react";

const Dashboard = React.lazy(() => import("../pages/dashboard/dashboard"));

export default [
  {
    element: <Dashboard />,
    path: "/dashboard",
  },
];
