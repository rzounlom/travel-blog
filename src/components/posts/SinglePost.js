import "./SinglePost.css";

import { Button } from "react-bootstrap";
import CommentsList from "./CommentsList";
import { Link } from "react-router-dom";

const testPost = {
  id: "post001",
  author: "John Doe",
  published: true,
  createdAt: "2023-04-03T01:00:52.546Z",
  destination: "Paris, France",
  imgUrl:
    "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "A Weekend in Paris: The City of Lights",
  comments: [
    "Loved your article!",
    "Paris is my dream destination.",
    "Great tips for first-time visitors.",
  ],
  story:
    "Discovering the charm of Parisian streets, from the majestic Eiffel Tower to the quaint cafes of Montmartre.",
};

const SinglePost = () => {
  return (
    <div className="single-post">
      <div className="card-container">
        <div className="card-img">
          <img src={`${testPost.imgUrl}`} />
        </div>
        <div className="card-content">
          <Link to={`/posts`}>
            <Button variant="outline-primary">Back to all posts</Button>
          </Link>
          <div className="card-header">
            <h2>{testPost.title}</h2>
          </div>
          <div className="card-description">
            <div className="card-text">
              <p>{testPost.story}</p>
            </div>
            <div className="card-comments">
              <div className="add-comment">
                <h5 style={{ color: "darkgray", textAlign: "center" }}>
                  Add a comment
                </h5>
                <input type="text" placeholder="Your comment" />
                <Button variant="outline-primary">Submit</Button>
              </div>
              <CommentsList comments={testPost.comments} />
            </div>
          </div>
          <div className="card-footer">
            <div className="item">
              <span>Written by: </span>
              {testPost.author}
            </div>
            <div className="item">
              <span>Published: </span>
              {testPost.createdAt}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
