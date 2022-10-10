import React from "react";

const Dashboard = React.lazy(() => import("../pages/dashboard/dashboard"));
const ProfileStepper = React.lazy(() => import("../pages/profile/"));
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
    element: <ProfileStepper />,
    path: "/profile",
  },
];
