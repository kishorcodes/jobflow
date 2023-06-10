import { Col, Container, Image, Row } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import landing from "../assets/images/professionals.jpg";
import "./Landing.css";
import SearchBar from "./SearchBar";
function Landing() {
  return (
    <div className="landing-wrapper">
      <Container fluid>
        <Row
          style={{
            background: "#F7F7F7",
            minHeight: "75vh",
            height: "fit-content",
          }}
          className="flex-column flex-lg-row  align-items-center py-5 px-4 px-md-5 "
        >
          <Col>
            <h2 className="text-black2">
              <b> Effortlessly find remote job opportunities with Jobflow.</b>
            </h2>

            <h5 className="my-3 text-darkgrey">
              We have simplified the process of searching and filtering the
              latest remote job listings for you.
            </h5>

            <div className="subscribe-group">
              <Button variant="primary">Subscribe</Button>
              <span className="join-text">Join our 10000 + Subscribers!</span>
            </div>
          </Col>

          <Col>
            <Image src={landing} alt="career" rounded fluid />
          </Col>

        </Row>
      </Container>
      <SearchBar overlay={true} width={"75"}></SearchBar>
    </div>
  );
}

export default Landing;
