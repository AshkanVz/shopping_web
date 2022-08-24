import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const ProtectedLogOutRoute = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to={-1} />;
  }
  return children;
};

export default ProtectedLogOutRoute;