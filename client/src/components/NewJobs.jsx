import { Container, Row, Col } from "react-bootstrap";
import design from "../assets/images/icons/design.svg";
import py from "../assets/images/icons/py.svg";
import customer from "../assets/images/icons/customer-support.svg";
import writing_hand from "../assets/images/icons/writing-hand.svg";
import female_lawyer from "../assets/images/icons/female-lawyer.svg";
import gitlab from "../assets/images/icons/gitlab.svg";
import data_report from "../assets/images/icons/data-report.svg";
import unit_testing from "../assets/images/icons/unit-testing.svg";

import NewJobsCard from "./NewJobsCard";

const NewJobs = () => {
  return (
    <Container
      className="my-5"
      style={{
        width: "95%",
        maxWidth: 1200,
      }}
    >
      <Row xs={2} md={4}>
        <Col>
          <NewJobsCard
            image={py}
            bgcolor={"bg-paleblue-2"}
            category={"Programming"}
            jobcount={30}
            days={14}
          ></NewJobsCard>
        </Col>
        <Col>
          <NewJobsCard
            image={gitlab}
            bgcolor={"bg-paleblue"}
            category={"DevOps"}
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
            image={customer}
            bgcolor={"bg-paleblue-2"}
            category={"Customer"}
            jobcount={13}
            days={14}
          ></NewJobsCard>
        </Col>
      </Row>
      <Row xs={2} md={4} className="mt-2">
        <Col>
          <NewJobsCard
            image={writing_hand}
            bgcolor={"bg-paleblue"}
            category={"Writing"}
            jobcount={13}
            days={14}
          ></NewJobsCard>
        </Col>
        <Col>
          <NewJobsCard
            image={female_lawyer}
            bgcolor={"bg-paleblue-2"}
            category={"Finance/Legal"}
            jobcount={13}
            days={14}
          ></NewJobsCard>
        </Col>

        <Col>
          <NewJobsCard
            image={data_report}
            bgcolor={"bg-paleblue-2"}
            category={"Data"}
            jobcount={13}
            days={14}
          ></NewJobsCard>
        </Col>
        <Col>
          <NewJobsCard
            image={unit_testing}
            bgcolor={"bg-paleblue"}
            category={"QA"}
            jobcount={13}
            days={14}
          ></NewJobsCard>
        </Col>
      </Row>
    </Container>
  );
};

export default NewJobs;
