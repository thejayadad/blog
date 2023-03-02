import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import { useRef } from "react";

const Navbar = () => {

  return (
    <header>
      <span>Vent Board</span>
      <nav>
        <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
        </ul>
      </nav>
    <div className='login'>
        <span>Login</span>
    </div>
  </header>
  )
}

export default Navbar