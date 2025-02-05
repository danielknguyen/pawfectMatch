import {
  FETCH_DOGS_REQUEST,
  FETCH_DOGS_SUCCESS,
  FETCH_DOGS_FAILURE,
  FETCH_DOGS_BY_ID_SUCCESS,
} from "store/types/dogActionTypes";

import { Dog, DogSearchResults } from "store/types/dogTypes";

export const fetchDogsRequest = () => ({
  type: FETCH_DOGS_REQUEST,
});

export const fetchDogsSuccess = (data: DogSearchResults) => ({
  type: FETCH_DOGS_SUCCESS,
  payload: data,
});

export const fetchDogsFailure = (error: string) => ({
  type: FETCH_DOGS_FAILURE,
  payload: error,
});

export const fetchDogsByIdSuccess = (dogs: Dog[]) => ({
  type: FETCH_DOGS_BY_ID_SUCCESS,
  payload: dogs,
});
