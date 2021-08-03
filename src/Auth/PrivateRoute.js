import { React, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { FastRiderContext } from "../App.js";

export const PrivateRoute = ({ children, ...rest }) => {
  const { singedInUser } = useContext(FastRiderContext);
  const isAuthenticated = singedInUser.isSingedUser;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};
