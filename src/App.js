import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen, ContextScreen } from "./screens";
import { ToggleProvider } from "./screens/ToggleContext";
import { ThemeProvider } from "./screens/ThemeContext";

function App() {
  return (
    <Router>
      <ToggleProvider>
        <Route exact path="/" component={HomeScreen} />
      </ToggleProvider>
      <ThemeProvider>
        <Route exact path="/context" component={ContextScreen} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
