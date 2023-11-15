import "./PostCard.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const testPost = {
  id: "post001",
  author: "John Doe",
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

const PostCard = ({ post }) => {
  return (
    <Card className="post-card">
      <Card.Img variant="top" src={`${testPost.imgUrl}`} />
      <Card.Body>
        <Card.Title>{testPost.title}</Card.Title>
        <Card.Text>{testPost.story.slice(0, 60)}...</Card.Text>
        <Button variant="primary">Read full story</Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
