import { Box } from "@mui/material";
import { Card } from "components/Card";

const dogProfilesGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: 3,
};

interface DogProfilesGridProps {
  dogs: Record<string, any>;
}

export const DogProfilesGrid = ({ dogs }: DogProfilesGridProps) => {
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
          onClick={() => {}}
        />
      ))}
    </Box>
  );
};
