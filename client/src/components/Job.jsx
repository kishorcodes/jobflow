import React from "react";
import "./Job.css";
const Job = () => {
  return (
    <div className="job-wrapper">
      <div className="job-left-section">
        <img
          src="https://remotive.com/job/1698902/logo
"
          height={80}
          alt="job-company-logo"
        />

        <div className="job-header">
          <h4 className="job-title">
            Job Title, <span className="job-company-name">Microsoft</span>{" "}
          </h4>
          <p className="job-duration">Full Time Employment</p>
        </div>
      </div>
      <div className="job-right-section">
        <div className="job-tags"></div>
        <p className="job-posted">1 week ago</p>
      </div>
    </div>
  );
};

export default Job;
