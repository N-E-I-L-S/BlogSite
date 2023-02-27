import React, { useRef } from 'react'
import UserAuth from '../context/UserAuth';

export default function AddBlog() {
    const title = useRef();
    const content = useRef();
    const { user } = UserAuth();
    const submithandle = () => {
        PostRequest()
    }

    function PostRequest() {
        fetch("http://localhost:3001/blogs", {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                id: user + title.current.value,
                title: title.current.value,
                content: content.current.value,
                user: `${user}`
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
    }

    return (
        <>
            <div className="allpages">
                <form action="/">

                    <div className="add-head">
                        <h3>
                            <label htmlFor="">Heading: </label>
                        </h3>
                        <input required={true} ref={title} name="" id="" ></input>
                    </div>
                    <div className="add-body">
                        <h3>
                            <label htmlFor="">Body: </label>
                        </h3>
                        <input required={true} ref={content} name="" id=""  ></input>
                    </div>
                    <div className="btn-div">
                        <button type='submit' onClick={submithandle}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
