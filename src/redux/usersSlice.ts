import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../API';
import { User } from '../AppTypes';

type InitState = {
  isLoading: boolean;
  error: string | undefined;
  usersList: User[] | [];
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

const initialState: InitState = {
  usersList: [],
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
  },
});

export default usersSlice.reducer;
