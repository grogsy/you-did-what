import React from "react";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";

const ImageDropDown = ({ setImgField, title }) => {
  return (
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title={title}
    >
      <Dropdown.Item
        href="#"
        onClick={() =>
          setImgField({
            title: "Upload",
            method: "upload"
          })
        }
      >
        Upload
      </Dropdown.Item>
      <Dropdown.Item
        href="#"
        onClick={() =>
          setImgField({
            title: "Link",
            method: "link"
          })
        }
      >
        Link
      </Dropdown.Item>
    </DropdownButton>
  );
};
export default ImageDropDown;
