import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ClientHeader, Footer } from "@delipack/design-system";

import { Dashboard } from "../Dashboard";
import { NotFoundPage } from "../NotFoundPage";
import { TrackPage } from "../TrackPage";

export const App = () => {
  const handleLogoClick = () => {
    window.location = "/";
  };

  return (
    <Router>
      <ClientHeader onLogoClick={handleLogoClick}>
        <p>
          Built with JS and a custom Design System. More info{" "}
          <a href="https://delipack.web.app/"> here</a>. 🐣
        </p>
      </ClientHeader>
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
      <Footer />
    </Router>
  );
};
