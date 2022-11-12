import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const id = localStorage.getItem("enterpriseId");

  return (
    <div>
      {auth ? (
        isProfileComplete ? (
          <Outlet />
        ) : (
          <Navigate to={`/complete-profile/${id}`} />
        )
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default PrivateRoute;
