import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  comments: [],
  error: null,
};

const blogCommentsSlice = createSlice({
  name: 'blogComments',
  initialState,
  reducers: {
    fetchCommentsStart(state) {
      state.loading = true;
    },
    fetchCommentsSuccess(state, action) {
      state.loading = false;
      state.comments = action.payload;
      state.error = null;
    },
    fetchCommentsFailure(state, action) {
      state.loading = false;
      state.comments= [];
      state.error = action.payload;
    },
  },
});


export const {
  fetchCommentsStart,
  fetchCommentsSuccess,
  fetchCommentsFailure,
} = blogCommentsSlice.actions;

export default blogCommentsSlice.reducer;
