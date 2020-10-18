import React from "react";
import "../styles/Signin.css";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="Signin">
      <form>
        <h3>Signin</h3>
        <div>
          <label>Email</label>
          <input />
        </div>
        <div>
          <label>Password</label>
          <input />
        </div>
        <button className="btn post">Post</button>
        <p>Dont have an account yet?</p>
        <p><Link to="/signup">Sign Up here.</Link></p>
      </form>
    </div>
  );
};

export default Signin;