import React, { useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";

const TextField = ({ handleOnChange }) => {
  const target = useRef();
  useEffect(() => {
    target.current.focus();
  }, []);

  return (
    <>
      <Form.Group>
        <Form.Label>Task</Form.Label>
        <Form.Control
          type="text"
          placeholder="Give your task a name"
          ref={target}
          onChange={e => handleOnChange(e, "name")}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Description &nbsp;
          <small className="text-info">
            <em>(Optional)</em>
          </small>
        </Form.Label>
        <Form.Control
          as="textarea"
          onChange={e => handleOnChange(e, "description")}
        />
      </Form.Group>
    </>
  );
};

export default TextField;
