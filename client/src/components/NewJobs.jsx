import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import NewJobsCard from "./NewJobsCard";
const NewJobs = () => {
  return (
    <Container className="mt-3">
     
      <Row xs={2} lg={4} className="justify-content-center">
        <Col>
          <NewJobsCard></NewJobsCard>
        </Col>
        <Col>
          <NewJobsCard></NewJobsCard>
        </Col>
        <Col>
          <NewJobsCard></NewJobsCard>
        </Col>
        <Col>
          <NewJobsCard></NewJobsCard>
        </Col>
      </Row>
      <Row xs={2} lg={4}>
        <Col>
          <NewJobsCard></NewJobsCard>
        </Col>
        <Col>
          <NewJobsCard></NewJobsCard>
        </Col>
        <Col>
          <NewJobsCard></NewJobsCard>
        </Col>
        <Col>
          <NewJobsCard></NewJobsCard>
        </Col>
      </Row>
    </Container>
  );
};

export default NewJobs;
