import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Collapse from "react-bootstrap/Collapse";

import { useSelector } from "react-redux";

import ResourceFormModal from "./ResourceFormModal";
import ResourceListRow from "./ResourceListRow";

const ResourcesList = ({ taskId }) => {
  const [open, setOpen] = useState(false);
  const resources = useSelector(state => state.resources.resources);
  return (
    <Table bordered responsive>
      <thead>
        <tr>
          <th onClick={() => setOpen(!open)}>Resources</th>
        </tr>
      </thead>
      <Collapse in={open}>
        {/* <div id="this-div-makes-collapse-faster"> */}
        <tbody>
          <tr>
            <td>
              <ResourceFormModal taskId={taskId} />
            </td>
          </tr>
          {resources.map(resource => (
            <ResourceListRow resource={resource} />
          ))}
        </tbody>
        {/* </div> */}
      </Collapse>
    </Table>
  );
};

export default ResourcesList;
