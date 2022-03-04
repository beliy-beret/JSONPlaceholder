import React from "react";
import { Outlet } from "react-router-dom";
import {AppBar, Box, Container, Typography} from "@mui/material";
import NavBar from "../NavBar/NavBar";
import './appLayout.css';

const AppLayout: React.FC = () => {
  return (
    <>
      <AppBar position={"static"}>
        <Container className={"header"} maxWidth={"lg"}>
        <Typography className="header__title" variant={'h4'} component={'h1'}>{`{JSON} Placeholder`}</Typography>
        <Box className="header__menu" component={'nav'}>
          <NavBar />
        </Box>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}

export default AppLayout;