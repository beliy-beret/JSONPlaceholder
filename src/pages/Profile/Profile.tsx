import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {fetchProfile} from "../../redux/usersSlice";
import {RootState} from "../../redux/STORE";

const Profile: React.FC = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile(Number(id)));
  }, [id, dispatch]);
  const { userProfile, isLoading } = useSelector((state: RootState) => state.users);
  return (
    <>
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <section className="container">
          <div className="user">
            <img
              className="user__ava"
              src="https://avatars.mds.yandex.net/i?id=2a0000017a10350fa41388e643e00b6067d8-4116714-images-thumbs&n=13"
              alt="avatar"
            />
            <div className="wrapper">
              <h2 className="user__name">{userProfile.name}</h2>
              <ul className="user__info">
                <li>username: {userProfile.username}</li>
                <li>email: {userProfile.email}</li>
                <li>phone: {userProfile.phone}</li>
                <li>website: {userProfile.website}</li>
                <li>
                  address: {userProfile.address?.city},{" "}
                  {userProfile.address?.street},{userProfile.address?.suite}
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Profile;