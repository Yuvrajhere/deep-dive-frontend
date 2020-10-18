import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Post from "./Post";
import axios from "axios";
import homeSvg from "../assets/home-3.svg";

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const [test, setTest] = useState(true);

  const fetchPosts = () => {
    axios
      .get("https://deeep-dive.herokuapp.com/api/post/all")
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
              return <Post post={post} user={props.user} test={test} setTest={setTest}/>
            })
          }
        </div>
    </div>
    ) : (
      <div className="Home-2">
        <div>
          <h2>Deep Dive</h2>
          <p>Deep dive is a webapp made for people who want to promote under-rated artists, educators and other hardworking talented people.</p>
          <button className="btn"><Link to="/signin">Signin here</Link></button>
        </div>
        <img src={homeSvg} alt="share" />
      </div>
    )
  );
};

export default Home;
