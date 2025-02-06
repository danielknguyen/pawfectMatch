import {
  FETCH_DOGS_REQUEST,
  FETCH_DOGS_SUCCESS,
  FETCH_DOGS_FAILURE,
  FETCH_DOGS_BY_ID_SUCCESS,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  CLEAR_FAVORITES,
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

export const addFavorite = (dog: Dog) => ({
  type: ADD_FAVORITE,
  payload: dog,
});

export const removeFavorite = (id: string) => ({
  type: REMOVE_FAVORITE,
  payload: id,
});

export const clearFavorites = () => ({
  type: CLEAR_FAVORITES,
});
