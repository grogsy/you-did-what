import React from "react";
import Form from "react-bootstrap/Form";

const CategoryField = ({ handleOnChange }) => {
  return (
    <Form.Group>
      <Form.Label>Select A Category</Form.Label>
      <Form.Control as="select" onChange={e => handleOnChange(e.target.value)}>
        <option value="General">General</option>
        <option value="Life">Life</option>
        <option value="Education">Education</option>
        <option value="Career">Career</option>
        <option value="Other">Other</option>
      </Form.Control>
    </Form.Group>
  );
};

export default CategoryField;
