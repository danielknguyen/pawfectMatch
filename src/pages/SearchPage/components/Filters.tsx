import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { SelectDropdown } from "components/SelectDropdown";
import { useAppDispatch } from "store/hooks/useAppDispatch";
import { updateFilter, resetFilters } from "store/actions/filterActions";
import { selectFilters } from "store/selectors/filterSelectors";
import { useSelector } from "react-redux";
import { searchApi } from "services/modules/searchApi";
import { Sort as SortType } from "store/types/filterTypes";

const filtersStyle = {
  marginTop: 2,
  marginBottom: 2,
  border: "none",
  display: "flex",
  gap: 2,
};

const SORT_OPTIONS = [SortType.Asc, SortType.Desc];

const searchApiInstance = searchApi();

export const Filters = () => {
  const dispatch = useAppDispatch();

  const filters = useSelector(selectFilters);

  const [showClearFilters, setShowClearFilters] = useState(false);

  const [breeds, setBreeds] = useState<string[]>([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const dogBreeds = await searchApiInstance.fetchDogBreeds();

      const dogBreedsResults = await dogBreeds.json();

      setBreeds(dogBreedsResults);
    };

    fetchBreeds();
  }, []);

  const handleBreedChange = (value: string[]) => {
    dispatch(updateFilter("breeds", value));

    if (!showClearFilters) setShowClearFilters(true);
  };

  const handleSortChange = (value: string) => {
    dispatch(updateFilter("sort", value));

    if (!showClearFilters) setShowClearFilters(true);
  };

  const handleClearFilters = () => {
    dispatch(resetFilters());
    setShowClearFilters(false);
  };

  return (
    <Box sx={filtersStyle}>
      <SelectDropdown
        label="Breeds"
        value={filters.breeds || []}
        onChange={handleBreedChange}
        options={breeds}
        multiple
      />
      <SelectDropdown
        label="Sort"
        value={filters.sort || SortType.Asc}
        onChange={handleSortChange}
        options={SORT_OPTIONS}
      />
      {showClearFilters && (
        <Button onClick={handleClearFilters}>Clear Filters</Button>
      )}
    </Box>
  );
};
