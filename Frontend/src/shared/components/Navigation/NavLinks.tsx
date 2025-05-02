import React from 'react'
import './NavLinks.css'
import { NavLink } from 'react-router-dom'

const NavLinks: React.FC= () => {
  return (
    <ul className='nav-links'>
        <li>
            <NavLink to='/'>All USERS</NavLink>
        </li>
        <li>
            <NavLink to='/u1/places'>MY PLACES</NavLink>
        </li>
        <li>
            <NavLink to='/places/new'>NEW PLACES</NavLink>
        </li>
        <li>
            <NavLink to='/auth'>AUTHENTICATE</NavLink>
        </li>

    </ul>
  )
}

export default NavLinks
