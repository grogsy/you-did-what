import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const TagsField = ({ tags, deleteTag, addTag }) => {
  const [tagForm, setTagForm] = useState("");

  const validateTag = tag => {
    if (tags.includes(tag)) {
      window.alert("That tag already exists.");
    } else {
      addTag(tag);
      setTagForm("");
    }
  };

  return (
    <Form.Group>
      <Form.Label>Tags</Form.Label>
      <div>
        {tags.map(tag => (
          <Badge
            key={tag}
            onClick={() => deleteTag(tag)}
            style={{ cursor: "pointer" }}
            className="mx-1 mb-2"
            title="Remove Tag"
            variant="info"
          >
            <i className="fas fa-times xs my-auto"></i>&nbsp;
            {tag}
          </Badge>
        ))}
      </div>
      <InputGroup>
        <Form.Control
          value={tagForm}
          onChange={e => setTagForm(e.target.value)}
          type="text"
        />
        <InputGroup.Append>
          <Button
            onClick={() => validateTag(tagForm)}
            variant="outline-success"
          >
            Add Tag
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form.Group>
  );
};

export default TagsField;
