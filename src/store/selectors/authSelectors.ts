import { RootState } from "store/reducers/rootReducer";

export const selectIsAuthenticated = (state: RootState): boolean =>
  state.auth.isAuthenticated;

export const selectAuthError = (state: RootState): string | null =>
  state.auth.error;
