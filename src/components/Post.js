import React from "react";
import "../styles/Post.css";

const Post = ({ post }) => {
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
          <p>{post.contentLink}</p>
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
                  <p className="comment-user">- {item.postedBy.username}</p>
                </div>
              );
            })}
          </div>
        </div>
        <form className="comment-box">
          <input type="text" />
          <button className="cmnt">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
