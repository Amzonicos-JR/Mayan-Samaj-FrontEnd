import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Swal from 'sweetalert2'

export const EditUser = () => {
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
                // console.log(data.user, 'xxx')
                setUser(data.user)
            }
        } catch (err) {
            console.log(err);
            throw new Error(err.response.message || data, "Error getting users");
        }
        
    };

    const updatedPassword = async (e) => {
        try {
            e.preventDefault();

            let oldPassword = document.getElementById("inputOldPassword").value;
            let newPassword = document.getElementById("inputPassword").value;

            if (!oldPassword || !newPassword) {
                Swal.fire('Please provide both old and new passwords', '', 'warning')
                return;
            }
            let updatePassword = {
                password: document.getElementById("inputOldPassword").value,
                newPassword: document.getElementById("inputPassword").value,
            };
            const { data } = await axios.put(
                `http://localhost:3000/user/updatePassword`,
                updatePassword,
                { headers: headers }
            );
            if (data.error) {
                Swal.fire(data.error, '', 'error')
            } else {
                getUser();
                Swal.fire(data.message, '', 'success')
                navigate("/dash/profile");
            }
        } catch (err) {
            console.error(err);
            Swal.fire(`Can't updated the password, verify`, '', 'error')
            // alert(`Can't updated the password, verify`);
        }
    };

    useEffect(() => {
        getUser();
    }, [])
    return (
        <>
            <br></br>
            <h1 className='className="container d-flex justify-content-center align-items-center h-100"'>
                <i class="bi bi-shield-lock"></i> Update Password <i class="bi bi-shield-lock"></i>
            </h1>
            <form className="m-5 text-center">
                <div className="mb-3">
                    <label htmlFor="inpurOldPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputOldPassword" placeholder="Enter your current password to validate the change" />
                </div>
                <div>
                    <label htmlFor="inputPassword" className="form-label">New Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Enter your new password" />
                </div>
                <br></br>
                <button onClick={(e) => updatedPassword(e)} className="btn btn-dark m-1">Update</button>
                <Link to='/dash/profile'>
                    <button className="btn btn-warning m-1">Cancel</button>
                </Link>
            </form>
        </>
    )
}