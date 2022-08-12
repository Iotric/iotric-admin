import React from "react";
import { productInputs } from "../formSource";

const List = React.lazy(() => import("../pages/list/List"));
const Single = React.lazy(() => import("../pages/single/Single"));
const New = React.lazy(() => import("../pages/new/New"));



export default [
  {
    path: "products",
    children: [
      {
        element: <List />,
        index: true,
      },
      {
        element: <Single />,
        path: ":productId",
      },
      {
        element: <New inputs={productInputs} title="Add New Product" />,
        path: "new",
      },
    ],
  },
];
