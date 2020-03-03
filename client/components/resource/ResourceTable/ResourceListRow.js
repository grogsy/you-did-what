import React from "react";

import Button from "react-bootstrap/Button";

import { useDispatch } from "react-redux";

import { removeResource } from "../../../state/resource/resourceActionCreators";

const ResourceListRow = ({ resource }) => {
  const dispatch = useDispatch();
  return (
    <>
      <tr>
        <td>
          <a
            className="my-auto"
            target="_blank"
            title={resource.httplink}
            rel="noopener noreferrer"
            href={resource.httplink}
          >
            {resource.fallbackText}
          </a>
          <div className="float-right">
            <Button
              onClick={() => dispatch(removeResource(resource.id))}
              variant="danger"
              title="Delete Resource"
              size="sm"
            >
              <i className="fas fa-times"></i>
            </Button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ResourceListRow;
