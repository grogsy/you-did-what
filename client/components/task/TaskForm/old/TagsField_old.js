import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import TagsList from "./TagsList";

const TagsField = ({ tags, deleteTag, addTag }) => {
  const [tagForm, setTagForm] = useState("");
  const [focused, setFocus] = useState(false);

  const validateTag = () => {
    if (tags.includes(tagForm)) {
      window.alert("That tag already exists.");
    } else {
      addTag(tagForm);
      setTagForm("");
    }
  };

  const handleKeyPress = e => {
    if (focused && e.key === "Enter") {
      e.preventDefault();
      validateTag(tagForm);
    }
  };

  return (
    <Form.Group>
      <Form.Label>Tags</Form.Label>
      <TagsList tags={tags} deleteTag={deleteTag} />
      <InputGroup>
        <Form.Control
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value={tagForm}
          onKeyPress={handleKeyPress}
          onChange={e => setTagForm(e.target.value)}
          type="text"
        />
        <InputGroup.Append>
          <Button onClick={validateTag} variant="outline-success">
            Add Tag
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form.Group>
  );
};

export default TagsField;
