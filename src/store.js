// store.js
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import blogPostsReducer from './reducers/blogPosts';
import blogCommentsReducer from './reducers/blogComments';

const store = configureStore({
  reducer: {
    blogPosts: blogPostsReducer,
    blogComments: blogCommentsReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
