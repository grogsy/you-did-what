import React from "react";
import Row from "react-bootstrap/Row";

import TaskListCategoryDropdown from "./TaskListCategoryDropDown";
import TaskListFilterNotifier from "./TaskListFilterNotifier";
import TaskListSearchbar from "./TaskListSearchbar";

const TaskListToggles = ({
  filter,
  filterState,
  removeTagFilter,
  filterByInput
}) => {
  return (
    <Row>
      <TaskListCategoryDropdown filter={filter} />
      <TaskListFilterNotifier
        filterState={filterState}
        removeTagFilter={removeTagFilter}
      />
      <TaskListSearchbar filterByInput={filterByInput} />
    </Row>
  );
};

export default TaskListToggles;
