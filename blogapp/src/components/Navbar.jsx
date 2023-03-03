import React from 'react'
import { NavLink } from 'react-router-dom'
import UserAuth from '../context/UserAuth'

export default function Navbar() {
    const {user} = UserAuth()
    if(user)
    return (
        <>
            <nav className="navbar justify-content-between">
                <NavLink to='/' className="navbar-brand td">BlogSite</NavLink>
                    <NavLink to={`/profile/${user.email}`}>
                        <button className="btn btn-outline-success my-2 my-sm-0">Profile</button>
                    </NavLink>
            </nav>
        </>
    )
}
