import { LOGGED_IN, LOGGED_OUT } from "./userActions";

const initialUserState = {
  email: "",
  id: null,
  loaded: false
};

export default (state = initialUserState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return { ...state, ...action.user, loaded: true };
    case LOGGED_OUT:
      return initialUserState;
    default:
      return state;
  }
};
