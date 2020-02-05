import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import ResourceFormFields from "./ResourceFormFields";

import { addNewResource } from "../../state/resource/resourceActionCreators";

const ResourceFormModal = ({ taskId }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [formState, setFormState] = useState({
    httplink: "",
    fallbackText: ""
  });

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  const handleOnChange = (e, field) => {
    setFormState({ ...formState, [field]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addNewResource({ ...formState, taskId }));
    setShow(false);
  };

  return (
    <div className="float-right">
      <Button variant="outline-success" onClick={showModal}>
        <i className="fas fa-plus"></i> Add Resource
      </Button>
      <Modal show={show} onHide={hideModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add Resource</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ResourceFormFields
              link={formState.link}
              title={formState.title}
              show={show}
              handleOnChange={handleOnChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hideModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ResourceFormModal;
