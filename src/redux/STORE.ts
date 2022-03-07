import { configureStore } from '@reduxjs/toolkit';
import users from './usersSlice';
import posts from './postsSlice';

const store = configureStore({
  reducer: {
    users,
    posts,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
