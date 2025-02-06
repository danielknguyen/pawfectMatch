import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { Pagination } from "components/Pagination";
import { FavoriteDogsSidebar } from "pages/SearchPage/components/FavoriteDogsSidebar";
import { useAppDispatch } from "store/hooks/useAppDispatch";
import { selectIsAuthenticated } from "store/selectors/authSelectors";
import { selectFilters } from "store/selectors/filterSelectors";
import {
  selectAllDogs,
  selectFavorites,
  selectSearchResults,
} from "store/selectors/dogSelectors";
import {
  fetchDogsSuccess,
  fetchDogsByIdSuccess,
  fetchDogsFailure,
} from "store/actions/dogActions";
import { Filters, DogProfilesGrid } from "pages/SearchPage/components";
import { searchApi } from "services/modules/searchApi";
import FavoriteIcon from "@mui/icons-material/Favorite";

const mainStyle = {
  flexGrow: 1,
  p: 3,
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  overflowX: "auto",
  gap: 3,
  marginBottom: 2,
};

const searchApiInstance = searchApi();

export const SearchPage = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    window.location.href = "/login";
    return;
  }

  const dispatch = useAppDispatch();

  const dogs = useSelector(selectAllDogs);
  const searchResults = useSelector(selectSearchResults);
  const filters = useSelector(selectFilters);
  const favorites = useSelector(selectFavorites);

  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const dogSearch = await searchApiInstance.search(filters);

        if (!dogSearch.ok) {
          const error = await dogSearch.json();
          dispatch(fetchDogsFailure(error.error));
          return;
        }

        const dogSearchResults = await dogSearch.json();

        dispatch(fetchDogsSuccess({ ...dogSearchResults }));

        setPage(1);
      } catch (error) {
        dispatch(fetchDogsFailure(error as string));
      }
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

    setPage(page);
  };

  const handleOpeningFavorites = () => {
    setIsFavoritesOpen(true);
  };

  const handleClosingFavorites = () => {
    setIsFavoritesOpen(false);
  };

  const hasFavorites = Object.keys(favorites).length > 0;

  return (
    <Box component="main" sx={mainStyle}>
      <Box sx={headerStyle}>
        <Filters />
        <Button
          onClick={handleOpeningFavorites}
          color={hasFavorites ? "primary" : "inherit"}
        >
          <FavoriteIcon /> Favorites ({Object.keys(favorites).length})
        </Button>
      </Box>
      <DogProfilesGrid dogs={dogs} />
      <Pagination
        total={searchResults.total}
        size={filters.size}
        onChange={handlePageChange}
        page={page}
      />
      <FavoriteDogsSidebar
        open={isFavoritesOpen}
        onClose={handleClosingFavorites}
      />
    </Box>
  );
};
