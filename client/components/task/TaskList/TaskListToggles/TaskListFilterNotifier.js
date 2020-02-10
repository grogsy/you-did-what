import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const TaskListFilterNotifier = ({ filterState, removeTagFilter }) => {
  return filterState.flagged ? (
    <Col md={4}>
      You are viewing tasks tagged as: <em>{filterState.currentFilter}</em>
      &nbsp;
      <Button
        className="mx-2"
        variant="info"
        onClick={removeTagFilter}
        size="sm"
      >
        Remove Tag Filter
      </Button>
    </Col>
  ) : (
    <Col md={4}></Col>
  );
};

export default TaskListFilterNotifier;
