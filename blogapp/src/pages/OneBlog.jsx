import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import useBlog from '../context/BlogContext'
import './OneBlog.css'
import parse from 'html-react-parser'

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
      <div className="oneblog-page">
      <div className="oneblog-div td">
          <div className="head">

            <h3 className='bloghead'>{data.title}</h3>
            <p className='username'>
              written by: &nbsp; 
              {parse(data.user)}

            </p>
          </div>
            <p>
              {parse(data.content)}
            </p>
        </div>
      </div>
    </>
  )
}
}
