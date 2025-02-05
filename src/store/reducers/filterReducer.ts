import { FiltersState, FilterActions } from "store/types/filterTypes";
import {
  SET_FILTERS,
  UPDATE_FILTERS,
  RESET_FILTERS,
} from "store/types/filterActionTypes";

const initialState: FiltersState = {
  breeds: [],
  zipCodes: [],
  ageMin: null,
  ageMax: null,
  size: 25,
  from: 0,
  sort: "breed:asc",
};

export const filterReducer = (state = initialState, action: FilterActions) => {
  switch (action.type) {
    case SET_FILTERS:
      return { ...state, ...action.payload };

    case UPDATE_FILTERS:
      return { ...state, [action.payload.key]: action.payload.value };

    case RESET_FILTERS:
      return initialState;

    default:
      return state;
  }
};
