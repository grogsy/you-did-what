import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

import { deleteTask, markTaskComplete } from "../../../state";

const TaskListRow = ({ task, completed }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{task.name}</td>
      <td>{task.description || "No Description Given."}</td>
      <td>{task.createdAt}</td>
      <td style={styles.trBtn}>
        {completed ? (
          task.updatedAt
        ) : (
          <>
            <Button
              className={styles.classes.btn}
              style={styles.deleteBtn}
              size={styles.colBtn.btnSize}
              onClick={() => dispatch(deleteTask(task.id))}
              variant="danger"
              title="Delete"
            >
              <i className="fas fa-times"></i>
            </Button>
            <Button
              className={styles.classes.btn}
              size={styles.colBtn.btnSize}
              onClick={() =>
                dispatch(markTaskComplete({ ...task, status: "Completed" }))
              }
              variant="success"
              title="Mark as Complete"
            >
              <i className="fas fa-check"></i>
            </Button>
          </>
        )}
      </td>
    </tr>
  );
};

const styles = {
  classes: {
    col: "my-auto",
    btn: "mx-auto"
  },
  colBtn: {
    btnSize: "sm",
    colSize: 1
  },
  trBtn: {
    display: "flex"
  },
  deleteBtn: {
    width: "32px"
  }
};

export default TaskListRow;
