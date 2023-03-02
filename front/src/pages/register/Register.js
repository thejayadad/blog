import React from 'react'
import "./register.css"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <main>
        <div className='register-box'>
            <h3 className='register-text'>Ready to Join?</h3>
            <form>
            <input className='register-input' type="email" placeholder="Email" required />
            <input className='register-input' type="password" placeholder="Password"  required />
            <input className='register-input' type="text" placeholder="Username"  required />
            <button className='register-submit' type="submit">Register</button>
            <span>Already a memeber?</span><Link to="/login">Login</Link>
            </form>
        </div>
    </main>
  )
}

export default Register