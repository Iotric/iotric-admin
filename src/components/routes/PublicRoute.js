import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
  const token = localStorage.getItem("user-token");

  if (token) {
    return true;
  } else {
    return false;
  }
};

const PublicRoute = () => {
    const auth = useAuth()
    return (
        <div>
           { auth ? <Navigate to="/dashboard" />: <Outlet />} 
        </div>
    )
}

export default PublicRoute
