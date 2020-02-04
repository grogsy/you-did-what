export const RECEIVE_RESOURCES = "RECEIVE_RESOURCES";
export const CREATED_RESOURCE = "CREATED_RESOURCE";

export const receiveResources = resources => ({
  type: RECEIVE_RESOURCES,
  resources
});

export const createdResource = resource => ({
  type: CREATED_RESOURCE,
  resource
});
