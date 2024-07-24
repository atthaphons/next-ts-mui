'use client'
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { parse } from "tldts";
import { Avatar, Button, FormControl, InputLabel, Menu, MenuItem, Select, SelectChangeEvent, Tooltip } from '@mui/material';
import page from '../page';
import HeaderMaster from './template/header';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const menuList = [{
  nameDisplay: "Supplier",
  path: "/master/supplier/*"
},
{
  nameDisplay: "Material",
  path: "/master/material/*"
}]

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();
  const [text, setText] = useState('');

  const renderScreenText = () => {
    switch (pathname) {
      case '/master/supplier':
        return 'WBH071L11: Supplier Master';
      case '/master/material':
        return 'WBH071Z1: Material Master';
      case '/master/material/add':
        return 'WBH071Z1: Material Master';
      default:
        return '';
    }
  };

  useEffect(() => {
    // Do something here...
    setText(renderScreenText(pathname));
  }, [pathname]);


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [operation, setOperation] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOperation(event.target.value);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >

            <MenuIcon />
          </IconButton>



          <HeaderMaster textMenu={text}></HeaderMaster>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={null}

              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(true)}
            // onClose={() => alert('ss')}

            >
              {['GG', 'FF'].map((setting) => (
                <MenuItem key={setting} >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>

          </Box> */}

          <Typography variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>

            LOGO
            {/* 
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Operation Name</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={operation}
                label="Age"
              // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>STM</MenuItem>
                <MenuItem value={20}>TMT</MenuItem>

              </Select>
            </FormControl> */}
          </Typography>

        </Toolbar>



      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >


        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuList.map((items, index) => (
            <ListItem key={items.nameDisplay} disablePadding>
              <Link href={items.path} passHref legacyBehavior>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={items.nameDisplay} />
                </ListItemButton>
              </Link>

            </ListItem>

          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        {children}
      </Main>
    </Box>
  );
}