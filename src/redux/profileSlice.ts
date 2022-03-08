import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProfile } from '../API';
import { User } from '../AppTypes';

type InitState = {
  userProfile: User;
  isLoading: boolean;
  error: string | undefined;
};

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async function (userId: number) {
    try {
      return await getProfile(userId);
    } catch (e: any) {
      throw Error(e.message);
    }
  }
);

const initialState: InitState = {
  userProfile: {
    id: null,
    name: '',
    username: '',
    email: '',
    website: '',
    phone: '',
    company: {
      name: '',
      bs: '',
      catchPhrase: '',
    },
    address: {
      geo: {
        lng: '',
        lat: '',
      },
      zipcode: '',
      suite: '',
      street: '',
      city: '',
    },
  },
  isLoading: false,
  error: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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

export default profileSlice.reducer;
