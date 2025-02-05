import { RootState } from "store/reducers/rootReducer";

export const selectDogs = (state: RootState) => state.dogs;

export const selectAllDogs = (state: RootState) => state.dogs.dogs;

export const selectDogById = (state: RootState, dogId: string) =>
  state.dogs.dogs[dogId];

export const selectSearchResults = (state: RootState) =>
  state.dogs.searchResults;

export const selectTotalResults = (state: RootState) =>
  state.dogs.searchResults.total;

export const selectNextPage = (state: RootState) =>
  state.dogs.searchResults.next;

export const selectPrevPage = (state: RootState) =>
  state.dogs.searchResults.prev;

export const selectDogsError = (state: RootState) => state.dogs.error;
