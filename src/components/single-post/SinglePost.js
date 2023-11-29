import "./SinglePost.css";

import { Button, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getPostById, updatePost } from "../../services/postsService";
import { useEffect, useState } from "react";

import CommentsList from "./CommentsList";
import { toast } from "react-toastify";

// const testPost = {
//   id: "post001",
//   author: "John Doe",
//   published: true,
//   createdAt: "2023-04-03T01:00:52.546Z",
//   destination: "Paris, France",
//   imgUrl:
//     "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   title: "A Weekend in Paris: The City of Lights",
//   comments: [
//     "Loved your article!",
//     "Paris is my dream destination.",
//     "Great tips for first-time visitors.",
//   ],
//   story:
//     "Discovering the charm of Parisian streets, from the majestic Eiffel Tower to the quaint cafes of Montmartre.",
// };

const SinglePost = () => {
  const { postId } = useParams(); // get id of post from url

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({}); // initialize post state variable
  const [comment, setComment] = useState([]); // initialize comments state variable

  const fetchPost = async () => {
    try {
      setLoading(true);
      const foundPost = await getPostById(postId);
      // console.log(foundPost);
      setPost(foundPost);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const submitComment = async (event) => {
    event.preventDefault();
    if (!comment) {
      toast.error("Please enter a comment");
      return;
    }
    try {
      setLoading(true);
      const updatedPost = await updatePost(postId, {
        comments: [...post.comments, comment],
      });
      // console.log(updatedPost);
      setPost(updatedPost);
    } catch (error) {
      console.error(error);
    } finally {
      setComment("");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="single-post">
      <div className="card-container">
        <div className="card-img">
          {loading ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            <img src={`${post.imgUrl}`} />
          )}
        </div>
        <div className="card-content">
          <Link to={`/posts`}>
            <Button variant="outline-primary">Back to all posts</Button>
          </Link>
          <div className="card-header">
            {loading ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              <h2>{post.title}</h2>
            )}
          </div>
          <div className="card-description">
            <div className="card-text">
              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                <p>{post.story}</p>
              )}
            </div>
            <div className="card-comments">
              <div className="add-comment">
                <h5 style={{ color: "darkgray", textAlign: "center" }}>
                  Add a comment
                </h5>
                <input
                  type="text"
                  value={comment}
                  onChange={handleInputChange}
                  placeholder="Your comment"
                />
                <Button variant="outline-primary" onClick={submitComment}>
                  Submit
                </Button>
              </div>

              {loading ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                <CommentsList comments={post.comments} />
              )}
            </div>
          </div>
          <div className="card-footer">
            <div className="item">
              <span>Written by: </span>
              {post.author}
            </div>
            <div className="item">
              <span>Published: </span>
              {post.createdAt}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
