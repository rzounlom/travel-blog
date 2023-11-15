import "./Home.css";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  return (
    <Container className="home">
      <h1>Welcome To My Travel Blog</h1>
      <Link to="/stories">
        <button>Let's Go Places</button>
      </Link>
    </Container>
  );
}

export default Home;
