import React from "react";

import { Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({overlay}) => {
  let className = "searchbar";
  console.log(overlay);
  if (overlay) className += " searchbar-overlay";

  

  return (
    <InputGroup className="w-75">
      <Button className={className} variant="secondary" id="button-addon1">
        <FaSearch></FaSearch>
      </Button>
      <Form.Control
        placeholder="Search by keyword"
        aria-label="Example text with button addon"
        aria-describedby="basic-addon1"
        className={"py-3 " + className}
      />
    </InputGroup>
  );
};

export default SearchBar;
