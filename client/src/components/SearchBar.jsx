import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ overlay, width }) => {
  let className = "searchbar";
  if (overlay) className += " searchbar-overlay";
  const [input, setInput] = useState("");
  return (
    <InputGroup
      onKeyUp={(e) => {
        if (e.key === "Enter") console.log("submitted: " + input);
      }}
      onChange={(e) => {
        setInput(e.target.value);
      }}
      className={"w-" + width}
    >
      <Button className={className} variant="secondary" id="button-addon1">
        <FaSearch></FaSearch>
      </Button>
      <Form.Control
        value={input}
        placeholder="Search by keyword"
        aria-label="Example text with button addon"
        aria-describedby="basic-addon1"
        className={"py-3 " + className}
      />
    </InputGroup>
  );
};

export default SearchBar;
