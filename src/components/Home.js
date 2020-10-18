import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Post from "./Post";
import axios from "axios";

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get("http://localhost:5000/api/post/all")
      .then(res => {
        if(res.error) {
          alert("Error occured in fetching data!");
        } else {
          console.log(res.data);
          setPosts(res.data);
        }
      })
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    props.isSignedIn ? (
      <div className="Home">
        <ul>
          <li>
            <h2>Your feed </h2>
          </li>
          <li>
            <Link to="/create/post"><button className="btn new">Add a new Post</button></Link>
          </li>
        </ul>
        <div className="posts">
          {
            posts.map(post => {
              return <Post post={post} />
            })
          }
        </div>
    </div>
    ) : (
      <div className="Home-2">
        <h2>Deep Dive</h2>
        <p>Deep dive is a webapp made for people who want to promote under-rated artists.</p>
        <button className="btn"><Link to="/signin">Signin here</Link></button>
      </div>
    )
  );
};

export default Home;
