import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { User } from '../../AppTypes';

type Props = Pick<User, 'id' | 'username' | 'name' | 'email'>;

const UserCard: React.FC<Props> = ({ id, username, email, name }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'fit-content',
        padding: '1rem',
        marginBottom: '0.5rem',
      }}
    >
      <Typography component={'h2'} variant={'h5'}>
        <strong>Name:</strong> {name}
      </Typography>
      <Typography component={'h2'} variant={'h5'}>
        <strong>Username:</strong> {username}
      </Typography>
      <Typography component={'span'}>
        <strong>Email:</strong> {email}
      </Typography>
      <Link to={`/${id}`}>go to profile</Link>
    </Paper>
  );
};

export default UserCard;