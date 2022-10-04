import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
  const token = localStorage.getItem("user-token");

  if (token) {
    return true;
  } else {
    return false;
  }
};

const PrivateRoute = () => {
  const auth = useAuth();
  return <div>{auth ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;
