import React from 'react'
import { NavLink } from 'react-router-dom'
import UserAuth from '../context/UserAuth'

export default function Navbar() {
    const {user} = UserAuth()
    return (
        <>
            <nav className="navbar justify-content-between">
                <a className="navbar-brand">BlogSite</a>
                    <NavLink to={`/profile/${user}`}>
                        <button className="btn btn-outline-success my-2 my-sm-0">Profile</button>
                    </NavLink>
            </nav>
        </>
    )
}
