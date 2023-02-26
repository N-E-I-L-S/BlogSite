import React, {useRef} from 'react'
import UserAuth from '../context/UserAuth';

export default function AddBlog() {
    const title = useRef(); 
    const content = useRef();
    const {user} = UserAuth();
    const submithandle= ()=>{
        PostRequest()
    }

    function PostRequest (){
    fetch("http://localhost:3001/blogs",{
    method : 'POST',
    mode : 'cors',
     body :JSON.stringify({
         id: user+title.current.value,
         title : title.current.value,
         content :  content.current.value,
     }),
    headers : {
     'Content-type' : 'application/json' 
     }})}

    return (
        <>
            <div className="allpages">
                <label htmlFor="">Heading: </label>
                <div className="add-head">
                    <input ref={title} name="" id="" ></input>
                </div>
                <label htmlFor="">Body: </label>
                <div className="add-body">
                    <input ref={content} name="" id=""  ></input>
                </div>
                <button onClick={submithandle}>Submit</button>
            </div>
        </>
    )
}
