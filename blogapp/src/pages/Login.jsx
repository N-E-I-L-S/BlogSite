import React ,{useRef} from 'react'
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
   <button onClick={handleSubmit}>Submt</button>
   </>
  )
}
