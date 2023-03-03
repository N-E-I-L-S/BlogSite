import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BlogCard({i}) {
  return (
    <>
      <NavLink className="td" to={`/oneblog/${i.id}`}>
    <div className="grid-item td">
        <h3>{i.title}</h3>
         <br/>
            {i.content}
    </div>
      </NavLink>
    </>
    
  )
}
