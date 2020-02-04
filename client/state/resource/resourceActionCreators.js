import axios from "axios";

import { receiveResources, createdResource } from "./resourceActions";

export const addNewResource = resource => {
  return async dispatch => {
    const { data } = await axios.post("/api/links", resource);
    dispatch(createdResource(data));
  };
};
