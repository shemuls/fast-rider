import React from "react";
import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "../../Auth/PrivateRoute.js";
import { DestinationPage } from "../../pages/DestinationPage/DestinationPage.js";
import { Home } from "../../pages/Home/Home.js";
import { LoginPage } from "../../pages/Login/LoginPage.js";

export const MainContent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>

      <Route exact path="/destination">
        <LoginPage />
      </Route>

      <PrivateRoute path="/destination/:rideItem">
        <DestinationPage />
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
