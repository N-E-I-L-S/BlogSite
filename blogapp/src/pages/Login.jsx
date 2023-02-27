import React ,{useRef} from 'react'
import { Navigate, NavLink } from 'react-router-dom';
import UserAuth from '../context/UserAuth';

export default function Login() {
    const username = useRef();
    const {user, setUser} = UserAuth();
    function handleSubmit(){
        setUser(username.current.value)
       
    }
  return (
   <>
   <input type="text" ref={username}/>
   <NavLink to='/addblog'>

   <button onClick={()=>handleSubmit}>Submt</button>
   </NavLink>
   </>
  )
}