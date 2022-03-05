import React from 'react';
import {AppBar, Box, Container, Typography, useMediaQuery, useTheme} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const Header: React.FC = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('sm'))
  return(
    <AppBar position={"static"}>
      <Container maxWidth={"lg"} sx={{
        display: 'flex'
      }}>
        <Typography sx={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '1.7rem',
          fontWeight: "bold",
          minWidth: "fit-content"
        }}>{`{JSON}Placeholder`}</Typography>
        <Box component={'nav'} sx={{
          marginLeft: 'auto',
        }}>
          {match ? <Navbar /> : <MobileNavbar />}
        </Box>
      </Container>
    </AppBar>
  )
}

export default Header;