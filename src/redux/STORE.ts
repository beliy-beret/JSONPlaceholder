import { configureStore } from '@reduxjs/toolkit';
import users from './usersSlice';
import posts from './postsSlice';
import profile from './profileSlice';

const store = configureStore({
  reducer: {
    users,
    posts,
    profile,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
