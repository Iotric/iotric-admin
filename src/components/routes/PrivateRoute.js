import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "../../pages/dashboard/dashboard.jsx";
import Profile from "../../pages/profile/";

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
  const isProfileComplete = useSelector(
    (store) => store.auth.isProfileComplete
  );

  return (
    <div>
      {auth ? (
        isProfileComplete ? (
          <Outlet />
        ) : (
          <Navigate to="/complete-profile" />
        )
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default PrivateRoute;
