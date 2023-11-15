import "./Posts.css";

import { Container } from "react-bootstrap";
import PostList from "./PostList";

const Posts = () => {
  return (
    <Container className="posts">
      <PostList />
    </Container>
  );
};

export default Posts;
