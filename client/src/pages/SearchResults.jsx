import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/Navbar";
import TabsExample from "../components/Filter";

const SearchResults = () => {
  return (
    <>
      <NavBar></NavBar>

      <div
      className="my-4"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems:'center',
          flexDirection:'column'
        }}
      >
        <SearchBar overlay={false}></SearchBar>
        <TabsExample></TabsExample>
      </div>
    </>
  );
};

export default SearchResults;
