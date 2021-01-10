import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from '_components';
import { LoginPage } from 'LoginPage';

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/login" component={LoginPage} />
      <PrivateRoute path="/admin" component={Admin} />
      <PrivateRoute path="/rtl" component={RTL} />
      <PrivateRoute from="/" to="/admin/dashboard" />
      <PrivateRoute exact path="/" component={Admin} />

    </Switch>
  </Router>,
  document.getElementById("root")
);
