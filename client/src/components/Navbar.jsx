import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className="py-2 light-2"
    >
      <Container fluid className="px-3 px-md-5">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <b> Jobflow</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/">All jobs</Nav.Link>
            <Nav.Link eventKey={2} href="/blog">
              Blog
            </Nav.Link>
            <Nav.Item>
              <Button
                variant="secondary"
                className="btn-round btn-ldark"
                onClick={() => {
                  navigate("/postjob");
                }}
              >
                Post a job
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button
                variant="primary mx-lg-2 my-1 my-lg-0"
                className="btn-round"
              >
                Subscribe
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant="primary" className="btn-round">
                Login
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
