import Post from '../post/Post';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../actions/blogPosts';
import "./posts.css"
import { useEffect } from 'react';
export default function Posts() {
 const dispatch = useDispatch();
  const data = useSelector((state) => state.blogPosts.data);

  useEffect(() => {
    dispatch(fetchPosts());
    console.log('I am executed')
  }, []);


  useEffect(()=>{
    console.log(data)
  },[data])

  return (
    <div className='posts'>
<Post/>
<Post/>
<Post/>
<Post/>
<Post/>
<Post/>

    </div>
  )
}
