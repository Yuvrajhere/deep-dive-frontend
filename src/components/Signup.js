import React from "react";
import "../styles/Signin.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="Signin">
      <form>
        <h3>Signup</h3>
        <div>
          <label>Username</label>
          <input />
        </div>
        <div>
          <label>Email</label>
          <input />
        </div>
        <div>
          <label>Password</label>
          <input />
        </div>
        <button className="btn post">Signup</button>
        <p>Already have an account?</p>
        <p><Link to="/signin">Sign In here.</Link></p>
      </form>
    </div>
  );
};

export default Signup;