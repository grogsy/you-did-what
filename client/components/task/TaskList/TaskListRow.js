import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteTask, markTaskComplete } from "../../../state";

const TaskListRow = ({ task, completed }) => {
  const dispatch = useDispatch();

  const handleDelete = taskId => {
    if (confirm("Really Delete?")) {
      dispatch(deleteTask(taskId));
    }
  };

  return (
    <tr>
      <td className="align-middle" style={{ width: "500px" }}>
        <Link to={`/tasks/${task.id}`}>
          <strong>{task.name}</strong>
        </Link>
        <section>
          <small>
            Tagged As: &nbsp;
            {task.tags.map(tag => (
              <a key={tag} title={`See all tasks tagged with ${tag}`} href="#">
                {tag},{" "}
              </a>
            ))}{" "}
          </small>
        </section>
      </td>
      <td className="align-middle">
        <em>{task.description || "No Description Given."}</em>
      </td>
      <td className="align-middle">{task.category}</td>
      <td className="text-center align-middle">
        <OverlayTrigger
          placement="left"
          delay={{ show: 150, hide: 100 }}
          overlay={<Tooltip>{task.posted_long}</Tooltip>}
        >
          <abbr style={styles.tooltip}>{task.posted}</abbr>
        </OverlayTrigger>
      </td>
      <td className="align-middle" style={{ width: "156px" }}>
        {completed ? (
          <div className="d-flex justify-content-center">
            <abbr title={task.completedAt_long}>{task.completedAt}</abbr>
            <Button
              className="mx-3"
              style={styles.deleteBtn}
              size={styles.colBtn.btnSize}
              onClick={() => handleDelete(task.id)}
              variant="danger"
              title="Delete"
            >
              <i className="fas fa-times"></i>
            </Button>
          </div>
        ) : (
          <div className="d-flex">
            <Button
              className={styles.classes.btn}
              style={styles.deleteBtn}
              size={styles.colBtn.btnSize}
              onClick={() => handleDelete(task.id)}
              variant="danger"
              title="Delete"
            >
              <i className="fas fa-times"></i>
            </Button>
            <Button
              className={styles.classes.btn}
              size={styles.colBtn.btnSize}
              onClick={() => dispatch(markTaskComplete(task.id))}
              variant="success"
              title="Mark As Complete"
            >
              <i className="fas fa-check"></i>
            </Button>
          </div>
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
    // display: "flex",
    verticalAlign: "middle"
  },
  deleteBtn: {
    width: "32px"
  },
  tooltip: {
    textDecoration: "underline dotted"
  }
};

export default TaskListRow;
