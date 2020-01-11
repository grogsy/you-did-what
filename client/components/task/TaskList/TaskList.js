import React from "react";
import Table from "react-bootstrap/Table";
import TaskListRow from "./TaskListRow";

const TaskList = ({ tasks, completed }) => {
  return (
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
  );
};

const styles = {
  classes: {
    listGroup: ""
  }
};

export default TaskList;
