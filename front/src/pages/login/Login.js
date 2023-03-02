import React from 'react'
import "./login.css"
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <main>
    <div className='register-box'>
        <h3 className='register-text'>Welcome Back!</h3>
        <form>
        <input className='register-input' type="email" placeholder="Email" required />
        <input className='register-input' type="password" placeholder="Password"  required />
        <input className='register-input' type="text" placeholder="Username"  required />
        <button className='register-submit' type="submit">Login</button>
        <span>Opps need to join?</span><Link to="/register">Register</Link>
        </form>
    </div>
</main>
  )
}

export default Login