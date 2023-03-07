import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import useBlog from '../context/BlogContext'

export default function OneBlog() {
  const blogId = useParams()

  const [data, setData] = useState(null)

  // const {GetOneBlog} = useBlog()
  const GetOneBlog = async () => {
  const res = await fetch(`http://localhost:3001/blogs/id/${blogId.id}`)
  console.log(res)
  const json = await res.json();
  console.log(json)
  setData(json)
  }

 useEffect(()=>{
  GetOneBlog()
 },[])
  if(data )
  {
    return (
      <>
    <BlogCard i={data}/>
    <NavLink to='/'>
    <div className="td">Back to Home</div>
    </NavLink>
    </>
  )
}
}
