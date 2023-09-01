import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, userRole, allowedRoles, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          // Check if the user has the required role to access the route
          if (allowedRoles.includes(userRole)) {
            return <Component {...props} />;
          } else {
            // Redirect to an unauthorized page or another appropriate route
            return <Redirect to="/unauthorized" />;
          }
        }
        // Redirect unauthenticated users to the login page
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
