export const RECEIVE_RESOURCES = "RECEIVE_RESOURCES";
export const CREATED_RESOURCE = "CREATED_RESOURCE";
export const CLEANUP_RESOURCES = "CLEANUP_RESOURCES";
export const DELETED_RESOURCE = "DELETED_RESOURCE";

export const receiveResources = resources => ({
  type: RECEIVE_RESOURCES,
  resources
});

export const createdResource = resource => ({
  type: CREATED_RESOURCE,
  resource
});

export const cleanedupResources = () => ({
  type: CLEANUP_RESOURCES,
  resources: []
});

export const removedResource = resource => ({
  type: DELETED_RESOURCE,
  resource
});
