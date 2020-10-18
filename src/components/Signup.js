import React, { useState } from "react";
import "../styles/Signin.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Signup = (props) => {

  let history = useHistory();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const signup = (userData) => {
    axios
      .post("https://deeep-dive.herokuapp.com/api/signup", userData)
      .then(res => {
        if(res.error) {
          alert("Error: ", res.error);
        } else {
          console.log(res.data);
          history.push("/signin");
        }
      })
  }

  const handleInputChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    signup(userData);
    setUserData({
      username: "",
      email: "",
      password: ""
    })
  }

  return (
    <div className="Signin">
      <form onSubmit={handleSubmit}>
        <h3>Signup</h3>
        <div>
          <label for="username">Username</label>
          <input
            type="text"
            autoComplete="off"
            value={userData.username}
            name="username"
            id="username"
            onChange={handleInputChange} />
        </div>
        <div>
          <label for="email">Email</label>
          <input 
            type="text"
            autoComplete="off"
            value={userData.email}
            name="email"
            id="email"
            onChange={handleInputChange}/>
        </div>
        <div>
          <label for="password">Password</label>
          <input 
            type="password"
            autoComplete="off"
            value={userData.password}
            name="password"
            id="password"
            onChange={handleInputChange}/>
        </div>
        <button className="btn post">Signup</button>
        <p>Already have an account?</p>
        <p><Link to="/signin">Sign In here.</Link></p>
      </form>
    </div>
  );
};

export default Signup;