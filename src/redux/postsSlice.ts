import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPosts } from '../API';
import { Post } from '../AppTypes';

type InitState = {
  isLoading: boolean;
  error: string | undefined;
  postList: Post[];
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async function (id: number) {
    try {
      return await getPosts(id);
    } catch (e: any) {
      throw Error(e.message);
    }
  }
);

const initialState: InitState = {
  postList: [],
  isLoading: false,
  error: '',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state: InitState) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchPosts.fulfilled, (state: InitState, action) => {
      state.postList = action.payload;
      state.isLoading = false;
      state.error = '';
    });
    builder.addCase(fetchPosts.rejected, (state: InitState, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export default postsSlice.reducer;
