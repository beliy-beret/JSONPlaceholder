import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {fetchUsers} from "../../redux/usersSlice";
import {RootState} from "../../redux/STORE";



const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const { usersList, isLoading } = useSelector((state: RootState) => state.users);
  return (
    <section className="user-list container">
      {isLoading ? (
        <h2>Loading ...</h2>
      ) : (
        <>
          <h2 className="user-list__title">All users</h2>
          {usersList.map((user) => (
            <div key={user.id} className="user-list__item">
              <h3>{user.name}</h3>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <Link to={`/${user.id}`}>go to profile</Link>
            </div>
          ))}
        </>
      )}
    </section>
  );
}

export default Users;