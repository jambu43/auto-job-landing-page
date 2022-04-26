import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

// redux store
import { Provider } from "react-redux";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </Router>
    </ChakraProvider>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
