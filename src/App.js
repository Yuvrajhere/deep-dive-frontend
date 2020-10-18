import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory
} from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import PostForm from "./components/PostForm";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import "./App.css";


function App() {

  const history = useHistory();

  const [user, setUser] = useState({});

  const [isSignedIn, setIsSignedIn] = useState(localStorage.getItem("isSignedIn"));

  const signin = (userData) => {
    axios
      .post("http://localhost:5000/api/signin", userData)
      .then(res => {
        if(res.error) {
          setIsSignedIn(false);
          alert("Error: ", res.error);
          localStorage.setItem("isSignedIn", false);
        } else {
          console.log(res.data.user);
          setUser(res.data.user);
          setIsSignedIn("true");
          localStorage.setItem("isSignedIn", true);
          localStorage.setItem("user", JSON.stringify(res.data.user))
        }
      });
  }

  const signout = () => {
    setUser({});
    setIsSignedIn(false);
    localStorage.removeItem("isSignedIn");
    localStorage.removeItem("user");
  }

  useEffect(() => {
    if(localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")))
    }
  }, []);

  return (
    <Router>
      <div className="container">
        <Navbar isSignedIn={isSignedIn} signout={signout} />

        <Switch>
          <Route exact path="/create/post">
            <PostForm user={user} />
          </Route>
          <Route exact path="/signin" >
            <Signin signin={signin} />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/profile">
            <Profile user={user} />
          </Route>
          <Route exact path="/">
            <Home user={user} isSignedIn={isSignedIn} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
