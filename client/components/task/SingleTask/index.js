import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";

import { getSingleTask, cleanupSingleTask } from "../../../state";

const SingleTaskContainer = props => {
  const dispatch = useDispatch();
  const task = useSelector(state => state.tasks.viewedTask);

  useEffect(() => {
    dispatch(getSingleTask(props.match.params.id));

    return function cleanup() {
      dispatch(cleanupSingleTask());
    };
  }, [dispatch]);

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h3>Task</h3>
          <p>{task.name}</p>
        </Col>
        <Col>
          <h3>Created</h3>
          <abbr title={task.posted_long}>{task.posted}</abbr>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Description</h3>
          <p>{task.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleTaskContainer;
