import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Index'
import Swal from 'sweetalert2'
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
        Swal.fire({
          title: data.message,
          icon: 'success',
          timer: 10000,
          showConfirmButton: false
        })
        //Alert nativo alert(data.message)
        localStorage.setItem('token', data.token)
        localStorage.setItem('_id', data.userLogged._id)
        localStorage.setItem('role', data.userLogged.role)
        setDataUser(data.userLogged)
        // console.log(data, 'data', data.userLogged, 'ulogedd')
        setLoggedIn(true)
        navigate('/dash')
        window.location.reload();
      }
    } catch (err) {
      console.log(err)
      // alert(err.response?.data.message)
      Swal.fire('Error al loguearse', '', 'error')
      throw new Error('Error in login')
    }
  }

  const registerW = async (e) => {
    try {
      navigate('/rw')
      window.location.reload();
    } catch (error) {
      console.log(err)
      alert(err.response?.data.message)
      throw new Error('Error in register w')
    }
  }

  const registerC = async (e) => {
    try {
      navigate('/rc')
      window.location.reload();
    } catch (error) {
      console.log(err)
      alert(err.response?.data.message)
      throw new Error('Error in register c')
    }
  }


  return (
    <>
      <div className='container'>
        <form className='contactForm'>
          <div className='contentform '>
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
            <br></br>
          </div>
          {/* Modal para register */}
          <div className="">
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Register
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Select the role you want...</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-footer d-flex justify-content-center">
                    {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                    <a onClick={(e) => registerW(e)} type="button" className="btn btn-dark">Worker</a>
                    <a onClick={(e) => registerC(e)} type="button" className="btn btn-dark">Contractor</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}