import React from "react";
import CardList from "./CardList";
import LoginForm from "./LoginForm";
import Home from "./Home";
import Navbar from "./Navbar";
import RegisterForm from "./RegisterForm";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// react-router-dom ??

// yarn add react-router-dom

// olika router

export default function AppRoute() {
  return (
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cardlist" component={CardList} />
          <Route exact path="/LoginForm" component={LoginForm} />
          <Route exact path="/RegisterForm" component={RegisterForm} />
        </Switch>
      </Router>
  );
}
