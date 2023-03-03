import React from 'react'
import "./register.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {request} from "../../utils/fetchApi"
import {register} from "../../app/authSlice"
import {useDispatch} from 'react-redux'


const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = async (e) => {
     e.preventDefault()

     if(username === '' || email === '' || password === '') return

    try {
      const options = {'Content-Type': 'application/json'}

      const data = await request('/auth/register', "POST", options, {username, email, password})
      dispatch(register(data))
      navigate("/")
    } catch (error) {
       console.error(error)
    }
  }

  return (
    <main>
        <div className='register-box'>
            <h3 className='register-text'>Ready to Join?</h3>
            <form onSubmit={handleRegister}>
            <input className='register-input' type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input className='register-input' type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}  required />
            <input className='register-input' type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}  required />
            <button className='register-submit' type="submit">Register</button>
            <span>Already a memeber?</span><Link to="/login">Login</Link>
            </form>
        </div>
    </main>
  )
}

export default Register