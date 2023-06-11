import Card from "react-bootstrap/Card";
import "./NewJobsCard.css";
const NewJobsCard = ({ image, bgcolor, category, jobcount, days }) => {
  const className = `mb-2 no-border newjobs-card-wrapper ${bgcolor}`
  return (
    <>
      <Card
        text={"dark"}
        className={className}
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
            <span className="newjobs-card-category text-red2" >{category}</span>
            <span className="newjobs-card-content text-blue2">
              {jobcount} new jobs in the past {days} days
            </span>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewJobsCard;
