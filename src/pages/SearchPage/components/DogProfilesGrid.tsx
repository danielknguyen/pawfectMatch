import { Box } from "@mui/material";
import { Card } from "components/Card";
import { addFavorite } from "store/actions/dogActions";
import { removeFavorite } from "store/actions/dogActions";
import { selectFavorites } from "store/selectors/dogSelectors";
import { useAppDispatch } from "store/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { Dog } from "store/types/dogTypes";

const dogProfilesGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: 3,
};

interface DogProfilesGridProps {
  dogs: Record<string, Dog>;
}

export const DogProfilesGrid = ({ dogs }: DogProfilesGridProps) => {
  const dispatch = useAppDispatch();

  const favorites = useSelector(selectFavorites) as Record<string, Dog>;

  const handleFavorite = (dog: Dog) => {
    if (favorites?.[dog.id]) {
      dispatch(removeFavorite(dog.id));
    } else {
      dispatch(addFavorite(dog));
    }
  };

  return (
    <Box sx={dogProfilesGridStyle}>
      {Object.values(dogs).map((dog) => (
        <Card
          key={dog.id}
          name={dog.name}
          age={dog.age}
          img={dog.img}
          zipCode={dog.zip_code}
          breed={dog.breed}
          selected={favorites?.[dog.id] ? true : false}
          onClick={() => handleFavorite(dog)}
        />
      ))}
    </Box>
  );
};
