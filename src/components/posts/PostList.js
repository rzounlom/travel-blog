import "./PostList.css";

import { Col, Container, Row } from "react-bootstrap";

import PostCard from "./PostCard";

const PostList = () => {
  return (
    <Container className="post-list">
      <Row>
        <Col lg={4} md={6}>
          <PostCard />
        </Col>
        <Col lg={4} md={6}>
          <PostCard />
        </Col>
        <Col lg={4} md={6}>
          <PostCard />
        </Col>
        <Col lg={4} md={6}>
          <PostCard />
        </Col>
        <Col lg={4} md={6}>
          <PostCard />
        </Col>
        <Col lg={4} md={6}>
          <PostCard />
        </Col>
      </Row>
    </Container>
  );
};

export default PostList;
