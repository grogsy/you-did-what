import {
  RECEIVE_SINGLE_TASK,
  RECEIVE_TASKS,
  REMOVED_TASK,
  ADDED_TASK,
  COMPLETED_TASK,
  CLEANUP_SINGLE_TASK,
  EDITED_TASK
} from "./taskActions";

import { paginateTasks } from "./taskUtil";

const initialTaskState = {
  tasks: [],
  pages: [],
  completedTasks: [],
  viewedTask: {}
};

export default (state = initialTaskState, action) => {
  switch (action.type) {
    case RECEIVE_TASKS:
      const tasks = action.tasks.filter(task => task.status === "In Progress");
      const pages = paginateTasks(tasks);
      return {
        ...state,
        tasks,
        pages,
        completedTasks: action.tasks.filter(task => task.status === "Completed")
      };
    case CLEANUP_SINGLE_TASK:
      return { ...state, viewedTask: {} };
    case EDITED_TASK:
    case RECEIVE_SINGLE_TASK:
      return { ...state, viewedTask: action.task };
    case COMPLETED_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.task.id),
        completedTasks: [action.task, ...state.completedTasks]
      };
    case REMOVED_TASK:
      let updatedList = state.tasks.filter(task => task.id != action.task.id);
      return { ...state, tasks: updatedList };
    case ADDED_TASK:
      return {
        ...state,
        tasks: [action.task, ...state.tasks]
      };

    default:
      return state;
  }
};
