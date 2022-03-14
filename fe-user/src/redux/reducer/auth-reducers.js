import { START_AUTH, END_AUTH, USER_LOGIN, USER_LOGOUT } from "../action/type";

const INITIAL_STATE = {
  data: null,
  error: "",
  loading: false,
};

export const AuthUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_AUTH:
      return { ...state, loading: true };
    case END_AUTH:
      return { ...state, loading: false, error: action.payload };
    case USER_LOGIN:
      return { ...state, data: action.payload }; // data di INITIAL_STATE akan terisi oleh payload
    case USER_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
