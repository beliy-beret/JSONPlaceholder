import React from 'react';
import {List, ListItem} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useStyle} from "./navBarStyle";

const NavBar = () => {
  const {classes} = useStyle();
  return(
    <List className={classes.navbarList}>
      <ListItem className={classes.navbarItem}>
        <NavLink to="/">Home</NavLink>
      </ListItem>
      <ListItem className={classes.navbarItem}>
        <NavLink to="users">Users</NavLink>
      </ListItem>
    </List>
  )
}

export default NavBar;