import React, { useState } from "react";
import Table from "react-bootstrap/Table";

import ResourceFormModal from "./ResourceFormModal";
import ResourceListRow from "./ResourceListRow";

const ResourcesList = ({ taskId, resources }) => {
  const [open, setOpen] = useState(false);
  return (
    <Table className="mt-3" bordered responsive>
      <thead>
        <tr>
          <th onClick={() => setOpen(!open)}>
            Resources
            <ResourceFormModal taskId={taskId} />
          </th>
        </tr>
      </thead>
      <tbody>
        {resources.map(resource => (
          <ResourceListRow key={resource.id} resource={resource} />
        ))}
      </tbody>
    </Table>
  );
};

export default ResourcesList;
