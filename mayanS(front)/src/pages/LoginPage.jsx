import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Index'
import bl from '../assets/sb2.png'
import '../Login.css'


export const LoginPage = () => {
  const { loggedIn, setLoggedIn, setDataUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const logIn = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post('http://localhost:3000/user/login', form)
      console.log(data.user)
      if (data.message) {
        alert(data.message)
        localStorage.setItem('token', data.token)
        localStorage.setItem('_id', data.userLogged._id)
        localStorage.setItem('role', data.userLogged.role)
        setDataUser(data.userLogged)
        // console.log(data, 'data', data.userLogged, 'ulogedd')
        setLoggedIn(true)
        navigate('/ndash')
      }
    } catch (err) {
      console.log(err)
      alert(err.response?.data.message)
      throw new Error('Error in login')
    }
  }



  return (
    <>
      <div className='container'>
        <form className='contactForm'>
          <div className='contentform'>
            <h1>Login</h1>
            <div className='inputBox'>
              <label htmlFor="name">UserName</label>
              <input type="text" id="loginUser" name='email' onChange={handleChange} />
            </div>
            <div className='inputBox'>
              <label htmlFor="password">Password</label>
              <input type="password" id="LoginPassword" name='password' onChange={handleChange} />
            </div>

            <button onClick={(e) => logIn(e)} type="button">Login</button>
          </div>
        </form>
      </div>
    </>
  )
}