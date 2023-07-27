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
        navigate('/dash')
        window.location.reload();
      }
    } catch (err) {
      console.log(err)
      alert(err.response?.data.message)
      throw new Error('Error in login')
    }
  }

  const registerW = async (e) =>{
    try {
      navigate('/rw')
      window.location.reload();
    } catch (error) {
      console.log(err)
      alert(err.response?.data.message)
      throw new Error('Error in register w')
    }
  }

  const registerC = async (e) =>{
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
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">

              <div className="px-5 ms-xl-4">
                <br />
                <span className="h1 fw-bold mb-0 text-light">   mAYAN SAMAJ<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-bank" viewBox="0 0.3 16 16">
                  <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z" />
                </svg>
                </span>
              </div>
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                <form style={{ width: "23rem" }}>

                  <h3 className="fw-normal mb-3 pb-3 text-light" style={{ letterSpacing: "1px" }}>Log in</h3>

                  <div className="form-outline mb-4">
                    <input
                      type="text" id="loginUser" name='email' onChange={handleChange} placeholder='Username' className="form-control form-control-lg" />
                    <label className="form-label text-light" htmlFor="form2Example18">EMAIL</label>
                  </div>

                  <div className="form-outline mb-1">
                    <input
                      type="password" id="LoginPassword" name='password' onChange={handleChange} placeholder='Password'
                      className="form-control form-control-lg" />
                    <label className="form-label text-light" htmlFor="form2Example28">Password</label>
                  </div>

                  <div className="">
                    <button onClick={(e) => logIn(e)} type="button" className="btn btn-outline-dark m-1">Login</button>
                  </div>
                  {/* Modal para register */}
                  <div className="">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Register
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Selecciona el rol</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-footer d-flex justify-content-center">
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button onClick={(e) => registerW(e)} type="button" class="btn btn-primary">Worker</button>
                            <button onClick={(e) => registerC(e)}  type="button" class="btn btn-primary">Contractor</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </form>
              </div>

            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img src={bl}
                alt="Login image" className="w-100 vh-100" style={{ objectFit: "cover" }} />
            </div>

          </div>
        </div >
      </section >
    </>
  )
}