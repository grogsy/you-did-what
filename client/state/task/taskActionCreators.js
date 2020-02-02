import axios from "axios";

import { giveDateFields } from "./taskUtil";
import {
  receiveSingleTask,
  receiveTasks,
  filteredTasks,
  removeTask,
  addTask,
  completeTask,
  cleanedupSingleTask
} from "./taskActions";

export const getTasks = () => {
  return async dispatch => {
    const { data } = await axios.get("/api/tasks");

    const tasks = data.map(task => {
      // create a human friendly date field
      task = giveDateFields(task);
      return task;
    });
    dispatch(receiveTasks(tasks));
  };
};

export const getSingleTask = id => {
  return async dispatch => {
    const { data } = await axios.get(`/api/tasks/${id}`);
    const task = giveDateFields(data);
    dispatch(receiveSingleTask(task));
  };
};

export const cleanupSingleTask = () => {
  return async dispatch => {
    dispatch(cleanedupSingleTask());
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
