import { Container, Row, Col } from "react-bootstrap";
import design from "../assets/images/design.svg";
import py from "../assets/images/py.svg";
import NewJobsCard from "./NewJobsCard";

const NewJobs = () => {
  return (
    <Container className="mt-5">
      <Row xs={2} lg={4}>
        <Col>
          <NewJobsCard
            image={py}
            bgcolor={"bg-paleblue"}
            category={"Python"}
            jobcount={30}
            days={14}
          ></NewJobsCard>
        </Col>
        <Col>
          <NewJobsCard
            image={design}
            bgcolor={"bg-paleblue"}
            category={"Design"}
            jobcount={13}
            days={14}
          ></NewJobsCard>
        </Col>
        <Col>
          <NewJobsCard
            image={design}
            bgcolor={"bg-paleblue"}
            category={"Design"}
            jobcount={13}
            days={14}
          ></NewJobsCard>
        </Col>
        <Col>
          <NewJobsCard
            image={design}
            bgcolor={"bg-paleblue"}
            category={"Design"}
            jobcount={13}
            days={14}
          ></NewJobsCard>
        </Col>
      </Row>
      <Row xs={2} lg={4} className="mt-2">
        <Col>
          <NewJobsCard
            image={design}
            bgcolor={"bg-paleblue"}
            category={"Design"}
            jobcount={13}
            days={14}
          ></NewJobsCard>
        </Col>
        <Col>
          <NewJobsCard
            image={design}
            bgcolor={"bg-paleblue"}
            category={"Design"}
            jobcount={13}
            days={14}
          ></NewJobsCard>
        </Col>
        <Col>
          <NewJobsCard
            image={design}
            bgcolor={"bg-paleblue"}
            category={"Design"}
            jobcount={13}
            days={14}
          ></NewJobsCard>
        </Col>
        <Col>
          <NewJobsCard
            image={design}
            bgcolor={"bg-paleblue"}
            category={"Design"}
            jobcount={13}
            days={14}
          ></NewJobsCard>
        </Col>
      </Row>
    </Container>
  );
};

export default NewJobs;
