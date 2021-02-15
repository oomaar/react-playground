import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen, ContextScreen } from "./screens";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/context" component={ContextScreen} />
      </Switch>
    </Router>
  );
}

export default App;
