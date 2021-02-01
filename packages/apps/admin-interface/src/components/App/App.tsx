import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { AuthenticationPage } from "../AuthenticationPage";
import { Dashboard } from "../Dashboard";

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/authenticate">
        <AuthenticationPage />
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  </Router>
);
