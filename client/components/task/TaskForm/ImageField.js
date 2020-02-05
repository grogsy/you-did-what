import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import ImageDropDown from "./ImageDropDown";
import ImageUploadField from "./ImageUploadField";

const ImageField = ({ setImgField, title, imgFieldMethod }) => {
  return (
    <Form.Group>
      <Form.Label>
        Image &nbsp;
        <small className="text-info">
          <em>(Optional)</em>
        </small>
      </Form.Label>
      <InputGroup>
        <ImageDropDown setImgField={setImgField} title={title} />
        {imgFieldMethod === "upload" ? (
          <ImageUploadField />
        ) : (
          <Form.Control type="text" />
        )}
      </InputGroup>
    </Form.Group>
  );
};

export default ImageField;
