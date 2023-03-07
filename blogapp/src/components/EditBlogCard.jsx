import React from 'react'
import { NavLink } from 'react-router-dom'
import parse from 'html-react-parser'

export default function EditBlogCard({i}) {
  return (
    <>
    <div className="grid-item td">
        <h3>{i.title}</h3>
         <br/>
            {parse(i.content)}
          <br/>
          <br/>
      <NavLink className="td" to={`/editblog/${i.id}`}>
          <button >Edit</button>
      </NavLink>
    </div>
    </>
    
  )
}
