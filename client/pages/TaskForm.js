import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ImageField from "../components/task/TaskForm/ImageField";
import TagsField from "../components/task/TaskForm/TagsField";
import CategoryField from "../components/task/TaskForm/CategoryField";
import TextField from "../components/task/TaskForm/TextField";

import { addNewTask } from "../state";

const TaskForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialFormState = {
    name: "",
    description: "",
    category: "General",
    tags: []
  };

  const [form, setForm] = useState(initialFormState);

  const [imgField, setImgField] = useState({
    title: "Upload",
    method: "upload"
  });

  const setCategory = category => {
    setForm({ ...form, category });
  };

  const deleteTag = tag => {
    setForm({
      ...form,
      tags: form.tags.filter(t => t !== tag)
    });
  };

  const addTag = tag => {
    setForm({ ...form, tags: [...form.tags, tag] });
  };

  const setTextField = (e, field) => {
    setForm({ ...form, [field]: e.target.value });
  };

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
            <ImageField
              setImgField={setImgField}
              title={imgField.title}
              imgFieldMethod={imgField.method}
            />
            <TextField handleOnChange={setTextField} />
            <CategoryField handleOnChange={setCategory} />
            <TagsField tags={form.tags} deleteTag={deleteTag} addTag={addTag} />
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
