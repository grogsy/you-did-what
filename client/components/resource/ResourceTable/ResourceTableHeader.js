import React, { useState } from "react";
import ResourceFormModal from "../ResourceFormModal";

const ResourceTableHeader = ({ taskId }) => {
  const [open, setOpen] = useState(false);

  return (
    <thead>
      <tr>
        <th onClick={() => setOpen(!open)}>
          Resources
          <ResourceFormModal taskId={taskId} />
        </th>
      </tr>
    </thead>
  );
};

export default ResourceTableHeader;
