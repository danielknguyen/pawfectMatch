import { AuthState, AuthActionTypes } from "store/types/authTypes";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "store/types/authActionTypes";

const initialState: AuthState = {
  isAuthenticated: false,
  error: null,
};

export const authReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        error: null,
      };
    default:
      return state;
  }
};
