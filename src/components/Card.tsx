import { Card as MuiCard } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

interface CardProps {
  img: string;
  name: string;
  age: number;
  zipCode: string;
  breed: string;
  onClick: () => void;
  selected?: boolean;
}

export const Card = ({
  img,
  name,
  age,
  zipCode,
  breed,
  onClick,
  selected,
}: CardProps) => {
  return (
    <MuiCard sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} alt={breed} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Age: {age}</span>
            <span>Zip Code: {zipCode}</span>
            <span>Breed: {breed}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton onClick={onClick} color={selected ? "primary" : "default"}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </MuiCard>
  );
};
