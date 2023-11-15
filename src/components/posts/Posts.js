import "./Posts.css";

import { Container } from "react-bootstrap";
import PostList from "./PostList";
import { defaultPosts } from "../../data/posts";
import { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState(defaultPosts);
  return (
    <div className="posts">
      <PostList posts={posts} />
    </div>
  );
};

export default Posts;
