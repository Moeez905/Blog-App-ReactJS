import Post from '../post/Post';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../actions/blogPosts';
import "./posts.css"
import { useEffect } from 'react';
export default function Posts() {
 const dispatch = useDispatch();
  const data = useSelector((state) => state.blogPosts.posts);
const trimmedData = data.slice(0,6)
  useEffect(() => {
    dispatch(fetchPosts()); // To get data from API
    console.log('I am executed')
  }, []);


  useEffect(()=>{
    console.log(data)
  },[data])

  return (
    <div className='posts'>
      {
        trimmedData.map((post) => {
          return <Post post={post} />
          
        })
      }
{/* <Post/> */}

    </div>
  )
}
