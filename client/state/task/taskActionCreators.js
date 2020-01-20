import axios from "axios";

import { parseDate } from "./taskUtil";
import {
  receiveSingleTask,
  receiveTasks,
  filteredTasks,
  removeTask,
  addTask,
  completeTask
} from "./taskActions";

export const getTasks = () => {
  return async dispatch => {
    const { data } = await axios.get("/api/tasks");

    // create a human friendly date field
    const tasks = data.map(task => {
      let extraFields = {};
      const posted = parseDate(task.createdAt);
      extraFields = { posted };
      if (task.status === "Completed") {
        const completedAt = parseDate(task.updatedAt);
        extraFields = { posted, completedAt };
      }
      return { ...task, ...extraFields };
    });
    dispatch(receiveTasks(tasks));
  };
};

export const getSingleTask = id => {
  return async dispatch => {
    const { data } = await axios.get(`/api/tasks/${id}`);
    dispatch(receiveSingleTask(data));
  };
};

export const addNewTask = task => {
  return async dispatch => {
    const { data } = await axios.post("/api/tasks", task);
    dispatch(addTask(data));
    return data;
  };
};

export const deleteTask = id => {
  return async dispatch => {
    const { data } = await axios.delete(`/api/tasks/${id}`);
    dispatch(removeTask(data));
  };
};

export const filterTasks = callback => {
  return async dispatch => {
    dispatch(filteredTasks(callback));
  };
};

// export const markTaskComplete = task => {
//   return async dispatch => {
//     task.status = "Completed";
//     const { data } = await axios.put(`/api/tasks/${task.id}`, task);
//     dispatch(completeTask(data));
//   };
// };

export const markTaskComplete = id => {
  return async dispatch => {
    const { data } = await axios.put(`/api/tasks/complete/${id}`);
    dispatch(completeTask(data));
  };
};
