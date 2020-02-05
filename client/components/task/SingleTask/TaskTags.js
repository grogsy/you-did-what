import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

const TaskTags = ({ tags }) => {
  const [show, setShow] = useState(false);

  const display = () => {
    setShow(true);
  };

  const hide = () => {
    setShow(false);
  };

  return (
    <Col onMouseEnter={display} onMouseLeave={hide}>
      <h4>Tagged As:</h4>
      {tags ? (
        <small>
          {tags.map(tag => (
            <a key={tag} href="#">
              {tag},{" "}
            </a>
          ))}{" "}
        </small>
      ) : (
        <p>Loading...</p>
      )}
      <Collapse in={show}>
        <div>
          <Button variant="primary" title="Edit Tags" size="sm">
            Edit Tags
          </Button>
        </div>
      </Collapse>
    </Col>
  );
};

export default TaskTags;
