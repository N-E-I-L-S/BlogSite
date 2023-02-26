import React from 'react'

export default function BlogCard({i}) {
  return (
    <div >
        <h3>{i.title}</h3>
         <br/>
            {i.content}
        </div>
  )
}
