import {
  FETCH_DOGS_FAILURE,
  FETCH_DOGS_REQUEST,
  FETCH_DOGS_SUCCESS,
  FETCH_DOGS_BY_ID_SUCCESS,
} from "store/types/dogActionTypes";
import { DogState, Dog, DogActions } from "store/types/dogTypes";

const initialState: DogState = {
  dogs: {},
  searchResults: {
    resultIds: [],
    total: 0,
    next: undefined,
    prev: undefined,
  },
  error: null,
};

export const dogReducer = (state = initialState, action: DogActions) => {
  switch (action.type) {
    case FETCH_DOGS_REQUEST:
      return { ...state, error: null };

    case FETCH_DOGS_SUCCESS:
      return {
        ...state,
        searchResults: {
          resultIds: action.payload.resultIds,
          total: action.payload.total,
          next: action.payload.next,
          prev: action.payload.prev,
        },
      };

    case FETCH_DOGS_BY_ID_SUCCESS:
      const newDogs: Record<string, Dog> = {};

      action.payload.forEach((dog: Dog) => {
        newDogs[dog.id] = dog;
      });

      return {
        ...state,
        dogs: { ...newDogs },
      };

    case FETCH_DOGS_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
