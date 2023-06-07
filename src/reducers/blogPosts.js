// reducers/blogPosts.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  posts: [],
  error: null,
};

const blogPostsSlice = createSlice({
  name: 'blogPosts',
  initialState,
  reducers: {
    fetchPostsStart(state) {
      state.loading = true;
    },
    fetchPostsSuccess(state, action) {
      state.loading = false;
      state.posts = action.payload;
      state.error = null;
    },
    fetchPostsFailure(state, action) {
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    },
  },
});

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
} = blogPostsSlice.actions;

export default blogPostsSlice.reducer;
