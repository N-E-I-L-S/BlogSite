import { useState, useRef, useEffect } from "react";
import { EditorState, convertToRaw, createEmpty } from "draft-js";
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from "draft-convert";
import { NavLink, Navigate } from "react-router-dom";
import parse from 'html-react-parser'
import UserAuth from "../context/UserAuth";
import "draft-js/dist/Draft.css";
import './DraftAdd.css'

export default function MyEditor() {
    const [editorStatebody, setEditorStatebody] = useState(() =>
        EditorState.createEmpty()
    );

    const [htmlbody, setHtmlBody] = useState(null)
    const [backhome, setBackHome] = useState("")
    const [bodywarn, setBodyWarn] = useState("") 
    const [headwarn, setHeadWarn] = useState("") 
    const heading = useRef()
    function getHTML() {
        setHtmlBody(convertToHTML(editorStatebody.getCurrentContent()))
        submithandle()
    }

    function print() {
        const blocksbody = convertToRaw(editorStatebody.getCurrentContent()).blocks;
        const valuebody = blocksbody.map(blockbody => (!blockbody.text.trim() && '\n') || blockbody.text).join('\n');
        if(valuebody.length <2 || heading.current.value.length <2)
        {

            if (valuebody.length < 2) {
                setBodyWarn("Body Cannot be empty")
            }
            else 
            setBodyWarn(null)
            if(heading.current.value.length <2 ){
                setHeadWarn("Title Cannot be empty")
            }
            else
            setHeadWarn(null)
        }
        else
            getHTML()
    }
    const { user } = UserAuth()
    const submithandle = () => {
        PostRequest()
        setBackHome("Your Blog has been Posted! <br/> <a href='/' class='td'>Back to home </a>")
        setBodyWarn(null)
        setHeadWarn(null)
    }

    function PostRequest() {
        fetch("http://localhost:3001/blogs", {
            method: 'POST',
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

    useEffect(() => {
        let html = convertToHTML(editorStatebody.getCurrentContent());
        setHtmlBody(html);
    }, [editorStatebody]);

    return (
        <>
            <div className="addblog-page">
                <div className="addblog-title">

                <h3>Title</h3>
                <input type="text" placeholder="Enter Your Title Here" ref={heading} />
                <p>{headwarn}</p>
                </div>
                <h3>Your Blog</h3>
                <div
                    style={{ border: "1px solid black", minHeight: "2rem", cursor: "text", marginTop: '1rem' }}
                >
                    <Editor
                        editorState={editorStatebody}
                        onEditorStateChange={setEditorStatebody}
                        wrapperClassName="wrapper-class"
                    />
                </div>
                <p>{bodywarn}</p>
                <button type="submit" className="addblog-btn" onClick={print}>POST</button>
                <div className="backtohome">
                    <p>{parse(backhome)}</p>
                </div>
            </div>
        </>
    );
}