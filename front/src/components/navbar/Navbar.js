import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import { useRef } from "react";

const Navbar = () => {

  return (
    <header>
      <span>Vent Board</span>
      <nav>
        <ul className='nav-list'>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
        </ul>
      </nav>
    <div className='login'>
        <span><Link to="/login">Login</Link></span>
        <span><Link to="/create">Create</Link></span>
    </div>
  </header>
  )
}

export default Navbar