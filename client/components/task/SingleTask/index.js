import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";

import TaskResources from "./TaskResources";
import ResourcesList from "./ResourcesList";
import { getSingleTask, cleanupSingleTask } from "../../../state";

const SingleTaskContainer = props => {
  const taskId = props.match.params.id;
  const dispatch = useDispatch();
  const task = useSelector(state => state.tasks.viewedTask);

  useEffect(() => {
    dispatch(getSingleTask(taskId));

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
      {/* <TaskResources taskId={taskId} /> */}
      <ResourcesList taskId={taskId} />
    </Container>
  );
};

export default SingleTaskContainer;
