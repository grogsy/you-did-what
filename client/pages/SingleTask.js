import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ResourcesList from "../components/resource/ResourceList";
import TaskHeader from "../components/task/SingleTask/TaskHeader";
import TaskDescription from "../components/task/SingleTask/TaskDescription";
import TaskTags from "../components/task/SingleTask/TaskTags";

import { getSingleTask, cleanupSingleTask } from "../state";
import { cleanedupResources } from "../state/resource/resourceActions";

const SingleTask = props => {
  const taskId = props.match.params.id;
  const dispatch = useDispatch();
  const task = useSelector(state => state.tasks.viewedTask);
  const resources = useSelector(state => state.resources.resources);

  useEffect(() => {
    dispatch(getSingleTask(taskId));

    return function cleanup() {
      dispatch(cleanupSingleTask());
    };
  }, [dispatch]);

  useEffect(() => {
    return function cleanup() {
      dispatch(cleanedupResources());
    };
  }, [dispatch]);

  return (
    <Container className="mt-3">
      <Row>
        <TaskHeader
          name={task.name}
          longDate={task.posted_long}
          shortDate={task.posted}
          category={task.category}
        />
      </Row>
      <hr />
      <Row>
        <TaskDescription description={task.description} taskId={taskId} />
        <TaskTags tags={task.tags} />
      </Row>
      <hr />
      <Row>
        <ResourcesList taskId={taskId} resources={resources} />
      </Row>
    </Container>
  );
};

export default SingleTask;
