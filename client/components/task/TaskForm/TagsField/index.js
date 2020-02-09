import React from "react";
import TagsList from "./TagsList";
import TagsForm from "./TagsForm";

const TagsField = ({ tags, deleteTag, addTag }) => {
  const validateTag = tag => (tags.includes(tag) ? false : true);

  return (
    <>
      <TagsForm addTag={addTag} validateTag={validateTag} />
      <TagsList tags={tags} deleteTag={deleteTag} />
    </>
  );
};

export default TagsField;
