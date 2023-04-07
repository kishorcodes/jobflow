import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import landing from "../assets/images/career.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/esm/Button";
import "./Landing.css";
import SearchBar from "./SearchBar";
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
      <Container fluid>
        <Row
          style={{
            background: "#3A7197",
            minHeight: "75vh",
            height: "fit-content",
          }}
          className="flex-column flex-lg-row  align-items-center py-5 px-4 px-md-5 "
        >
          <Col>
            <h2 className="text-yellow">
              <b> Effortlessly find remote job opportunities with Jobflow.</b>
            </h2>

            <h5 className="my-3 text-white">
              We have simplified the process of searching and filtering the
              latest remote job listings for you.
            </h5>

            <div className="subscribe-group">
              <Button variant="info">Subscribe</Button>
              <span className="join-text">Join our 10000 + Subscribers</span>
            </div>
          </Col>
          <Col>
            <Image src={landing} alt="career" rounded fluid />
          </Col>
        </Row>
      </Container>
      <SearchBar overlay={true}></SearchBar>
    </div>
  );
}

export default Landing;
