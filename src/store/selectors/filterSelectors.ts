import { RootState } from "store/reducers/rootReducer";

export const selectBreeds = (state: RootState) => state.filters.breeds;
export const selectSize = (state: RootState) => state.filters.size;
export const selectFrom = (state: RootState) => state.filters.from;
export const selectSort = (state: RootState) => state.filters.sort;
export const selectFilters = (state: RootState) => state.filters;
