import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "store/types/authActionTypes";

import { AuthState } from "store/types/authTypes";

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = (error: AuthState["error"]) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});
