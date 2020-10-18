import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/PostForm.css";

const PostForm = (props) => {

  let history = useHistory();

  const [categories, setCategories] = useState([]);

  const [postData, setPostData] = useState({
    heading: "",
    description: "",
    artist: "",
    contentLink: "",
    category: ""
  })

  const handleInputChange = e => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value
    })
  }

  const handlePostSubmit = e => {
    e.preventDefault();
    console.log(postData);
    axios
      .post("https://deeep-dive.herokuapp.com/api/post/create/"+props.user._id, postData)
      .then(res => {
        if(res.error) {
          alert("Error", res.error);
        } else {
          setPostData({
            heading: "",
            description: "",
            artist: "",
            contentLink: "",
            category: ""
          });
          history.push("/");
        }
      });
  }

  useEffect(() => {
    axios
      .get("https://deeep-dive.herokuapp.com/api/categories")
      .then(res => {
        if(res.error) {
          alert("Error", res.error);
        } else {
          setCategories(res.data);
        }
      })
  }, []);


  return (
    <div className="PostForm">
      <form onSubmit={handlePostSubmit}>
        <h3>Post about your artist.</h3>
        <div>
          <label for="heading">Heading</label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={postData.heading}
            onChange={handleInputChange}
            autoComplete="off" />
        </div>
        <div>
          <label for="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={postData.description}
            onChange={handleInputChange}
            autoComplete="off" />
        </div>
        <div>
          <label for="artist">Artist name</label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={postData.artist}
            onChange={handleInputChange}
            autoComplete="off" />
        </div>
        <div>
          <label for="category">Category</label>
          <select 
            id="category" 
            name="category"
            value={postData.category}
            onChange={handleInputChange} >
              <option value="">select</option>
              {
                categories.map(item => {
                  return <option value={item._id}>{item.name}</option>
                })
              }
          </select>
        </div>
        <div>
          <label for="contentLink">Content link</label>
          <input
            type="text"
            id="contentLink"
            name="contentLink"
            value={postData.contentLink}
            onChange={handleInputChange}
            autoComplete="off" />
        </div>
        <button className="btn post">Post</button>
      </form>
    </div>
  );
};

export default PostForm;