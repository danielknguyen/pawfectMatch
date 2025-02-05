import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  filters: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
