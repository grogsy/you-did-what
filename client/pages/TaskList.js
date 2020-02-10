import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TaskListCategoryDropdown from "../components/task/TaskList/TaskListCategoryDropdown";
import TaskListTabs from "../components/task/TaskList/TaskListTabs";
import TaskListPageNumbers from "../components/task/TaskList/TaskListPageNumbers";

import { getTasks } from "../state";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const completeTasks = useSelector(state => state.tasks.completedTasks);

  const [loading, setLoading] = useState(true);
  const [viewedTasks, setViewedTasks] = useState([]);
  const [pages, setPages] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    dispatch(getTasks()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    setViewedTasks(tasks);
  }, [tasks]);

  // create pagination
  useEffect(() => {
    function paginate(tasks) {
      const PAGINATE_SIZE = 10;
      let pages = [];
      for (let i = 0; i < tasks.length; i += PAGINATE_SIZE) {
        pages.push(tasks.slice(i, i + PAGINATE_SIZE));
      }

      return pages;
    }

    setPages(paginate(viewedTasks));
  }, [viewedTasks]);

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
          <TaskListCategoryDropdown filter={filterTasksbyCategory} />
          <TaskListTabs
            // viewedTasks={viewedTasks}
            viewedTasks={pages[pageIndex]}
            completeTasks={completeTasks}
            loading={loading}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskListPageNumbers pages={pages} handleOnClick={setPageIndex} />
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

export default TaskList;
