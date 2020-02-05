import React from "react";
import Col from "react-bootstrap/Col";

const TaskHeader = ({ name, longDate, shortDate }) => {
  return (
    <Col>
      <h1>
        <em>{name}</em>
      </h1>
      Created:{" "}
      <small>
        <abbr title={longDate}>{shortDate}</abbr>
      </small>
    </Col>
  );
};

export default TaskHeader;
