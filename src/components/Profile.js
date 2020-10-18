import React, { useState, useEffect } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Profile.css";

const Profile = (props) => {

  const [ posts, setPosts ] = useState([]);
  const [test, setTest] = useState(true);

  useEffect(() => {
    axios
      .get("https://deeep-dive.herokuapp.com/api/post/" + props.user._id)
      .then(res => {
        if(res.error) {
          alert("Error",res.error)
        } else {
          console.log(res);
          setPosts(res.data);
        }
      })
  }, []);


  return (
    <div className="Profile">
      <h2>Your Profile</h2>
      <div className="profile-info">
        <div className="profile-info-data">
          <p>{props.user.username}</p>
          <p>{props.user.email}</p>
        </div>
        <ul>
          <li>
            <h2>Your feed </h2>
          </li>
          <li>
            <Link to="/create/post"><button className="btn new">Add a new Post</button></Link>
          </li>
        </ul>
      </div>
      <div>
        {
          posts.map(post => {
            return <Post post={post} user={props.user} test={test} setTest={setTest}/>
          })
        }
      </div>
    </div>
  );
};

export default Profile;