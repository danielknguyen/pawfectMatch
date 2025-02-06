import {
  FETCH_DOGS_REQUEST,
  FETCH_DOGS_SUCCESS,
  FETCH_DOGS_BY_ID_SUCCESS,
  FETCH_DOGS_FAILURE,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  CLEAR_FAVORITES,
} from "store/types/dogActionTypes";

export interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

export interface DogSearchResults {
  resultIds: string[];
  total: number;
  next?: string;
  prev?: string;
}

export interface DogState {
  dogs: Record<string, Dog>;
  searchResults: DogSearchResults;
  favorites: Record<string, Dog>;
  error: string | null;
}

export interface FetchDogsRequestAction {
  type: typeof FETCH_DOGS_REQUEST;
}

export interface FetchDogsSuccessAction {
  type: typeof FETCH_DOGS_SUCCESS;
  payload: DogSearchResults;
}

export interface FetchDogsFailureAction {
  type: typeof FETCH_DOGS_FAILURE;
  payload: string;
}

export interface FetchDogsByIdSuccessAction {
  type: typeof FETCH_DOGS_BY_ID_SUCCESS;
  payload: Dog[];
}

export interface AddFavoriteAction {
  type: typeof ADD_FAVORITE;
  payload: Dog;
}

export interface RemoveFavoriteAction {
  type: typeof REMOVE_FAVORITE;
  payload: string;
}

export interface ClearFavoritesAction {
  type: typeof CLEAR_FAVORITES;
}

export type DogActions =
  | FetchDogsRequestAction
  | FetchDogsSuccessAction
  | FetchDogsFailureAction
  | FetchDogsByIdSuccessAction
  | AddFavoriteAction
  | RemoveFavoriteAction
  | ClearFavoritesAction;
