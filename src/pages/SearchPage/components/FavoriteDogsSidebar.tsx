import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearFavorites, removeFavorite } from "store/actions/dogActions";
import { selectFavorites } from "store/selectors/dogSelectors";
import { Drawer, Button, Box, Typography } from "@mui/material";
import { Card } from "components/Card";
import { Dog } from "store/types/dogTypes";
import { searchApi } from "services/modules/searchApi";

const titleStyle = {
  mb: 2,
  textAlign: "center",
};

const boxStyle = {
  width: 300,
  p: 3,
  display: "flex",
  flexDirection: "column",
};

const buttonStyle = {
  mt: 2,
};

const helperTextStyle = {
  textAlign: "center",
  mt: 2,
};

const CardContainerStyle = {
  display: "flex",
  flexDirection: "column",
  marginTop: 3,
  marginBottom: 3,
  gap: 2,
};

interface FavoriteDogsSidebarProps {
  open: boolean;
  onClose: () => void;
}

const searchApiInstance = searchApi();

type Dogs = Record<string, Dog>;

export const FavoriteDogsSidebar = ({
  open,
  onClose,
}: FavoriteDogsSidebarProps) => {
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites) as Dogs;

  const [matches, setMatches] = useState<Dogs>({});

  const hasMatches = Object.entries(matches).length;

  const handleClearFavorites = () => {
    dispatch(clearFavorites());
    onClose();
  };

  const noFavorites = Object.entries(favorites).length === 0;

  const handleFindingBestMatch = async () => {
    const match = await searchApiInstance.matchDogs(
      Object.keys(favorites).map((key) => favorites[key].id)
    );

    const matchResults = await match.json();

    const dogs = await searchApiInstance.fetchDogsByIds([matchResults.match]);

    const dogsResults = await dogs.json();

    setMatches(dogsResults);
  };

  const renderDogCards = (dogs: Dogs, isSelectable = false) =>
    Object.entries(dogs).map(([key, dog]) => (
      <Card
        key={key}
        name={dog.name}
        age={dog.age}
        img={dog.img}
        zipCode={dog.zip_code}
        breed={dog.breed}
        selected={true}
        {...(isSelectable && {
          onClick: () => dispatch(removeFavorite(dog.id)),
        })}
      />
    ));

  const handleClearingMatches = () => {
    setMatches({});
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={boxStyle}>
        <Typography variant="h6" sx={titleStyle}>
          Favorite Dogs
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleFindingBestMatch}
          sx={buttonStyle}
          disabled={noFavorites}
        >
          Find Best Match
        </Button>
        <Button
          variant="outlined"
          color={noFavorites && !hasMatches ? "inherit" : "error"}
          onClick={hasMatches ? handleClearingMatches : handleClearFavorites}
          sx={buttonStyle}
          disabled={noFavorites && !hasMatches}
        >
          {hasMatches ? "Clear Matches" : "Clear Favorites"}
        </Button>
        <Box sx={CardContainerStyle}>
          <Typography variant="h6" sx={helperTextStyle}>
            {hasMatches ? "Matches" : "Favorites"}
          </Typography>
          {hasMatches ? (
            renderDogCards(matches)
          ) : noFavorites ? (
            <Typography variant="body2" sx={helperTextStyle}>
              No favorite dogs yet.
            </Typography>
          ) : (
            renderDogCards(favorites, true)
          )}
        </Box>
      </Box>
    </Drawer>
  );
};

export default FavoriteDogsSidebar;
