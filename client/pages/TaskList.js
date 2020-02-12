import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TaskListToggles from "../components/task/TaskList/TaskListToggles";
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

  const initialFilterState = {
    flagged: false,
    currentFilter: ""
  };
  const [filterState, setFilterState] = useState(initialFilterState);

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

  const filterbyCategory = category => {
    if (category === "All") {
      setViewedTasks(tasks);
    } else {
      setViewedTasks(viewedTasks.filter(task => task.category === category));
    }
  };

  const filterByTag = tag => {
    setViewedTasks(viewedTasks.filter(task => task.tags.includes(tag)));
    setPageIndex(0);
    setFilterState({ ...filterState, flagged: true, currentFilter: tag });
  };

  const filterByInput = query => {
    setViewedTasks(
      tasks.filter(
        // task => task.name.includes(query) || task.description.includes(query)
        task =>
          task.name.toLowerCase().includes(query.toLowerCase()) ||
          task.description.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const removeTagFilter = () => {
    setFilterState(initialFilterState);
    setPageIndex(0);
    setViewedTasks(tasks);
  };

  return (
    <Container className={styles.classes.container} fluid>
      <Row className={styles.classes.tabBar}>
        <Col>
          <TaskListToggles
            filter={filterbyCategory}
            filterState={filterState}
            removeTagFilter={removeTagFilter}
            filterByInput={filterByInput}
          />
          <TaskListTabs
            viewedTasks={pages[pageIndex]}
            completeTasks={completeTasks}
            loading={loading}
            filterByTag={filterByTag}
          />
        </Col>
      </Row>
      <Row>
        <TaskListPageNumbers pages={pages} handleOnClick={setPageIndex} />
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
