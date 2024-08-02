"use client";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Drawer,
  IconButton,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { ExpandLess, ExpandMore, Home } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function HeaderMenu() {
  const [listMenuOpen, setListMenuOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [masterOpen, setMasterOpen] = useState(false);
  const router = useRouter();
  function redirectScreen(path: string) {
    setListMenuOpen(false);
    router.push(path);
  }
  const DrawerList = (
    <Box sx={{ width: 200 }}>
      <List>
        <ListItemButton onClick={() => redirectScreen("/")}>
          <Home />
        </ListItemButton>
        <ListItemButton onClick={() => setMasterOpen(!masterOpen)}>
          <ListItemText primary="Master" />
          {masterOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={masterOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => redirectScreen("/master/supplier")}
            >
              <ListItemText primary="Supplier" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => redirectScreen("/master/members")}
            >
              <ListItemText primary="Members Maintain" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => redirectScreen("/master/system")}
            >
              <ListItemText primary="System management" />
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
              <ListItemText primary="Dummy Report" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        onClick={() => setListMenuOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={listMenuOpen} onClose={() => setListMenuOpen(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
