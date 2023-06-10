import React from "react";
import FilterJobs from "../components/FilterJobs";
import NavBar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Job from "../components/Job";
import "./SearchResults.css";
import { useState } from "react";
const SearchResults = () => {
  const [jobs, setJobs] = useState([...Array(6)]);
  // [0, 0, 0, 0, 0, 0])
  return (
    <>
      <NavBar></NavBar>

      <div
        className="my-4 px-3 search-results-wrapper"
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <SearchBar overlay={false} width={"100"}></SearchBar>
        <FilterJobs></FilterJobs>

        <div className="search-results-jobs">
          {jobs.map((job) => {
            return <Job></Job>;
          })}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
