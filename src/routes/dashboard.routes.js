import React from "react";

const Dashboard = React.lazy(() => import("../pages/dashboard/dashboard"));
const Profile = React.lazy(() => import("../pages/profile/Profile"));
const Credentials = React.lazy(() =>
  import("../pages/credentials/Credentials")
);

export default [
  {
    element: <Dashboard />,
    path: "/dashboard",
  },
  {
    element: <Credentials />,
    path: "/credentials",
  },
  {
    element: <Profile />,
    path: "/profile",
  },
];
