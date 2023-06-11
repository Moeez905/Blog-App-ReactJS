import { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } from '../reducers/blogPosts';

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
