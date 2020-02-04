import React from "react";

const ResourceListRow = ({ resource }) => {
  return (
    <>
      <tr>
        <td>
          <a href={resource.httplink}>{resource.fallbackText}</a>
        </td>
      </tr>
    </>
  );
};

export default ResourceListRow;
