import "./details.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchComments } from "../../actions/blogPosts";

function Details() {
  const { id } = useParams();
  const posts = useSelector((state) => state.blogPosts.posts);
  const post = posts.find((post) => post.id === parseInt(id));

/* const comments = useSelector((state) => state.blogComments.comments);
comments.find((comments) => commenst.id === parseInt(id)); */






 const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments()); // To get data from API
    console.log('I am executed too')
  }, []);








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
