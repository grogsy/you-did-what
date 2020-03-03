import React, { useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import ModalBody from "react-bootstrap/ModalBody";

const ResourceFormFields = ({ link, title, handleOnChange, show }) => {
  const target = useRef();
  useEffect(() => {
    if (show) {
      target.current.focus();
    }
  }, [show]);

  return (
    <ModalBody>
      <Form.Group>
        <Form.Label>Link</Form.Label>
        <Form.Control
          type="text"
          value={link}
          onChange={e => handleOnChange(e, "httplink")}
          ref={target}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Title &nbsp;
          <small className="text-info">
            <em>(Optional)</em>
          </small>
        </Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={e => handleOnChange(e, "fallbackText")}
        />
      </Form.Group>
    </ModalBody>
  );
};

export default ResourceFormFields;
