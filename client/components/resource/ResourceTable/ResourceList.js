import React from "react";

import ResourceListRow from "./ResourceListRow";

const ResourceList = ({ resources }) => {
  return resources && resources.length ? (
    <tbody>
      {resources.map(resource => (
        <ResourceListRow key={resource.id} resource={resource} />
      ))}
    </tbody>
  ) : (
    <h6>
      You can add information resources related to your task for convenient
      access!
    </h6>
  );
};

export default ResourceList;
