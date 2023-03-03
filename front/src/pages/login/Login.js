import React from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import {request} from "../../utils/fetchApi"
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {login} from "../../app/authSlice"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async(e) => {
    e.preventDefault()

    if(email === '' || password === "") return

    try {
      const options = {
        'Content-Type': 'application/json'
      }


      const data = await request("/auth/login", 'POST', options, {email, password})
       console.log(data)
      dispatch(login(data))
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <main>
    <div className='register-box'>
        <h3 className='register-text'>Welcome Back!</h3>
        <form onSubmit={handleLogin}>
        <input className='register-input' type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input className='register-input' type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}  required />
        <button className='register-submit' type="submit">Login</button>
        <span>Opps need to join?</span><Link to="/register">Register</Link>
        </form>
    </div>
</main>
  )
}

export default Login