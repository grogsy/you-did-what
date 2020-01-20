import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

import ImageDropDown from "./ImageDropDown";
import ImageUploadField from "./ImageUploadField";
import { addNewTask } from "../../../state";

const TaskForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const target = useRef();

  // ref for form field focus
  useEffect(() => {
    target.current.focus();
  }, []);

  const initialFormState = {
    name: "",
    description: "",
    category: "General"
  };

  const [form, setForm] = useState(initialFormState);
  const [imgField, setImgField] = useState({
    title: "Upload",
    method: "upload"
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addNewTask({ ...form }))
      .then(task => history.push(`/tasks/${task.id}`))
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Container>
      <h1 className="text-center mt-4">Create New Task</h1>
      <hr />
      <Row className="justify-content-md-center mt-4">
        <Col xl={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Optional Image</Form.Label>
              <InputGroup>
                <ImageDropDown
                  setImgField={setImgField}
                  title={imgField.title}
                />
                {imgField.method === "upload" ? (
                  <ImageUploadField />
                ) : (
                  <Form.Control type="text" />
                )}
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label>Task</Form.Label>
              <Form.Control
                type="text"
                placeholder="Give your task a name"
                ref={target}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
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
            <Form.Group>
              <Form.Label>Select A Category</Form.Label>
              <Form.Control
                as="select"
                onChange={e => setForm({ ...form, category: e.target.value })}
              >
                <option value="General">General</option>
                <option value="Life">Life</option>
                <option value="Education">Education</option>
                <option value="Career">Career</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
            <Button variant="info" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskForm;
