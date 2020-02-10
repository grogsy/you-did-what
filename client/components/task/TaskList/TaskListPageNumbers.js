import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const TaskListPageNumbers = ({ pages, handleOnClick }) => {
  return (
    <>
      {pages.map((_, index) => (
        <Button
          className="mx-1"
          key={index}
          onClick={() => handleOnClick(index)}
          variant="secondary"
        >
          {index + 1}
        </Button>
      ))}
    </>
  );
};

export default TaskListPageNumbers;
