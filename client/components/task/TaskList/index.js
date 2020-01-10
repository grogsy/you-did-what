import React from "react";
import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import TaskList from "./TaskList";

const TaskListContainer = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const completeTasks = useSelector(state => state.tasks.completedTasks);

  return (
    <Container className={styles.classes.container}>
      <Row className={styles.classes.tabBar}>
        <Col>
          <DropdownButton
            size="sm"
            variant="secondary"
            title="Sort By Category"
          >
            <Dropdown.Item>All</Dropdown.Item>
            <Dropdown.Item>Career</Dropdown.Item>
            <Dropdown.Item>Education</Dropdown.Item>
            <Dropdown.Item>Leisure</Dropdown.Item>
            <Dropdown.Item>Other</Dropdown.Item>
          </DropdownButton>
          <Tabs className="mt-2" defaultActiveKey="In Progress">
            <Tab eventKey="In Progress" title="In Progress">
              <TaskList tasks={tasks} />
            </Tab>
            <Tab eventKey="Completed" title="Completed">
              <TaskList tasks={completeTasks} completed />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  classes: {
    formContainer: "justify-content-md-center",
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
