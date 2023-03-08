import './BlogCard.css'
import { NavLink } from 'react-router-dom'
import parse from 'html-react-parser'
import { useState } from 'react';

export default function BlogCard({ i }) {

  if (i)
    return (
      <>
        <NavLink className="td" to={`/oneblog/${i.id}`}>
          <div className="blogcard">


            <div className="blogcard-div td">


              <h3 className='bloghead'>{i.title}</h3>

              <p className='username'>

                {parse(i.user)}

              </p>
              <p>


                {parse(i.content)}

              </p>
            </div>
            
              ...
              
            <button className='blogcardbtn'>Read More</button>
          </div>

        </NavLink>
      </>

    )
}