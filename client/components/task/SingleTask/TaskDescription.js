import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

import { editTask } from "../../../state/task/taskActionCreators";

const TaskDescription = ({ description, taskId }) => {
  const target = useRef();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(description);

  useEffect(() => {
    if (editing) {
      target.current.focus();
    }
  }, [editing]);

  const saveEdit = () => {
    dispatch(editTask(taskId, { description: text }));
    setEditing(false);
  };

  const enableEditing = () => {
    setEditing(true);
  };

  const disableEditing = () => {
    setEditing(false);
    setText(description);
  };

  const display = () => {
    setShow(true);
  };

  const hide = () => {
    setShow(false);
  };

  return (
    <Col onMouseEnter={display} onMouseLeave={hide}>
      <h3>Description</h3>
      {editing ? (
        <>
          <FormControl
            value={text || description}
            as="textarea"
            onChange={e => setText(e.target.value)}
            onFocus={e => e.target.select()}
            ref={target}
          />
          <div className="pt-2">
            <Button
              className="mx-1"
              variant="info"
              onClick={disableEditing}
              title="Cancel Editing"
              size="sm"
            >
              Cancel
            </Button>
            <Button
              className="mx-1"
              variant="primary"
              onClick={saveEdit}
              title="Save Changes"
              size="sm"
            >
              Save
            </Button>
          </div>
        </>
      ) : (
        <>
          <p>{description}</p>
          <Collapse in={show}>
            <div>
              <Button
                variant="primary"
                onClick={enableEditing}
                title="Edit Description"
                size="sm"
              >
                Edit Description
              </Button>
            </div>
          </Collapse>
        </>
      )}
    </Col>
  );
};

export default TaskDescription;
