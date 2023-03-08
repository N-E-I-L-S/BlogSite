import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import EditBlogCard from '../components/EditBlogCard'
import UserAuth from '../context/UserAuth'
import './Profile.css'

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
      <div className="profile-page">
        <div className="profile-nav">

        <p className='profile-user'>Your Account: {user.email}</p>
        <NavLink to='/' className="signout">
          <button className='blogcardbtn td' onClick={logout}>Signout</button>
        </NavLink>
        </div>
        <div className="profile-blogs">
        <h3 className='profile-heading'>
          Your Blogs  
          </h3>
        {data.map((i)=>{
          return <EditBlogCard i={i}/>
        })
        
      }
        </div>
      </div>
      </>
    )
  
  
  }
}
