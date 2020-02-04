import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { addNewResource } from "../../../state/resource/resourceActionCreators";

const ResourceFormModal = ({ taskId }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [formState, setFormState] = useState({
    httplink: "",
    fallbackText: ""
  });

  const target = useRef();
  useEffect(() => {
    if (show) {
      target.current.focus();
    }
  }, [show]);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addNewResource({ ...formState, taskId }));
    setShow(false);
  };

  return (
    <>
      <Button variant="outline-success" onClick={() => setShow(true)}>
        <i className="fas fa-plus"></i> Add Resource
      </Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add Resource</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                value={formState.link}
                onChange={e =>
                  setFormState({ ...formState, httplink: e.target.value })
                }
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
                value={formState.title}
                onChange={e =>
                  setFormState({ ...formState, fallbackText: e.target.value })
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ResourceFormModal;
