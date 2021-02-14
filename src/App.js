import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardScreen from "./screens/CardScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/card" component={CardScreen} />
      </Switch>
    </Router>
  );
}

export default App;
