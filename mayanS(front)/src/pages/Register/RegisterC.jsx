import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const RegisterC = () => {
    const navigate = useNavigate()
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

    const registerC = async (e) => {
        try {
            e.preventDefault();
            let user = {
                name: document.getElementById('iName').value,
                surname: document.getElementById('iSurname').value,
                phone: document.getElementById('iPhone').value,
                email: document.getElementById('iEmail').value,
                password: document.getElementById('iPassword').value
            }
            const { data } = await axios.post('http://localhost:3000/user/registerC', user, { headers: headers })
            alert(`${data.message}`)
            clear();
            navigate('/login')
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    const clear = async () => {
        try {
            document.getElementById('iName').value = '',
                document.getElementById('iSurname').value = '',
                document.getElementById('iPhone').value = '',
                document.getElementById('iEmail').value = '',
                document.getElementById('iPassword').value = ''
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
            <section className="d-flex justify-content-center align-items-center" style={{ margin: "40px" }}>
                <div className="card shadow col-xs-12 col-sm-6 col-md-6 col-lg-4   p-4">
                    <div className="mb-4 d-flex justify-content-start align-items-center">
                        <h4> <i className="bi bi-person-square"></i> &nbsp; Register Contractor</h4>
                    </div>
                    <div className="mb-1">
                        <form id="contacto">
                            <div className="mb-4 ">
                                <label htmlFor="name"> <i className="bi bi-person-fill" ></i> Name</label>
                                <input type="text" className="form-control" id="iName" />
                                <div className="text-danger "></div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="surname"> <i className="bi bi-person-bounding-box"></i> Surname</label>
                                <input type="text" className="form-control" id="iSurname" />
                                <div className="text-danger"></div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone"><i className="bi bi-envelope-fill"></i> Phone</label>
                                <input type="number" className="form-control" id="iPhone" />
                                <div className="text-danger"></div>

                            </div>
                            <div className="mb-4">
                                <label htmlFor="email"> <i className="bi bi-person-fill"></i> Email</label>
                                <input type="text" className="form-control" id="iEmail" />
                                <div className="text-danger "></div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password"> <i className="bi bi-incognito"></i> Password</label>
                                <input type="password" className="form-control" id="iPassword" />
                                <div className="text-danger "></div>
                            </div>
                            <br></br>
                            <div className="mb-4 d-flex align-items-center">
                                <div className="mb-2">
                                    <a onClick={(e) => registerC(e)} className="col-11 btn btn-primary d-flex justify-content-between"
                                    >Save Data <i className="bi bi-bookmark-check"></i></a>
                                </div>

                                <div className="mb-2">
                                    <Link to='/login' className="col-11 btn btn-primary d-flex justify-content-between">
                                        Return to <i className="bi bi-box-arrow-left"></i></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section >
        </>
    )
}
