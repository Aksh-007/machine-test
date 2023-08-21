import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children, isAdmin }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children ? children : <Outlet />;
  // here pass return children;
};

export default ProtectedRoute;
