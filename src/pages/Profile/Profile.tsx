import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProfile } from '../../redux/profileSlice';
import { RootState } from '../../redux/STORE';
import Preloader from '../../components/Preloader/Preloader';
import { Box, Container, Typography } from '@mui/material';
import UserInfo from '../../components/UserInfo/UserInfo';
import PostList from '../../components/PostList/PostList';
import { useStyle } from './profileStyle';

const Profile: React.FC = () => {
  const { id } = useParams();
  const userId = Number(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile(userId));
  }, [id, dispatch]);
  const { userProfile, isLoading } = useSelector(
    (state: RootState) => state.profile
  );
  const { classes } = useStyle();
  return (
    <React.Fragment>
      {isLoading ? (
        <Preloader />
      ) : (
        <Container maxWidth={'lg'} className={classes.profilePage}>
          <Box className={classes.ava}>
            <img
              src="https://avatars.mds.yandex.net/i?id=2a0000017a10350fa41388e643e00b6067d8-4116714-images-thumbs&n=13"
              alt="avatar"
            />
          </Box>
          <Typography component={'h2'} className={classes.name}>
            {userProfile.name}
          </Typography>
          <Box className={classes.info}>
            <UserInfo user={userProfile} />
          </Box>
          <Box className={classes.posts}>
            <PostList id={userId} />
          </Box>
        </Container>
      )}
    </React.Fragment>
  );
};

export default Profile;
