import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../../Auth/PrivateRoute.js";
import { Home } from "../../pages/Home/Home.js";
import { LoginPage } from "../../pages/Login/LoginPage.js";
import { Destination } from "../Destination/Destination.js";

export const MainContent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/destination">
        <Destination />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <PrivateRoute path="/test">
        <Destination />
      </PrivateRoute>

      <Route exact path="*">
        <div className="container">
          <div className="row">
            <h1 className="alert alert-danger p-5 text-center my-5">
              404 erros
            </h1>
          </div>
        </div>
      </Route>
    </Switch>
  );
};
