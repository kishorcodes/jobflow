import React from "react";
import Card from "react-bootstrap/Card";

const NewJobsCard = (color) => {
  return (
    <>
      <Card
        bg={"secondary"}
        text={"dark"}
        style={{
          maxWidth: "16rem",
          width: "100%",
          height: "auto",
          backgroundColor: "#E5F2FF",
        }}
        className="mb-2 text-right"
      >
        <Card.Body>
          <span className="align-self-end">jjm</span> <br />
          <Card.Text>
            <span>Python</span> <br />
            <span>16 new jobs in the past 15 days</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewJobsCard;
