// store.js
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import blogPostsReducer from './reducers/blogPosts';

const store = configureStore({
  reducer: {
    blogPosts: blogPostsReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
