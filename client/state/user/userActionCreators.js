import axios from "axios";
import { loggedIn, loggedOut, authError } from "./userActions";

export const me = () => async dispatch => {
  try {
    const { data } = await axios.get("/user/me");
    dispatch(loggedIn(data || { email: "", id: null }));
  } catch (error) {
    console.log(error);
  }
};

export const register = formData => {
  return async dispatch => {
    const { data } = await axios.post("/user/register", formData);
    dispatch(loggedIn(data));
  };
};

export const login = formData => {
  return async dispatch => {
    try {
      const { data } = await axios.post("/user/login", formData);
      dispatch(loggedIn(data));
    } catch (error) {
      dispatch(authError(error));
    }
  };
};

export const logout = () => {
  try {
    return async dispatch => {
      await axios.post("/user/logout");
      dispatch(loggedOut());
    };
  } catch (error) {
    console.log(error);
  }
};
