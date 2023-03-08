import React from 'react'
import { NavLink } from 'react-router-dom'
import parse from 'html-react-parser'

export default function EditBlogCard({ i }) {
  return (
    <>
      <div className="editblogcard">


        <div className="editblogcard-div td">


          <h3 className='bloghead'>{i.title}</h3>

          
          <p>


            {parse(i.content)}

          </p>
        </div>
        <NavLink className="td editbtn" to={`/editblog/${i.id}`}>
          <button className='blogcardbtn'>Edit</button>
        </NavLink>
      </div>
    </>

  )
}
