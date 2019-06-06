import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className = 'navbar'>
            <Link to = "/" className = 'navElement'> Home </Link> 
            <Link to = "/contact" className = 'navElement'> Contact </Link>
        </div>
    )
}