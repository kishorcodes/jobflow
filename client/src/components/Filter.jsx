import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
function TabsExample() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop:20
      }}
    >
      <Row>
        <Col>
          {" "}
          <Nav
           
          >
            <Nav.Link href="#features">Employment</Nav.Link>
            <Nav.Link href="#pricing">Source</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Col>
      </Row>

    </div>
  );
}

export default TabsExample;
