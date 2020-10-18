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
import PostForm from "./components/PostForm";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />

        <Switch>
          <Route exact path="/create/post">
            <PostForm />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
