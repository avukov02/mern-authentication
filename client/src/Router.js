import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./Components/auth/Register";
import Navbar from "./Components/Layout/Navbar";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <div>Login</div>
        </Route>
        <Route path="/customer">
          <div>Customers</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
