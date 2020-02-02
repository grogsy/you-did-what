export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_SINGLE_TASK = "RECEIVE_SINGLE_TASK";
export const FILTERED_TASKS = "FILTERED_TASKS";
export const REMOVED_TASK = "REMOVED_TASK";
export const ADDED_TASK = "ADDED_TASK";
export const UPDATED_TASK = "UPDATED_TASK";
export const COMPLETED_TASK = "COMPLETED_TASK";
export const CLEANUP_SINGLE_TASK = "CLEANUP_SINGLE_TASK";

export const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks
});

export const receiveSingleTask = task => ({
  type: RECEIVE_SINGLE_TASK,
  task
});

export const cleanedupSingleTask = () => ({
  type: CLEANUP_SINGLE_TASK,
  task: {}
});

export const filteredTasks = filterCallback => ({
  type: FILTERED_TASKS,
  filterCallback
});

export const removeTask = task => ({
  type: REMOVED_TASK,
  task
});

export const addTask = task => ({
  type: ADDED_TASK,
  task
});

export const updateTask = task => ({
  type: UPDATED_TASK,
  task
});

export const completeTask = task => ({
  type: COMPLETED_TASK,
  task
});
