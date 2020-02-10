import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const TaskListCategoryDropdown = ({ filter }) => {
  const [title, setTitle] = useState("Sort By Category");
  const handleOnClick = category => {
    filter(category);
    setTitle(`Sorted by: ${category}`);
  };
  return (
    <DropdownButton size="sm" variant="secondary" title={title}>
      <Dropdown.Item value="all" onClick={() => handleOnClick("All")}>
        All
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleOnClick("Career")}>
        Career
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleOnClick("Education")}>
        Education
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleOnClick("Leisure")}>
        Leisure
      </Dropdown.Item>
      <Dropdown.Item onClick={() => handleOnClick("Other")}>
        Other
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default TaskListCategoryDropdown;
