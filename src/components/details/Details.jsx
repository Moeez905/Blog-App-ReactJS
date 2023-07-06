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
 
const comments = useSelector((state) => state.blogComments.comments);
const commentsOfThispost = comments.find((comment) => comment.postId === parseInt(id));


 const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments()); // To get data from API
  }, []);

  

  useEffect(() => {
    console.log(commentsOfThispost, "in details");},[comments]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detailBox">
      <h2 className="Tdetails">Details of : {post.title}</h2>
      <p className="Bdetails"> {post.body}</p>

<div class="comment-card">
  <div class="card-image">
      <img src="https://picsum.photos/100" alt="Comment Picture"/>
  </div>
  
    {commentsOfThispost && (
  <div class="card-content">
    <h3 class="name">{commentsOfThispost.name}</h3>
    <p class="email">{commentsOfThispost.email}</p>
    <p class="body">{commentsOfThispost.body}</p>
    
  </div>
    )}
</div>
    </div>
    
  );
}

export default Details;
