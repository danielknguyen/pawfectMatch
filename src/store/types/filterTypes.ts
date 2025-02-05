import {
  SET_FILTERS,
  UPDATE_FILTERS,
  RESET_FILTERS,
} from "store/types/filterActionTypes";

export interface FiltersState {
  breeds?: string[];
  zipCodes?: string[];
  ageMin?: number | null;
  ageMax?: number | null;
  size?: number;
  from?: number;
  sort?: string;
}

export const initialState: FiltersState = {
  breeds: [],
  zipCodes: [],
  ageMin: null,
  ageMax: null,
  size: 25,
  from: 0,
  sort: "breed:asc",
};

export interface SetFiltersAction {
  type: typeof SET_FILTERS;
  payload: Partial<FiltersState>;
}

export interface UpdateFiltersAction {
  type: typeof UPDATE_FILTERS;
  payload: { key: keyof FiltersState; value: FiltersState[keyof FiltersState] };
}

export interface ResetFiltersAction {
  type: typeof RESET_FILTERS;
}

export type FilterActions =
  | SetFiltersAction
  | UpdateFiltersAction
  | ResetFiltersAction;
