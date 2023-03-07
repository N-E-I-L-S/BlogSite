import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import { EditorState, convertFromHTML, ContentState, Modifier, convertToRaw  } from "draft-js";
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from "draft-convert";
import UserAuth from '../context/UserAuth';

export default function EditBlog() {
    const {user} = UserAuth()
    const blogid = useParams()
    const heading = useRef()
    const [data, setData] = useState(null)
    const [htmlbody, setHtmlBody] = useState(null)
    const [backhome, setBackHome] = useState("<a href='/' class='td'>Back to home </a>")
    const [bodywarn, setBodyWarn] = useState("") 
    const [headwarn, setHeadWarn] = useState("") 
    const [editorStatebody, setEditorStatebody] = useState(() =>
        EditorState.createWithContent(
            ContentState.createFromBlockArray(
              convertFromHTML('<p>initial body</p>')
            )
          )
    );

    //Fetching previous records
    const createState = (text) => {
        return EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(text)));
      };

    const GetOneBlog = async () => {
        const res = await fetch(`http://localhost:3001/blogs/id/${blogid.id}`)
        console.log(res)
        const json = await res.json();
        console.log(json)
        setEditorStatebody(createState(json.content))
        setData(json)
    }

    //Pushing Changed Body
    function getHTML() {
        setHtmlBody(convertToHTML(editorStatebody.getCurrentContent()))
        submithandle()
    }

    const submithandle = () => {
        setBackHome("Changes have been made! <br/> <a href='/' class='td'>Back to home </a>")
        setBodyWarn(null)
        setHeadWarn(null)
        PutRequest()
    }

    function PutRequest() {
        fetch(`http://localhost:3001/blogs/${blogid.id}`, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify({
                id: user.email + heading.current.value,
                title: heading.current.value,
                content: htmlbody,
                user: user.email
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
    }

    function makechanges() {
        const blocksbody = convertToRaw(editorStatebody.getCurrentContent()).blocks;
        const valuebody = blocksbody.map(blockbody => (!blockbody.text.trim() && '\n') || blockbody.text).join('\n');
        if (valuebody.length < 2) {
            setBodyWarn("Body Cannot be empty")
        }
        else if(heading.current.value.length <2 ){
            setHeadWarn("Heading Cannot be empty")
        }
        else
            getHTML()
    }

    useEffect(() => {
        let html = convertToHTML(editorStatebody.getCurrentContent());
        setHtmlBody(html);
    }, [editorStatebody]);

    useEffect(()=>{
        setData(data)
    },[data])
    
    useEffect(() => {
        GetOneBlog();
    }, [])
    if (data)
        return (
            <>
                <div className="addblog-page">

                    <h3>Add Heading For Your Blog Below</h3>
                    <input type="text" ref={heading} defaultValue={data.title}/>
                    <p>{headwarn}</p>
                    <h3>Add Your Blog Below</h3>
                    <div
                        style={{ border: "1px solid black", minHeight: "2rem", cursor: "text", marginTop: '2rem' }}
                    >
                    
                        <Editor
                        editorState={editorStatebody}
                        onEditorStateChange={setEditorStatebody}
                        wrapperClassName="wrapper-class"
                        />
                        
                    
                    </div>
                    <p>{bodywarn}</p>
                    <button type="submit" className="addblog-btn" onClick={makechanges}>Make Changes</button>
                    <div className="backtohome">
                        <p>{parse(backhome)}</p>
                    </div>
                </div>

            </>
        )
}
