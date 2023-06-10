import React from "react";
import Card from "react-bootstrap/Card";
const NewJobsCard = ({ image, bgcolor, category, jobcount, days }) => {
  console.log(image);
  return (
    <>
      <Card
        text={"dark"}
        style={{
          maxWidth: "16rem",
          width: "100%",
          height: "auto",
        }}
        className="mb-2 bg-paleblue no-border"
      >
        <Card.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                alignSelf: "flex-end",
              }}
            >
              <img height={30} src={image} alt="python"></img>
            </span>
            <span>{category}</span>
            <span>
              {jobcount} new jobs in the past {days} days
            </span>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewJobsCard;
