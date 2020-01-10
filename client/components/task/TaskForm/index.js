import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addNewTask } from "../../../state";

const TaskForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialFormState = {
    name: "",
    description: "",
    category: "General"
  };

  const [form, setForm] = useState(initialFormState);

  return (
    <Container>
      <h1 className="text-center">Create New Task</h1>
      <Row className="justify-content-md-center">
        <Col xl={6}>
          <Form
            onSubmit={() => {
              dispatch(addNewTask(form));
              // when single task view is developed redirect to that instead
              history.push("/");
            }}
          >
            <Form.Group>
              <Form.Label>Task</Form.Label>
              <Form.Control
                type="text"
                placeholder="Give your task a name"
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                onChange={e =>
                  setForm({ ...form, description: e.target.value })
                }
                placeholder="You can give your task an optional description"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskForm;
