import {
  SET_FILTERS,
  UPDATE_FILTERS,
  RESET_FILTERS,
} from "store/types/filterActionTypes";

import { FiltersState } from "store/types/filterTypes";

export const setFilters = (filters: Partial<FiltersState>) => ({
  type: SET_FILTERS,
  payload: filters,
});

export const updateFilter = (
  key: keyof FiltersState,
  value: number | string | string[]
) => ({
  type: UPDATE_FILTERS,
  payload: { key, value },
});

export const resetFilters = () => ({
  type: RESET_FILTERS,
});
