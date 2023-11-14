import { Button, Container, Jumbotron, Nav, Navbar } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">TravelBlog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Destinations</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron
        style={{
          backgroundImage: `url(/tropical-island.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <h1>Welcome to TravelBlog!</h1>
        <p>Discover the most beautiful destinations around the world.</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      <Container>
        <h2>Latest Articles</h2>
        {/* Articles or content goes here */}
      </Container>
    </div>
  );
}

export default Home;
