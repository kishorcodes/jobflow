import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../logo.svg";
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-2">
      <Container fluid className="px-3 px-md-5">
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Jobflow
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          // fix this hack
          <Nav className="me-auto"></Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/alljobs">All jobs</Nav.Link>
            <Nav.Link eventKey={2} href="/blog">
              Blog
            </Nav.Link>
            <Nav.Link eventKey={3} href="/restapi">
              Rest API
            </Nav.Link>
            <Nav.Link eventKey={4} href="/developers">
              Developers
            </Nav.Link>
            <Nav.Item>
              <Button variant="secondary" className="btn-round btn-ldark">
                Post a job
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant="primary mx-lg-1 my-1 my-lg-0" className=" btn-round">
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
    // <Navbar bg="dark" variant="dark" className="py-2">
    //   <Container fluid className="px-5">
    //     <Navbar.Brand href="#home">
    //       <img
    //         alt="logo"
    //         src={logo}
    //         width="28"
    //         height="28"
    //         className="d-inline-block align-top"
    //       />{" "}
    //       Careerquest
    //     </Navbar.Brand>
    //     <Nav>
    //       <Nav.Link active href="/alljobs">
    //         All jobs
    //       </Nav.Link>
    //       <Nav.Link eventKey={2} href="#memes">
    //         Dank memes
    //       </Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
  );
}

export default NavBar;
