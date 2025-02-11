import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
type SetProsType = {
  renderScreen: string;
  setMenuDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
};
function Header({ renderScreen, setMenuDisplayed }: Readonly<SetProsType>) {
  const screenLabel: { [key: string]: string } = {
    "71L1": "Suplier Screen",
    "71Z1": "Material Screen",
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setMenuDisplayed(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {screenLabel[renderScreen]}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
