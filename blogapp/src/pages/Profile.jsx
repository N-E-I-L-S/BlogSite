import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import BlogCard from '../components/BlogCard'

export default function Profile() {

  const user = useParams()
  console.log(user)
  const [data, setData] = useState(null)

  const GetOneBlog = async () => {
    const res = await fetch(`http://localhost:3001/blogs/user/${user.user}`)
    const json = await res.json();
    console.log(json)
    setData(json)
  }

  useEffect(() => {
    GetOneBlog();
    console.log(data)
  }, [])
  if (data) {
    return (
      <>
        <div className="user-blogs">
        {data.map((i)=>{
          return <BlogCard i={i}/>
        })}
        </div>
        <NavLink to='/'>
          <div className="td">Back to Home</div>
        </NavLink>
      </>
    )
  
  
  }
}
