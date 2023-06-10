import { useState } from "react";
import { Dropdown } from "react-bootstrap";
function FilterJobs() {
  const [employment, setEmployment] = useState("Employment");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 30,
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Dropdown
        onSelect={(eventKey, e) => {
          const selectedItem = e.target.textContent;
          if (selectedItem === "Remove Filter") setEmployment("Employment");
          else setEmployment(selectedItem);
        }}
        className="d-inline mx-2"
      >
        <Dropdown.Toggle variant="light" id="dropdown-autoclose-true">
          {employment}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Full time</Dropdown.Item>
          <Dropdown.Item>Part time / Contract</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Remove Filter</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle variant="light" id="dropdown-autoclose-true">
          Default Dropdown
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle variant="light" id="dropdown-autoclose-true">
          Default Dropdown
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* <Dropdown className="d-inline mx-2 my-2 my-lg-0">
        <Dropdown.Toggle variant="light" id="dropdown-autoclose-true">
          Default Dropdown
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
      <Dropdown className="d-inline mx-2 my-2 my-lg-0">
        <Dropdown.Toggle variant="light" id="dropdown-autoclose-true">
          Default Dropdown
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default FilterJobs;
