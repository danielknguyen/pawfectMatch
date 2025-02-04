import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "store/types/authActionTypes";

export interface AuthState {
  isAuthenticated: boolean;
  error: string | null;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes =
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction;
