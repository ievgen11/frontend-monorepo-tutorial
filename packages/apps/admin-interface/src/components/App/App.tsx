import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Button, AdminHeader, Footer } from "@delipack/design-system";

import Authentication from "../../services/Authentication";

import { AuthenticationPage } from "../AuthenticationPage";
import { OverviewPage } from "../OverviewPage";
import { Dashboard } from "../Dashboard";

export const App = () => {
  const auth = Authentication.getInstance();

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const onAuthenticateClick = () => {
    window.location.href = "/authenticate";
  };

  const onLogoutClick = () => {
    auth.clear();
    window.location.reload();
  };

  return (
    <Router>
      <AdminHeader onLogoClick={handleLogoClick}>
        <p style={{ marginRight: "24px" }}>
          Built with Typescript and a custom Design System. More info{" "}
          <a href="https://delipack.web.app/"> here</a>. 🐔
        </p>
        <div style={{ alignSelf: "flex-end" }}>
          {auth.isAuthenticated() ? (
            <Button onClick={onLogoutClick}>Log out</Button>
          ) : (
            <Button onClick={onAuthenticateClick}>Log in</Button>
          )}
        </div>
      </AdminHeader>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/authenticate">
          <AuthenticationPage />
        </Route>
        {auth.isAuthenticated() ? (
          <Route exact path="/overview">
            <OverviewPage />
          </Route>
        ) : null}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
