import React from "react";
import Table from "react-bootstrap/Table";

import ResourceTableHeader from "./ResourceTableHeader";
import ResourceList from "./ResourceList";

const ResourcesTable = ({ taskId, resources }) => {
  return (
    <Table className="mt-3" bordered responsive>
      <ResourceTableHeader taskId={taskId} />
      <ResourceList resources={resources} />
    </Table>
  );
};

export default ResourcesTable;
