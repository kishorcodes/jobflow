import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import landing from "../assets/images/career2.png";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/esm/Button";
import "./Landing.css";
import Search from "./Search";
function Landing() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container className="job-bg" fluid>
        <Row
          style={{
            background: "#40BEAE",
            minHeight: "75vh",
            height: "fit-content",
          }}
          className="flex-column flex-lg-row  align-items-center py-5 px-4 px-md-5 "
        >
          <Col>
            <h2 className="text-white">
              Tired of searching for remote jobs on multiple pages? Just use
              Jobflow.
            </h2>

            <h5 className="my-3 text-secondary text-primary">
              We’ve done the hard work for you of searching and filtering the
              latest in remote jobs.
            </h5>

            <div className="subscribe-group">
              <Button variant="primary">Subscribe</Button>
              <span className="join-text">Join our 10000 + Subscribers</span>
            </div>
          </Col>
          <Col>
            <Image src={landing} alt="career" rounded fluid />
          </Col>
        </Row>
      </Container>
      <Search></Search>
    </div>
  );
}

export default Landing;
