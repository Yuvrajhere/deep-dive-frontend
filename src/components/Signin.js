import React, { useState } from "react";
import "../styles/Signin.css";
import { Link, useHistory } from "react-router-dom";

const Signin = (props) => {

  let history = useHistory();

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.signin(userData);
    setUserData({
      email: "",
      password: ""
    });
    history.push("/");
  }

  return (
    <div className="Signin">
      <form onSubmit={handleSubmit}>
        <h3>Signin</h3>
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
        <button className="btn post">Signin</button>
        <p>Dont have an account yet?</p>
        <p><Link to="/signup">Sign Up here.</Link></p>
      </form>
    </div>
  );
};

export default Signin;