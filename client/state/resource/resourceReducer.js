import { RECEIVE_RESOURCES, CREATED_RESOURCE } from "./resourceActions";

import { RECEIVE_SINGLE_TASK } from "../task/taskActions";

const initialResourceState = {
  resources: []
};

export default (state = initialResourceState, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_TASK:
      return { ...state, resources: action.task.resources };
    case CREATED_RESOURCE:
      return { ...state, resources: [action.resource, ...state.resources] };
    default:
      return state;
  }
};
