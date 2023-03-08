import './Navbar.css'
import { NavLink } from 'react-router-dom'
import UserAuth from '../context/UserAuth'
import CreateBtn from '../assets/createbtn.svg'

export default function Navbar() {
    const { user } = UserAuth()
    return (
        <>
            <ul className="sidebar">
                <li>
                    <NavLink to='/' className="logo">BlogSite</NavLink>
                </li>
                <li>
                    {
                        user ?
                            <NavLink to={`/profile/${user.email}`}>
                                <button className="btn btn-outline-success my-2 my-sm-0">Profile</button>
                            </NavLink>
                            :
                            <NavLink to={`/login`}>
                                <button className="btn btn-outline-success my-2 my-sm-0">Profile</button>
                            </NavLink>
                    }
                </li>
                <li>
                    <NavLink to='/addblog'>
                       
                            <img src={CreateBtn} alt="Add" />
                       
                    </NavLink>
                </li>
            </ul>
        </>
    )
}
