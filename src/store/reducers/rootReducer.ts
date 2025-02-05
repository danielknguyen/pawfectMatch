import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { filterReducer } from "./filterReducer";
import { dogReducer } from "./dogReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  filters: filterReducer,
  dogs: dogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
