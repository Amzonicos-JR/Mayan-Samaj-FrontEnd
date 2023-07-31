import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Swal from 'sweetalert2'

export const EditEmail = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const { _id } = useParams();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }
    const getUser = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/user/getProfile`, { headers: headers })
            if (data.user) {
                console.log(data.user, 'xxx')
                setUser(data.user)
            }
        } catch (err) {
            console.log(err);
            throw new Error(err.response.message || data, "Error getting users");
        }

    };

    const updatedEmail = async (e) => {
        try {
            e.preventDefault();
            let email = document.getElementById("inputEmail").value;
            let password = document.getElementById("inputOldPassword").value;

            if (!email || !password) {
                Swal.fire('Please fill in all fields', '', 'warning')
                // alert("Por favor rellene todos los campos");
                return;
            }

            let updateEmail = {
                newEmail: document.getElementById('inputEmail').value,
                password: document.getElementById('inputOldPassword').value

            }
            const { data } = await axios.put(`http://localhost:3000/user/updateEmail`, updateEmail, { headers: headers })

            if (data.error) {
                Swal.fire(data.error, '', 'error')
                // alert(data.error);
                return;
            } else {
                getUser();
                Swal.fire(data.message, '', 'success')
                // alert(`${data.message}`)
                navigate('/dash/profile')
            }
        } catch (err) {
            console.error(err);
            alert(`Can't updated the password, verify`);
        }
    }

    useEffect(() => {
        getUser();
    }, [])
    return (
        <>
            <br></br>
            <h1 className='className="container d-flex justify-content-center align-items-center h-100"'>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>ㅤUpdate Emailㅤ<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
            </h1>
            <form className="m-5 text-center">
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">New Email</label>
                    <input type="text" className="form-control" id="inputEmail" placeholder="Enter your new email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputOldPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputOldPassword" placeholder="Enter your password to validate the change." />
                </div>
                <br></br>
                <button onClick={(e) => updatedEmail(e)} className="btn btn-dark m-1">Update</button>
                <Link to='/dash/profile'>
                    <button className="btn btn-warning m-1">Cancel</button>
                </Link>
            </form>
        </>
    )
}