import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";

import TaskList from "./TaskList";
import EmptyTaskList from "./EmptyTaskList";

const TaskListTabs = ({ viewedTasks, completeTasks, loading }) => {
  return (
    <Tabs className="mt-2" defaultActiveKey="In Progress">
      <Tab eventKey="In Progress" title="In Progress">
        {!viewedTasks.length && !loading ? (
          <EmptyTaskList />
        ) : (
          <TaskList tasks={viewedTasks} />
        )}
      </Tab>
      <Tab eventKey="Completed" title="Completed">
        {!completeTasks.length && !loading ? (
          <Container>
            <h1>This List Is Empty, Go Complete Some Tasks Ya Bum!</h1>
          </Container>
        ) : (
          <TaskList tasks={completeTasks} completed />
        )}
      </Tab>
    </Tabs>
  );
};

export default TaskListTabs;
