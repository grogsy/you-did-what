import React from "react";
import Table from "react-bootstrap/Table";
import TaskListRow from "./TaskListRow";

const TaskListTable = ({ tasks, completed }) => {
  tasks = tasks || [];
  return (
    <Table striped bordered responsive>
      <thead>
        <tr>
          <th>Task</th>
          <th>Description</th>
          <th>Category</th>
          <th className="text-center">Created</th>
          <th className="text-center">{completed ? "Completed At" : ""}</th>
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

export default TaskListTable;
