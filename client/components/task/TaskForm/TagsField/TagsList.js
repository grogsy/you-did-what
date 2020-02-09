import React from "react";
import Badge from "react-bootstrap/Badge";

const TagsList = ({ tags, deleteTag }) => {
  return (
    <div className="mb-1">
      {tags.map(tag => (
        <Badge
          key={tag}
          onClick={() => deleteTag(tag)}
          style={{ cursor: "pointer" }}
          className="mx-1 mb-2"
          title="Remove Tag"
          variant="info"
        >
          <i className="fas fa-times xs my-auto"></i>&nbsp;
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default TagsList;
