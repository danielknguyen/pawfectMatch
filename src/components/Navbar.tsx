import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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

interface NavbarProps {
  title: string;
  isLoggedIn: boolean;
}

/**
 * A navigation bar with a title and a login/logout button.
 * @param {{ title: string; isLoggedIn: boolean }} props
 * @prop {string} title The title of the navbar.
 * @prop {boolean} isLoggedIn Whether or not the user is logged in.
 * @returns {JSX.Element}
 */
export const Navbar = ({ title, isLoggedIn }: NavbarProps) => {
  return (
    <Box sx={boxStyle}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h4" component="div" sx={TypographyStyle}>
            <a href="/" style={linkStyle}>
              {title}
            </a>
          </Typography>
          <Button color="inherit" href={isLoggedIn ? "/logout" : "/login"}>
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
