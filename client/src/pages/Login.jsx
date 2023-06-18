import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavBar from "../components/Navbar";
import "./Signup.css";
const Login = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="signin-container">
        <div className="signin-wrapper">
          <h2>Sign In</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                className="py-2"
                type="email"
                placeholder="E-mail address"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button className="w-100 py-2" variant="primary" type="submit">
              LOGIN
            </Button>
          </Form>
          <Breadcrumb className="no-underline">
            <Breadcrumb.Item href="#">Forgot Password</Breadcrumb.Item>
            <Breadcrumb.Item href="/signup">Sign Up</Breadcrumb.Item>
          </Breadcrumb>
          <div class="hr-container">
            <div class="hr-sect">
              <span>OR</span>
            </div>
          </div>
          
          <div className="thirdparty-signin-wrapper">
            <p className="thirdparty-signin-title">
              Sign in with a third party
            </p>
            <Button className="w-100 py-2" variant="dark" type="submit">
              GITHUB
            </Button>{" "}
            <Button className="w-100 py-2" variant="danger" type="submit">
              GOOGLE
            </Button>{" "}
            <Button className="w-100 py-2" variant="primary" type="submit">
              LINKEDIN
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
