import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Post from "./Post";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [posts, setPosts] = useState([
    {
      heading: "Amazing artist",
      description : "I saw his videos yesterday and I really liked it. A briliant musician, lyricist and singer.",
      category: "music",
      artist: "Anuv Jain",
      contentLink: "https://www.youtube.com/channel/UCafUh796DToiY2U3s7X_WTw",
      postedBy: "Yuvrajhere",
      comment: [
        {
          text: "Wow",
          postedBy: "pikapika"
        },
        {
          text: "Awesome, I think he is good.",
          postedBy: "nihal"
        }
      ],
      createdAt: new Date("2020-10-17T07:48:15.457+00:0")
    },
    {
      heading: "Amazing artist",
      description : "I saw his videos yesterday and I really liked it. A briliant musician, lyricist and singer.",
      category: "music",
      artist: "Anuv Jain",
      contentLink: "https://www.youtube.com/channel/UCafUh796DToiY2U3s7X_WTw",
      postedBy: "Yuvrajhere",
      comment: [
        {
          text: "Wow",
          postedBy: "pikapika"
        },
        {
          text: "Awesome, I think he is good.",
          postedBy: "nihal"
        }
      ],
      createdAt: new Date("2020-10-17T07:48:15.457+00:0")
    },
    {
      heading: "Amazing artist",
      description : "I saw his videos yesterday and I really liked it. A briliant musician, lyricist and singer.",
      category: "music",
      artist: "Anuv Jain",
      contentLink: "https://www.youtube.com/channel/UCafUh796DToiY2U3s7X_WTw",
      postedBy: "Yuvrajhere",
      comment: [
        {
          text: "Wow",
          postedBy: "pikapika"
        },
        {
          text: "Awesome, I think he is good.",
          postedBy: "nihal"
        }
      ],
      createdAt: new Date("2020-10-17T07:48:15.457+00:0")
    }
  ]);


  return (
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
  );
};

export default Home;
