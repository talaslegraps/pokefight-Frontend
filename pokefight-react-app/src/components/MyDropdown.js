import { Dropdown } from "react-bootstrap";

const MyDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter by type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">all types</Dropdown.Item>
        <Dropdown.Item href="#/action-2">normal</Dropdown.Item>
        <Dropdown.Item href="#/action-3">fighting</Dropdown.Item>
        <Dropdown.Item href="#/action-4">flying</Dropdown.Item>
        <Dropdown.Item href="#/action-5">poison</Dropdown.Item>
        <Dropdown.Item href="#/action-6">ground</Dropdown.Item>
        <Dropdown.Item href="#/action-7">rock</Dropdown.Item>
        <Dropdown.Item href="#/action-8">bug</Dropdown.Item>
        <Dropdown.Item href="#/action-9">ghost</Dropdown.Item>
        <Dropdown.Item href="#/action-10">steel</Dropdown.Item>
        <Dropdown.Item href="#/action-11">fire</Dropdown.Item>
        <Dropdown.Item href="#/action-12">water</Dropdown.Item>
        <Dropdown.Item href="#/action-13">grass</Dropdown.Item>
        <Dropdown.Item href="#/action-14">electric</Dropdown.Item>
        <Dropdown.Item href="#/action-15">psychic</Dropdown.Item>
        <Dropdown.Item href="#/action-16">ice</Dropdown.Item>
        <Dropdown.Item href="#/action-17">dragon</Dropdown.Item>
        <Dropdown.Item href="#/action-18">dark</Dropdown.Item>
        <Dropdown.Item href="#/action-19">fairy</Dropdown.Item>
        <Dropdown.Item href="#/action-20">unknown</Dropdown.Item>
        <Dropdown.Item href="#/action-21">shadow</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MyDropdown;
