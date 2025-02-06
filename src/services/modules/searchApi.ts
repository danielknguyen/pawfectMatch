import { Api } from "services/api";
import { FiltersState } from "store/types/filterTypes";
import { Sort } from "store/types/filterTypes";

const apiInstance = new Api();

export const searchApi = () => ({
  search: async ({
    breeds = [],
    size = 25,
    from = 0,
    sort = Sort.Asc,
  }: FiltersState) => {
    const queryParams = new URLSearchParams();

    if (breeds.length) queryParams.append("breeds", breeds.join(","));
    if (size) queryParams.append("size", String(size));
    if (from) queryParams.append("from", String(from));
    if (sort) queryParams.append("sort", `breed:${sort}`);

    return apiInstance.get(`/dogs/search?${queryParams.toString()}`);
  },

  fetchDogsByIds: async (ids: string[]) => {
    return apiInstance.post("/dogs", ids);
  },

  fetchDogBreeds: async () => {
    return apiInstance.get("/dogs/breeds");
  },

  matchDogs: async (ids: string[]) => {
    return apiInstance.post("/dogs/match", ids);
  },

  fetchByUrl: async (url: string) => {
    return apiInstance.get(url);
  },
});
