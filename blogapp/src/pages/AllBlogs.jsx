import './AllBlogs.css'
import BlogCard from '../components/BlogCard'
import { useEffect } from 'react';
import useBlog from '../context/BlogContext';
import { NavLink } from 'react-router-dom';

export default function AllBlogs() {

  const { blogs } = useBlog();

  return (
    <div className="allpages">
      <div className="allblogs-blogs">
        {
          blogs.map((i) => {
            return <div key={i.id}>
              <BlogCard i={i} />
            </div>
          })
        }
      </div>
    </div>
  )
}
