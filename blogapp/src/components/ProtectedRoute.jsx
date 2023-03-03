import React from 'react'
import {Navigate} from "react-router-dom"
import UserAuth from '../context/UserAuth';
function ProtectedRoute(props) {
    const {user} = UserAuth();
    console.log(user)
    if(user)
    return props.page
    return <Navigate to ='/login'/>
}

export default ProtectedRoute