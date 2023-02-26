import './AllBlogs.css'
import BlogCard from '../components/BlogCard'
import { useEffect } from 'react';
import useBlog from '../context/BlogContext';

export default function AllBlogs() {

  const {blogs} = useBlog();  

  return (
    <div className="allpages">

    <div className="grid-col-3">
        {blogs.map((i)=>{
            return <div key={i} className='grid-item'> 
            {console.log(i)}
            <BlogCard  i={i}/>
            </div>
        })
            }
    </div>
    </div>
  )
}
