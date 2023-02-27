import './AllBlogs.css'
import BlogCard from '../components/BlogCard'
import { useEffect } from 'react';
import useBlog from '../context/BlogContext';
import { NavLink } from 'react-router-dom';

export default function AllBlogs() {

  const { blogs } = useBlog();

  return (
    <div className="allpages">
      <div className="header-text">
        <h1>
          All Blogs
        </h1>
      </div>
      <div className="grid-col-3">
        {
          blogs.map((i) => {
            return <div key={i.id}>
              <BlogCard i={i} />
            </div>
          })
        }
      </div>
        <div className="add-sign">
          <NavLink to='/addblog'>
           <p className='td'>
             Add
            </p>
          </NavLink>
        </div>
    </div>
  )
}
