import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Dashboard } from "../Dashboard";
import { NotFoundPage } from "../NotFoundPage";

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </Router>
);
