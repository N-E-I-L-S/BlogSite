import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import EditBlogCard from '../components/EditBlogCard'
import UserAuth from '../context/UserAuth'

export default function Profile() {

  const userParam = useParams()
  const [data, setData] = useState(null)

  const GetOneBlog = async () => {
    const res = await fetch(`http://localhost:3001/blogs/user/${userParam.user}`)
    const json = await res.json();
    console.log(json)
    setData(json)
  }

  const {logout, user} = UserAuth()

  useEffect(() => {
    GetOneBlog();
  }, [])
  if (data) {
    return (
      <>
        <p>{user.email}</p>
        <NavLink to='/' className="signout">
          <button onClick={logout}>Signout</button>
        </NavLink>

        <div className="user-blogs">
        <h3>
          Your Blogs  
          </h3>
        {data.map((i)=>{
          return <EditBlogCard i={i}/>
        })
        
      }
        </div>
        <NavLink to='/'>
          <div className="td">Back to Home</div>
        </NavLink>
      </>
    )
  
  
  }
}
