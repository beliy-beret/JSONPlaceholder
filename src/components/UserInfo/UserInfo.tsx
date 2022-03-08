import React from 'react';
import { User } from '../../AppTypes';
import { List, ListItem } from '@mui/material';

type Props = {
  user: Omit<User, 'name'>;
};

const UserInfo: React.FC<Props> = ({ user }) => {
  return (
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
  );
};

export default UserInfo;
