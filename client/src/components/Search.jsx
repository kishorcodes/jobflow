import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <InputGroup className="w-75">
      <Button className="srch" variant="secondary" id="button-addon1">
        <FaSearch></FaSearch>
      </Button>
      <Form.Control
        placeholder="Search by keyword"
        aria-label="Example text with button addon"
        aria-describedby="basic-addon1"
        className="py-3 srch"
      />
    </InputGroup>
  );
};

export default Search;
