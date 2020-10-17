import React, { Profiler } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />

        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
