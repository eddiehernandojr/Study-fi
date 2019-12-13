import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Route, Switch, HashRouter } from "react-router-dom";
import AuthRoute from "../util/route_util";
import Login from "./Login";
import Nav from "./Nav";

const App = () => {
  return (
    <div>
      <h1>Study-fi</h1>
        <Nav />
        <AuthRoute exact path="/login" component={Login} routeType="auth" />
    </div>
  );
};

export default App;