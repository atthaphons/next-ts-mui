import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
  Drawer,
} from "@mui/material";
import React from "react";
type SetProsType = {
  menuDisplayed: boolean;
  setMenuDisplayed: React.Dispatch<React.SetStateAction<boolean>>;
  renderScreen: string;
  setRenderScreen: React.Dispatch<React.SetStateAction<string>>;
};
function MatsMenu({
  menuDisplayed,
  setMenuDisplayed,
  renderScreen,
  setRenderScreen,
}: Readonly<SetProsType>) {
  function handleMenu(screenValue: string) {
    setRenderScreen(screenValue);
    setMenuDisplayed(false);
  }
  const [reportOpen, setReportOpen] = React.useState(false);
  const [masterOpen, setMasterOpen] = React.useState(false);
  const MenuList = (
    <List>
      <ListItemButton onClick={() => setMasterOpen(!masterOpen)}>
        <ListItemText primary="Master" />
        {masterOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={masterOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            selected={renderScreen === "71L1"}
            sx={{ pl: 4 }}
            onClick={() => handleMenu("71L1")}
          >
            <ListItemText primary="Supplier" />
          </ListItemButton>
          <ListItemButton
            id="71Z1"
            selected={renderScreen === "71Z1"}
            sx={{ pl: 4 }}
            onClick={() => handleMenu("71Z1")}
          >
            <ListItemText primary="Material" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemText primary="Transaction" />
      </ListItemButton>
      <ListItemButton onClick={() => setReportOpen(!reportOpen)}>
        <ListItemText primary="Report" />
        {reportOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={reportOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Dummy Report" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
  return (
    <Drawer open={menuDisplayed} onClose={() => setMenuDisplayed(false)}>
      {MenuList}
    </Drawer>
  );
}
export default MatsMenu;
