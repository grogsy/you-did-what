import {
  RECEIVE_SINGLE_TASK,
  RECEIVE_TASKS,
  FILTERED_TASKS,
  REMOVED_TASK,
  ADDED_TASK,
  COMPLETED_TASK
} from "./taskActions";

const initialTaskState = {
  tasks: [],
  completedTasks: [],
  currentlyViewedList: [],
  viewedTask: {},
  newTaskId: null
};

export default (state = initialTaskState, action) => {
  switch (action.type) {
    case RECEIVE_TASKS:
      return {
        ...state,
        tasks: action.tasks.filter(task => task.status !== "Completed"),
        completedTasks: action.tasks.filter(task => task.status === "Completed")
      };
    case RECEIVE_SINGLE_TASK:
      return { ...state, viewedTask: action.task };
    case FILTERED_TASKS:
      return {
        ...state,
        tasks: state.tasks.filter(action.filterCallback)
      };
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
        tasks: [action.task, ...state.tasks],
        newTaskId: action.task.id
      };

    default:
      return state;
  }
};
