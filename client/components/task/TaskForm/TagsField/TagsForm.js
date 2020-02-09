import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const TagsForm = ({ addTag, validateTag }) => {
  const [formData, setForm] = useState("");
  const [focused, setFocus] = useState(false);

  const handleKeyPress = e => {
    if (focused && e.key === "Enter") {
      e.preventDefault();
      handleSubmit(formData);
    }
  };

  const handleSubmit = () => {
    if (!validateTag(formData)) {
      window.alert("That tag already exists.");
    } else {
      addTag(formData);
      setForm("");
    }
  };

  return (
    <Form.Group>
      <Form.Label>Tags</Form.Label>
      <InputGroup>
        <Form.Control
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value={formData}
          onKeyPress={handleKeyPress}
          onChange={e => setForm(e.target.value)}
          type="text"
        />
        <InputGroup.Append>
          <Button onClick={handleSubmit} variant="outline-success">
            Add Tag
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form.Group>
  );
};

export default TagsForm;
