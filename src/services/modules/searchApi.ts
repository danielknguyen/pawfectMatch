import { Api } from "services/api";
import { FiltersState } from "store/types/filterTypes";

const apiInstance = new Api();

export const searchApi = () => ({
  search: async ({
    breeds = [],
    zipCodes = [],
    ageMin,
    ageMax,
    size = 25,
    from = 0,
    sort = "breed:asc",
  }: FiltersState) => {
    const queryParams = new URLSearchParams();

    if (breeds.length) queryParams.append("breeds", breeds.join(","));
    if (zipCodes.length) queryParams.append("zipCodes", zipCodes.join(","));
    if (ageMin !== undefined) queryParams.append("ageMin", String(ageMin));
    if (ageMax !== undefined) queryParams.append("ageMax", String(ageMax));
    if (size) queryParams.append("size", String(size));
    if (from) queryParams.append("from", String(from));
    if (sort) queryParams.append("sort", sort);

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
});
