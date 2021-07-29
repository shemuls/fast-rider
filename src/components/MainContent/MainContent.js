import React from "react";
import { Switch, Route } from "react-router-dom";
import { Destination } from "../Destination/Destination.js";
import { Home } from "../Home/Home.js";

export const MainContent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/destination">
        <Destination />
      </Route>
      <Route exact path="*">
        <h1 className="alert alert-danger p-5">404 erros...</h1>
      </Route>
    </Switch>
  );
};
