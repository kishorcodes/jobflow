import React from "react";
import "./Job.css";
const Job = ({ logo, title, company_name, duration, posted, location }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = now - date;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "Yesterday";
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else if (diffDays < 14) {
      return "1 week ago";
    } else if (diffDays < 21) {
      return "2 weeks ago";
    } else if (diffDays < 28) {
      return "3 weeks ago";
    } else {
      return `${Math.floor(diffDays / 7)} weeks ago`;
    }
  };
  return (
    <div className="job-wrapper">
      <div className="job-left-section">
        <img src={logo} alt="job-company-logo" />
        <div className="job-header">
          <h5 className="job-title">
            {title}, <span className="job-company-name">{company_name}</span>{" "}
          </h5>
          <p className="job-duration">Full Time Employment</p>
        </div>
      </div>
      <div className="job-right-section">
        <div className="job-tags"></div>
        <p className="job-posted">{formatDate(posted)}</p>
      </div>
    </div>
  );
};

export default Job;
