import { React, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { FastRiderContext } from "../App.js";

export const PrivateRoute = ({ children, ...rest }) => {
  const { singedUser } = useContext(FastRiderContext);
  const isAuthenticated = singedUser.isSingedUser;
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
