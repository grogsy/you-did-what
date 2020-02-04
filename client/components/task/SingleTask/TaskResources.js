import React, { useState } from "react";

import Collapse from "react-bootstrap/Collapse";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import ResourceFormModal from "./ResourceFormModal";

const TaskResources = ({ taskId }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Row>
        <Col>
          <div
            href="#"
            onClick={() => setOpen(!open)}
            className="stretched-link d-flex flex-row"
          >
            <h3>
              <i className="fas fa-chevron-down"></i>Resources
            </h3>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Collapse in={open}>
            <div id="this-div-makes-collapse-faster">
              <ResourceFormModal taskId={taskId} />
            </div>
          </Collapse>
        </Col>
      </Row>
    </>
  );
};

export default TaskResources;
