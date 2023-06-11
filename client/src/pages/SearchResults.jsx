import axios from "axios";
import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { Triangle } from 'react-loader-spinner';
import { useParams } from "react-router-dom";
import FilterJobs from "../components/FilterJobs";
import Job from "../components/Job";
import NavBar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import "./SearchResults.css";
const SearchResults = () => {
  const { query } = useParams()
  const [jobs, setJobs] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [sortCriteria, setSortCriteria] = useState('relevence')
  const [postedDays, setPostedDays] = useState(7)
  const [loading, setLoading] = useState(false)
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage}>
        {number}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    setLoading(true)
    axios
      .get("https://remotive.com/api/remote-jobs?search=" + query)
      .then(({ data }) => {
        setJobs(data.jobs);
        setLoading(false)

      })
      .catch((e) => {
        console.log(e);
      });
  }, [query]);

  return (
    <>
      <NavBar></NavBar>
      <div className="my-4 px-3 search-results-wrapper">
        <SearchBar overlay={false} width={"100"}></SearchBar>
        <FilterJobs></FilterJobs>
        <div className="search-results-jobs">
          {jobs && jobs.length > 0 && !loading ? (
            <>
              <div className="job-controls">
                <p>{jobs.length} jobs found</p>
                <div className="filter">
                  <Dropdown className="d-inline mx-2 my-2 my-lg-0">
                    <Dropdown.Toggle
                      variant="light"
                      id="dropdown-autoclose-true"
                    >
                      {postedDays > 0 ? `Last ${postedDays} days` : "Date Range"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#" onClick={() => {
                        setPostedDays(7)
                      }}> Last 7 days</Dropdown.Item>
                      <Dropdown.Item href="#" onClick={() => {
                        setPostedDays(14)
                      }}> Last 14 days</Dropdown.Item>
                      <Dropdown.Item href="#" onClick={() => {
                        setPostedDays(30)
                      }}> Last 30 days</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={() => {
                        setPostedDays(0)
                      }}>Remove Filter</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown className="d-inline mx-2 my-2 my-lg-0">
                    <Dropdown.Toggle
                      variant="light"
                      id="dropdown-autoclose-true"
                    >
                      Sort by {sortCriteria}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#" onClick={() => {
                        setSortCriteria('relevence')
                      }}>Sort by relevence</Dropdown.Item>
                      <Dropdown.Item href="#" onClick={() => {
                        setSortCriteria('date')
                      }}>Sort by date</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              {jobs.map((job) => {
                return (
                  <Job
                    logo={job.company_logo}
                    company_name={job.company_name}
                    duration={job.job_type}
                    title={job.title}
                    posted={job.publication_date}
                  ></Job>
                );
              })}

              <div className="pagination-wrapper">
                <Pagination
                  onClick={(e) => {
                    if (e.target.textContent === "»") {
                      setActivePage(activePage + 1);
                    } else {
                      setActivePage(Number(e.target.textContent));
                    }
                  }}
                  size="sm"
                >
                  {items}
                  <Pagination.Last />
                </Pagination>
              </div>
            </>
          ) : <Triangle
            height="60"
            width="60"
            radius="9"
            color="dodgerblue"
            ariaLabel="loading"
            wrapperClass="spinner"
          />}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
