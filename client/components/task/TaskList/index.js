import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TaskListDropdown from "./TaskListDropdown";
import TaskListTabs from "./TaskListTabs";

import { getTasks } from "../../../state";

const TaskListContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const pages = useSelector(state => state.tasks.pages);
  const completeTasks = useSelector(state => state.tasks.completedTasks);

  const [loading, setLoading] = useState(true);
  const [viewedTasks, setViewedTasks] = useState([]);

  useEffect(() => {
    dispatch(getTasks()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    setViewedTasks(tasks);
  }, [tasks]);

  const filterTasksbyCategory = category => {
    setViewedTasks(
      tasks.filter(task => {
        if (category !== "All") {
          return task.category === category;
        }
        return true;
      })
    );
  };

  return (
    <Container className={styles.classes.container} fluid>
      <Row className={styles.classes.tabBar}>
        <Col>
          <TaskListDropdown filter={filterTasksbyCategory} />
          <TaskListTabs
            viewedTasks={viewedTasks}
            completeTasks={completeTasks}
            loading={loading}
          />
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  classes: {
    listGroup: "mt-2",
    header: "text-center",
    container: "d-flex flex-column",
    tabBar: "mt-3"
  },
  container: {
    display: "flex",
    flexDirection: "column"
  },
  dropDownCol: {
    position: "relative",
    right: "165px"
  }
};

export default TaskListContainer;
