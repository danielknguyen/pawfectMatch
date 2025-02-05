import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PetsIcon from "@mui/icons-material/Pets";
import { Icon } from "@mui/material";

const boxStyle = {
  flexGrow: 1,
};

const TypographyStyle = {
  flexGrow: 1,
};

const linkStyle = {
  textDecoration: "none",
  fontWeight: "bold",
  color: "inherit",
};

const iconStyle = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

interface NavbarProps {
  title: string;
  isLoggedIn: boolean;
  logout: () => void;
}

/**
 * A component that renders a navigation bar with a title and a button
 * to login or logout, depending on whether the user is logged in or not.
 *
 * @param {string} title The title of the page.
 * @param {boolean} isLoggedIn Whether the user is logged in or not.
 * @param {function} logout A function to call when the user logs out.
 * @returns {ReactElement} The navigation bar component.
 */
export const Navbar = ({ title, isLoggedIn, logout }: NavbarProps) => {
  return (
    <Box sx={boxStyle}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h5" component="div" sx={TypographyStyle}>
            <Box sx={iconStyle}>
              <PetsIcon color="primary" fontSize="large" />
              <a href="/" style={linkStyle}>
                {title}
              </a>
            </Box>
          </Typography>
          {!isLoggedIn && (
            <Button color="inherit" href="/login">
              Login
            </Button>
          )}
          {isLoggedIn && (
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
