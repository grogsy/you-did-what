import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TaskListTable from "./TaskListTable";
import EmptyTaskList from "./EmptyTaskList";

const TaskListTabs = ({ viewedTasks, completeTasks, loading, filterByTag }) => {
  return (
    <Row>
      <Col>
        <Tabs className="mt-2" defaultActiveKey="In Progress">
          <Tab eventKey="In Progress" title="In Progress">
            {viewedTasks && !viewedTasks.length && !loading ? (
              <EmptyTaskList />
            ) : (
              <TaskListTable tasks={viewedTasks} filterByTag={filterByTag} />
            )}
          </Tab>
          <Tab eventKey="Completed" title="Completed">
            {!completeTasks.length && !loading ? (
              <Container>
                <h1>This List Is Empty, Go Complete Some Tasks Ya Bum!</h1>
              </Container>
            ) : (
              <TaskListTable tasks={completeTasks} completed />
            )}
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
};

export default TaskListTabs;
