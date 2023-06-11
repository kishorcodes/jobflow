import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import './FilterJobs.css'
function FilterJobs() {
  const [employment, setEmployment] = useState("Employment Type");
  const [category, setCategory] = useState("Category");
  return (
    <div
      className="filter-wrapper"
    >
      <Dropdown
        onSelect={(eventKey, e) => {
          const selectedItem = e.target.textContent;
          if (selectedItem === "Remove Filter") setEmployment("Employment Type");
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
      <Dropdown onSelect={(eventKey, e) => {
        const selectedItem = e.target.textContent;
        if (selectedItem === "Remove Filter") setCategory('Category')
        else setCategory(selectedItem)
      }} className="d-inline mx-2">
        <Dropdown.Toggle variant="light" id="dropdown-autoclose-true">
          {category}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Software Development
          </Dropdown.Item>
          <Dropdown.Item href="#">Customer Service
          </Dropdown.Item>
          <Dropdown.Item href="#">Design</Dropdown.Item>
          <Dropdown.Item href="#">Marketing</Dropdown.Item>



          <Dropdown.Item href="#">Sales</Dropdown.Item>

          <Dropdown.Item href="#">Product</Dropdown.Item>

          <Dropdown.Item href="#">Business</Dropdown.Item>

          <Dropdown.Item href="#">Data</Dropdown.Item>


          <Dropdown.Item href="#">Devops / Sysadmin</Dropdown.Item>
          <Dropdown.Item href="#">Finance / Legal
          </Dropdown.Item>
          <Dropdown.Item href="#">Human Resources</Dropdown.Item>
          <Dropdown.Item href="#">QA</Dropdown.Item>
          <Dropdown.Item href="#">Writing</Dropdown.Item>
          <Dropdown.Item href="#">All Others</Dropdown.Item>

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
