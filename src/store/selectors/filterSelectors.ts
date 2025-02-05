import { RootState } from "store/reducers/rootReducer";

export const selectBreeds = (state: RootState) => state.filters.breeds;
export const selectZipCodes = (state: RootState) => state.filters.zipCodes;
export const selectAgeMin = (state: RootState) => state.filters.ageMin;
export const selectAgeMax = (state: RootState) => state.filters.ageMax;
export const selectSize = (state: RootState) => state.filters.size;
export const selectFrom = (state: RootState) => state.filters.from;
export const selectSort = (state: RootState) => state.filters.sort;
