import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";

import { getSingleTask } from "../../../state";

const SingleTaskContainer = ({ id }) => {
  const dispatch = useDispatch();
  const task = useSelector(state => state.tasks.viewedTask);

  useEffect(() => {
    dispatch(getSingleTask(id));
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <h4>Task</h4>
          <p>{task.name}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Description</h4>
          <p>{task.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleTaskContainer;
