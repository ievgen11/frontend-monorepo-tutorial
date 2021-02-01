import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Button, AdminHeader, Footer } from "@delipack/design-system";

import { AuthenticationPage } from "../AuthenticationPage";
import { Dashboard } from "../Dashboard";

export const App = () => {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const onAuthenticateClick = () => {
    window.location.href = "/authenticate";
  };

  return (
    <Router>
      <AdminHeader onLogoClick={handleLogoClick}>
        <Button onClick={onAuthenticateClick}>Authenticate</Button>
      </AdminHeader>
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
      <Footer />
    </Router>
  );
};
