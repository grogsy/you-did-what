import React from "react";
import Table from "react-bootstrap/Table";
import TaskListRow from "./TaskListRow";
import EmptyTaskList from "./EmptyTaskList";

const TaskList = ({ tasks, completed }) => {
  return tasks.length ? (
    <Table striped bordered responsive>
      <thead>
        <tr>
          <th>Task</th>
          <th>Description</th>
          <th>Created</th>
          <th>{completed ? "Completed At" : ""}</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <TaskListRow key={task.id} task={task} completed={completed} />
        ))}
      </tbody>
    </Table>
  ) : (
    <EmptyTaskList />
  );
};

const styles = {
  classes: {
    listGroup: ""
  }
};

export default TaskList;
