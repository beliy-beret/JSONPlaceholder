import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { useStyle } from './mobileBarStyle';

const MobileNavbar = () => {
  const [status, setStatus] = useState(false);

  function toggleStatus() {
    setStatus(!status);
  }

  const { classes } = useStyle();
  return (
    <React.Fragment>
      <IconButton onClick={toggleStatus}>
        <MenuIcon
          sx={{
            color: '#FFFFFF',
          }}
        />
      </IconButton>
      <Drawer
        anchor={'right'}
        open={status}
        onClose={toggleStatus}
        transitionDuration={500}
      >
        <List className={classes.navbarList}>
          <ListItem className={classes.navbarItem}>
            <NavLink to={'/'}>Home</NavLink>
          </ListItem>
          <ListItem className={classes.navbarItem}>
            <NavLink to={'users'}>Users</NavLink>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default MobileNavbar;