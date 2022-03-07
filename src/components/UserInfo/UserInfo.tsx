import React from 'react';
import { User } from '../../AppTypes';
import { Box, List, ListItem, Typography } from '@mui/material';

type Props = {
  user: User;
};

const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <Box>
      <Typography variant={'h4'} component={'h2'}>
        {user.name}
      </Typography>
      <List>
        <ListItem>username: {user.username}</ListItem>
        <ListItem>email: {user.email}</ListItem>
        <ListItem>phone: {user.phone}</ListItem>
        <ListItem>website: {user.website}</ListItem>
        <ListItem>
          address: {user.address?.city}, {user.address?.street},
          {user.address?.suite}
        </ListItem>
      </List>
    </Box>
  );
};

export default UserInfo;