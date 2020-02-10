import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const TaskListSearchbar = ({ filterByInput }) => {
  const initialFormState = {
    content: "",
    invalidString: "",
    invalid: false
  };
  const [formState, setForm] = useState(initialFormState);

  const [focused, setFocus] = useState(false);

  const handleKeyPress = e => {
    if (focused && e.key === "Enter") {
      e.preventDefault();
      handleSubmit(formState.content);
    }
  };

  const handleSubmit = value => {
    if (
      // test search input for special characters
      /[~`!#$%\^&*+=\-\[\]\\;,/{}|\\":<>\?]/g.test(value) ||
      value.length < 1
    ) {
      setForm({ ...formState, invalid: true, invalidString: value });
    } else {
      setForm(initialFormState);
      filterByInput(value);
    }
  };

  return (
    <Col md={7}>
      <div className="float-right" style={{ width: "40%" }}>
        <InputGroup>
          <FormControl
            type="text"
            placeholder="Find a task by title or description text..."
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onKeyPress={handleKeyPress}
            onChange={e => setForm({ ...formState, content: e.target.value })}
            value={formState.content}
          />
          <InputGroup.Append>
            <Button
              onClick={() => handleSubmit(formState.content)}
              variant="primary"
            >
              Search
            </Button>
          </InputGroup.Append>
          {formState.invalid ? (
            <div style={{ color: "red" }}>
              Unable to search `{formState.invalidString}`. Search queries must:
              <ul>
                <li>Be non-empty</li>
                <li>
                  Not contain special characters. Only letters are allowed.
                </li>
              </ul>
            </div>
          ) : null}
        </InputGroup>
      </div>
    </Col>
  );
};

export default TaskListSearchbar;
