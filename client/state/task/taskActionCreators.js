import axios from "axios";

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
    dispatch(receiveTasks(data));
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

export const markTaskComplete = task => {
  return async dispatch => {
    const { data } = await axios.put(`/api/tasks/${task.id}`, task);
    dispatch(completeTask(data));
  };
};
