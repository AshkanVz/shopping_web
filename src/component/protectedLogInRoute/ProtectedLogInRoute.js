import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedLogInRoute = ({ children }) => {
  const { user } = UserAuth();
  if (user) {
    return <Navigate to={-1} />;
  }
  return children;
};

export default ProtectedLogInRoute;
