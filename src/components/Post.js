import React, { useState } from "react";
import "../styles/Post.css";
import axios from "axios";

const Post = ({ post, user, test, setTest }) => {

  const [commentData, setCommentData] = useState({
    text: ""
  })

  const handleInputChange = e => {
    setCommentData({
      text: e.target.value
    });
  };

  const handleSendSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/post/" + post._id + "/" + user._id + "/comment", commentData)
      .then(res => {
        if(res.error) {
          alert("Error", res.error);
        } else {
          setCommentData({
            text: ""
          });
          setTest(!test);
        }
      })
  }

  return (
    <div className="Post">
      <div className="post-info">
        <div className="post-info-user">
          <div>
            <h3>{post.heading}</h3>
            <p>-{post.postedBy.username}</p>
          </div>
          <p>{post.description}</p>
        </div>
        <div className="post-info-artist">
          <div>
            <h4>{post.artist}</h4>
            <p>{post.category.name}</p>
          </div>
          <a href={post.contentLink}>{post.contentLink}</a>
        </div>
      </div>
      <div className="comment-section">
        <div>
          <h4>Comments:</h4>
          <div className="comments">
            {post.comment.map((item) => {
              return (
                <div className="comment">
                  <p className="comment-text">{item.text}</p>
                  <p className="comment-user">- {item.userName}</p>
                </div>
              );
            })}
          </div>
        </div>
        <form onSubmit={handleSendSubmit} className="comment-box">
          <input
            type="text"
            name="text"
            id="text"
            autoComplete="off"
            onChange={handleInputChange}
            value={commentData.text} />
          <button className="cmnt">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
