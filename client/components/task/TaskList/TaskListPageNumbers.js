import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const TaskListPageNumbers = ({ pages, handleOnClick }) => {
  return (
    <Col>
      {pages.map((_, index) => (
        <Button
          className="mx-1"
          key={index}
          onClick={() => handleOnClick(index)}
          variant="secondary"
          title={`Go to page ${index + 1}`}
        >
          {index + 1}
        </Button>
      ))}
    </Col>
  );
};

export default TaskListPageNumbers;
