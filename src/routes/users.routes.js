import React from "react";
import { userInputs } from "../formSource";

const List = React.lazy(() => import("../pages/list/List"));
const Single = React.lazy(() => import("../pages/single/Single"));
const New = React.lazy(() => import("../pages/new/New"));

export default [
  {
    path: "admins",
    children: [
      {
        element: <List />,
        index: true,
      },
      {
        element: <Single />,
        path: ":userId",
      },
      {
        element: <New inputs={userInputs} title="Add New User" />,
        path: "new",
      },
    ],
  },
];
