import React from "react";
import { useRoutes } from "react-router-dom";

import Error from "../pages/Error/Error";
import AuthRoutes from "./auth.routes";
import DashboardRoutes from "./dashboard.routes";
import UsersRoutes from "./users.routes";

// import { useSelector } from "react-redux";

const Routing = () => {
  // const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);

  const routes = useRoutes([
    ...AuthRoutes,
    ...DashboardRoutes,
    ...UsersRoutes,
    { element: <Error />, path: "*" },
  ]);

  return routes;
};

export default Routing;
