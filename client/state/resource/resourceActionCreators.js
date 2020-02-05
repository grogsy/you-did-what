import axios from "axios";

import { createdResource, removedResource } from "./resourceActions";

export const addNewResource = resource => {
  return async dispatch => {
    const { data } = await axios.post("/api/links", resource);
    dispatch(createdResource(data));
  };
};

export const removeResource = id => {
  console.log(id);
  return async dispatch => {
    const { data } = await axios.delete(`/api/links/${id}`);
    dispatch(removedResource(data));
  };
};
