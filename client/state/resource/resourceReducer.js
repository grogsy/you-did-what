import {
  CREATED_RESOURCE,
  CLEANUP_RESOURCES,
  DELETED_RESOURCE
} from "./resourceActions";

import { RECEIVE_SINGLE_TASK } from "../task/taskActions";

const initialResourceState = {
  resources: []
};

export default (state = initialResourceState, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_TASK:
      return { ...state, resources: action.task.resources };
    case DELETED_RESOURCE:
      let updatedResources = state.resources.filter(
        resource => resource.id !== action.resource.id
      );
      return { ...state, resources: updatedResources };
    case CREATED_RESOURCE:
      return { ...state, resources: [action.resource, ...state.resources] };
    case CLEANUP_RESOURCES:
      return { ...state, resources: action.resources };
    default:
      return state;
  }
};
