import React from "react";
import "../styles/Post.css";

const Post = ({ post }) => {
  return (
    <div className="Post">
      <div className="post-info">
        <div className="post-info-user">
          <div>
            <h3>{post.heading}</h3>
            <p>-{post.postedBy}</p>
          </div>
          <p>{post.description}</p>
        </div>
        <div className="post-info-artist">
          <div>
            <h4>{post.artist}</h4>
            <p>{post.category}</p>
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
                  <p className="comment-user">- {item.postedBy}</p>
                </div>
              );
            })}
            <p>
              It is a good platform to learn programming. It is an educational
              website. Prepare for the Recruitment drive of product based
              companies like Microsoft, Amazon, Adobe etc with a free online
              placement preparation course. The course focuses on various MCQ's
              & Coding question likely to be asked in the interviews & make your
              upcoming placement season efficient and successful. Also, any
              geeks can help other geeks by writing articles on the
              GeeksforGeeks, publishing articles follow few steps that are
              Articles that need little modification/improvement from reviewers
              are published first. To quickly get your articles reviewed, please
              refer existing articles, their formatting style, coding style, and
              try to make you are close to them. In case you are a beginner, you
              may refer Guidelines to{" "}
            </p>
          </div>
        </div>
        <form className="comment-box">
          <input className="btn" type="text" />
          <button className="btn cmnt">Send</button>
        </form>
      </div>
    </div>
  );
};

// {
//   heading: "Amazing artist",
//   description : "I saw his videos yesterday and I really liked it. A briliant musician, lyricist and singer.",
//   category: "music",
//   artist: "Anuv Jain",
//   contentLink: "https://www.youtube.com/channel/UCafUh796DToiY2U3s7X_WTw",
//   postedBy: "Yuvrajhere",
//   comment: [
//     {
//       text: "Wow",
//       postedBy: "pikapika"
//     },
//     {
//       text: "Awesome, I think he is good.",
//       postedBy: "nihal"
//     }
//   ],
//   createdAt: new Date("2020-10-17T07:48:15.457+00:0")
// },

export default Post;
