import { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } from '../reducers/blogPosts';
import { fetchCommentsStart, fetchCommentsSuccess, fetchCommentsFailure } from '../reducers/blogComments';

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch(fetchPostsStart());
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const top5Posts = data.slice(0, 6); // Keep only the first 5 elements

    dispatch(fetchPostsSuccess(top5Posts));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};

export const fetchComments = () => async (dispatch) => {
  try {
    dispatch(fetchCommentsStart());
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();

    dispatch(fetchCommentsSuccess(data));
  } catch (error) {
    dispatch(fetchCommentsFailure(error.message));
  }
};


