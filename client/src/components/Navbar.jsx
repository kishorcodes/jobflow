import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../logo.svg";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="py-2"
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
            {/* <Nav.Link eventKey={3} href="/restapi">
              Rest API
            </Nav.Link> */}
            {/* <Nav.Link eventKey={4} href="/developers">
              Developers
            </Nav.Link> */}
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
                variant="primary mx-lg-1 my-1 my-lg-0"
                className=" btn-round"
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
}

export default NavBar;
