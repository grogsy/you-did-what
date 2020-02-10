import React from "react";
import Overlay from "react-bootstrap/Overlay";

const InvalidQueryOverlay = ({ show, target, invalidString }) => {
  return (
    <Overlay target={target} show={show} placement="left">
      {({
        placement,
        scheduleUpdate,
        arrowProps,
        outOfBoundaries,
        show: _show,
        ...props
      }) => (
        <div {...props} className="mt-1 p-2 bg-danger rounded">
          Unable to search `{invalidString}`. Search queries must:
          <ul>
            <li>Be non-empty</li>
            <li>Not contain special characters. Only letters are allowed.</li>
          </ul>
        </div>
      )}
    </Overlay>
  );
};

export default InvalidQueryOverlay;
