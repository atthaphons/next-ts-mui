"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Header from "../template/mats.header";
import MatsMenu from "./mats.menu";
export default function Mats() {
  const [menuDisplayed, setMenuDisplayed] = React.useState<boolean>(false);
  const [renderScreen, setRenderScreen] = React.useState<string>("71L1");

  return (
    <Container maxWidth={false} disableGutters={true}>
      <MatsMenu
        renderScreen={renderScreen}
        setRenderScreen={setRenderScreen}
        menuDisplayed={menuDisplayed}
        setMenuDisplayed={setMenuDisplayed}
      />
      <Header renderScreen={renderScreen} setMenuDisplayed={setMenuDisplayed} />
    </Container>
  );
}
