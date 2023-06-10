import Card from "react-bootstrap/Card";
import "./NewJobsCard.css";
const NewJobsCard = ({ image, bgcolor, category, jobcount, days }) => {

  return (
    <>
      <Card
        text={"dark"}
        className="mb-2 bg-paleblue no-border newjobs-card-wrapper"
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
