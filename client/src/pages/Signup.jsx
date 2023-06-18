import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import "./Signup.css";
const Signup = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="signin-container">
        <div className="signin-wrapper">
          <h2>Sign Up</h2>
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
              SIGNUP
            </Button>
          </Form>
          <Link to={"/login"} className="no-underline">
            Already have an account? Sign in.
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
