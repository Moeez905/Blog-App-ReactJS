import "./details.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPosts } from "../../actions/blogPosts";




function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.blogPosts.posts);
  const post = posts.find((post) => post.id === parseInt(id));

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detailBox">
      <h2 className="Tdetails">Details of: {post.title}</h2>
      <p className="Bdetails">Body: {post.body}</p>
    </div>
  );
}

export default Details;
