import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen, CardScreen, CssScreen } from "./screens";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/card" component={CardScreen} />
        <Route exact path="/css" component={CssScreen} />
      </Switch>
    </Router>
  );
}

export default App;
