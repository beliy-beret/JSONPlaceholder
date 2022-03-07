import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/usersSlice';
import { RootState } from '../../redux/STORE';
import { Container, Typography } from '@mui/material';
import UserCard from '../../components/UserCard/userCard';
import Preloader from '../../components/Preloader/Preloader';

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const { usersList, isLoading } = useSelector(
    (state: RootState) => state.users
  );
  return (
    <Container maxWidth={'md'}>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Typography
            component={'h2'}
            variant={'h3'}
            sx={{
              textAlign: 'center',
              textDecoration: 'underline',
              marginBottom: '1rem',
            }}
          >
            All users
          </Typography>
          {usersList.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default Users;