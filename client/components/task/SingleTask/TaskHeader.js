import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const TaskHeader = ({ name, category, longDate, shortDate }) => {
  return (
    <Col>
      <Row>
        <Col>
          <h1>
            <em>{name}</em>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          Created: &nbsp;
          <small className="my-auto">
            <abbr title={longDate}>{shortDate}</abbr>
          </small>
          <div className="float-right">
            Under: &nbsp;
            <small className="my-auto">
              <em>
                <a href="#">{category}</a>
              </em>
            </small>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default TaskHeader;
