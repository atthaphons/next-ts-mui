import { Box, AppBar, Toolbar, Grid, Chip, Select, MenuItem, Button } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PersonIcon from "@mui/icons-material/Person";
import React, { useEffect, useState } from "react";
import HeaderMenu from "./header-menu";
import { useSelector } from "react-redux";
import { userLoginSelector } from "@/app/store/slices/user.login.slice";
import { screenSelector } from "@/app/store/slices/screen.slice";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../language.selector";
export default function Header() {
  const usersLoginReducer = useSelector(userLoginSelector);
  const screenReducer = useSelector(screenSelector);
  const { t } = useTranslation();
  const [screenName, setScreenName] = useState(screenReducer.screenName)
  useEffect(() => {
    setScreenName(screenReducer.screenName)
  }, [screenReducer]);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs={1}>
              <Box textAlign="left">
                <HeaderMenu />
              </Box>
            </Grid>
            <Grid item xs={2} textAlign="left">
              {screenName}
            </Grid>
            <Grid item xs={2}>
              <Box textAlign="center">{t('operationPlant')}</Box>
            </Grid>
            {/* <Grid item xs={3}>
              {session ? (
                <Box textAlign="right">
                  <Chip
                    color="primary"
                    icon={<PersonIcon />}
                    label={session.user.name || session.user.email}
                  />
                  <Button onClick={() => signOut()}>{t('logout')}</Button>
                </Box>
              ) : (
                <>
                  <Button onClick={() => signIn('google')}>{t('loginWithGoogle')}</Button>
                  <Button onClick={() => signIn('credentials')}>{t('loginWithCredentials')}</Button>
                </>
              )}
            </Grid> */}
            <Grid item xs={2}>
              <Box textAlign="right">
                <LanguageSelector />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box textAlign="right">
                <Chip
                  color="primary"
                  icon={<ApartmentIcon />}
                  label={usersLoginReducer.userProfile.companyName}
                />
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box textAlign="right">
                <Chip
                  color="primary"
                  icon={<PersonIcon />}
                  label={usersLoginReducer.userProfile.userFullName}
                />
              </Box>

            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
