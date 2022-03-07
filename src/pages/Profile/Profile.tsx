import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {fetchProfile} from "../../redux/usersSlice";
import {RootState} from "../../redux/STORE";
import Preloader from "../../components/Preloader/Preloader";
import {Container, Grid} from "@mui/material";
import UserAva from "../../components/UserAva/UserAva";
import UserInfo from "../../components/UserInfo/UserInfo";
import PostList from "../../components/PostList/PostList";

const Profile: React.FC = () => {
  const {id} = useParams();
  const userId = Number(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile(userId));
  }, [id, dispatch]);
  const { userProfile, isLoading } = useSelector((state: RootState) => state.users);
  return (
    <React.Fragment>
      {isLoading ? (
        <Preloader />
      ) : (
        <Container maxWidth={'lg'}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <UserAva />
            </Grid>
            <Grid item xs={8}>
              <UserInfo user={userProfile} />
              <PostList id={userId} />
            </Grid>
          </Grid>
        </Container>
      )}
    </React.Fragment>
  );
}

export default Profile;