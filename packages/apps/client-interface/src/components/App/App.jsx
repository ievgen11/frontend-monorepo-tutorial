import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Dashboard } from "../Dashboard";
import { NotFoundPage } from "../NotFoundPage";
import { TrackPage } from "../TrackPage";

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/track/:tracking_number">
        <TrackPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </Router>
);
