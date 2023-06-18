import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
const SearchBar = ({ overlay, width }) => {
  let className = "searchbar searchbar-form";
  if (overlay) className += " searchbar-overlay";
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  return (
    <InputGroup
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          navigate("/search/" + input);
        }
      }}
      onChange={(e) => {
        setInput(e.target.value);
      }}
      className={"w-" + width}
    >
      <Button className={className + " searchbar-icon"} id="button-addon1">
        <FaSearch color="#495057  "></FaSearch>
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
