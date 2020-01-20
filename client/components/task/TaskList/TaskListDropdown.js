import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const TaskListDropdown = ({ filter }) => {
  return (
    <DropdownButton size="sm" variant="secondary" title="Sort By Category">
      <Dropdown.Item value="all" onClick={() => filter()}>
        All
      </Dropdown.Item>
      <Dropdown.Item onClick={() => filter("Career")}>Career</Dropdown.Item>
      <Dropdown.Item onClick={() => filter("Education")}>
        Education
      </Dropdown.Item>
      <Dropdown.Item onClick={() => filter("Leisure")}>Leisure</Dropdown.Item>
      <Dropdown.Item onClick={() => filter("Other")}>Other</Dropdown.Item>
    </DropdownButton>
  );
};

export default TaskListDropdown;
