import "./details.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const posts = useSelector((state) => state.blogPosts.posts);
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detailBox">
      <h2 className="Tdetails">Details of : {post.title}</h2>
      <p className="Bdetails"> {post.body}</p>
    </div>
  );
}

export default Details;
