import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProfile, getUsers } from '../API';
import { User } from '../AppTypes';

type InitState = {
  isLoading: boolean;
  error: string | undefined;
  usersList: User[] | [];
  userProfile: User;
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async function () {
    try {
      return await getUsers();
    } catch (e: any) {
      throw Error(e.message);
    }
  }
);

export const fetchProfile = createAsyncThunk(
  'users/fetchProfile',
  async function (userId: number) {
    try {
      return await getProfile(userId);
    } catch (e: any) {
      throw Error(e.message);
    }
  }
);

const initialState: InitState = {
  usersList: [],
  userProfile: {
    id: 0,
    email: '',
    phone: '',
    website: '',
    name: '',
    username: '',
    address: {
      city: '',
      street: '',
      suite: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    company: {
      name: '',
      bs: '',
      catchPhrase: '',
    },
  },
  isLoading: false,
  error: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state: InitState) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchUsers.fulfilled, (state: InitState, action) => {
      state.usersList = action.payload;
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(fetchUsers.rejected, (state: InitState, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
    builder.addCase(fetchProfile.pending, (state: InitState) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchProfile.fulfilled, (state: InitState, action) => {
      state.userProfile = action.payload[0];
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(fetchProfile.rejected, (state: InitState, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default usersSlice.reducer;
