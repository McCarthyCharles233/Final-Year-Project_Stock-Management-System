import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  // Check if user has a token and the right role
  if (token && allowedRoles.includes(userRole)) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
