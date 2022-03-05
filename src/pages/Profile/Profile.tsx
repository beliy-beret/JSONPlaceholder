import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {fetchProfile} from "../../redux/usersSlice";
import {RootState} from "../../redux/STORE";
import Preloader from "../../components/Preloader/Preloader";
import {Box, Container, List, ListItem, Typography} from "@mui/material";
import UserAva from "../../components/UserAva/UserAva";

const Profile: React.FC = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile(Number(id)));
  }, [id, dispatch]);
  const { userProfile, isLoading } = useSelector((state: RootState) => state.users);
  return (
    <React.Fragment>
      {isLoading ? (
        <Preloader />
      ) : (
        <Container maxWidth={'lg'}>
          <Box>
            <UserAva />
          </Box>
          <Box>
            <Box>
              <Typography variant={'h4'} component={'h2'} >{userProfile.name}</Typography>
              <List>
                <ListItem>username: {userProfile.username}</ListItem>
                <ListItem>email: {userProfile.email}</ListItem>
                <ListItem>phone: {userProfile.phone}</ListItem>
                <ListItem>website: {userProfile.website}</ListItem>
                <ListItem>
                  address: {userProfile.address?.city},{" "}
                  {userProfile.address?.street},{userProfile.address?.suite}
                </ListItem>
              </List>
            </Box>
          </Box>
        </Container>
      )}
    </React.Fragment>
  );
}

export default Profile;