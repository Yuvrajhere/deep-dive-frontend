import React from "react";
import "../styles/PostForm.css";

const PostForm = () => {
  return (
    <div className="PostForm">
      <form>
        <h3>Post about your artist.</h3>
        <div>
          <label>Heading</label>
          <input />
        </div>
        <div>
          <label>Description</label>
          <input />
        </div>
        <div>
          <label>Artist name</label>
          <input />
        </div>
        <div>
          <label>Category</label>
          <input />
        </div>
        <div>
          <label>Content link</label>
          <input />
        </div>
        <button className="btn post">Post</button>
      </form>
    </div>
  );
};

export default PostForm;