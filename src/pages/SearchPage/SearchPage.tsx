import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { Pagination } from "components/Pagination";
import { useAppDispatch } from "store/hooks/useAppDispatch";
import { selectIsAuthenticated } from "store/selectors/authSelectors";
import { selectFilters } from "store/selectors/filterSelectors";
import {
  selectAllDogs,
  selectSearchResults,
} from "store/selectors/dogSelectors";
import {
  fetchDogsSuccess,
  fetchDogsByIdSuccess,
} from "store/actions/dogActions";
import { Filters, DogProfilesGrid } from "pages/SearchPage/components";
import { searchApi } from "services/modules/searchApi";

const mainStyle = {
  flexGrow: 1,
  p: 3,
  height: "100vh",
};

const searchApiInstance = searchApi();

export const SearchPage = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    window.location.href = "/login";
  }

  const dispatch = useAppDispatch();

  const dogs = useSelector(selectAllDogs);
  const searchResults = useSelector(selectSearchResults);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    (async () => {
      const dogSearch = await searchApiInstance.search(filters);

      const dogSearchResults = await dogSearch.json();

      dispatch(fetchDogsSuccess({ ...dogSearchResults }));
    })();
  }, [filters]);

  useEffect(() => {
    (async () => {
      const dogs = await searchApiInstance.fetchDogsByIds(
        searchResults.resultIds
      );

      const dogResults = await dogs.json();

      dispatch(fetchDogsByIdSuccess(dogResults));
    })();
  }, [searchResults]);

  const handlePageChange = async (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    const dogSearch = await searchApiInstance.search({
      ...filters,
      from: (page - 1) * (filters?.size ?? 25),
    });

    const dogSearchResults = await dogSearch.json();

    dispatch(fetchDogsSuccess(dogSearchResults));
  };

  return (
    <Box component="main" sx={mainStyle}>
      <Filters />
      <DogProfilesGrid dogs={dogs} />
      <Pagination
        total={searchResults.total}
        size={filters.size}
        onChange={handlePageChange}
      />
    </Box>
  );
};
