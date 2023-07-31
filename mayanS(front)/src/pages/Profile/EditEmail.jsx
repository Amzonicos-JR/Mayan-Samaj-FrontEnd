import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

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

            if(!email || !password){
                alert("Por favor rellene todos los campos");
                return;
            }

            let updateEmail = {
                newEmail: document.getElementById('inputEmail').value,
                password: document.getElementById('inputOldPassword').value

            }
            const { data } = await axios.put(`http://localhost:3000/user/updateEmail`, updateEmail, {headers: headers})
            
            if(data.error){
                alert(data.error);
                return;
            }else{
                getUser();
                alert(`${data.message}`)
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
            <h1 className='className="container d-flex justify-content-center align-items-center h-100"'>
                Update Email
            </h1>
            <form className="m-5 text-center">
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">New Email</label>
                    <input type="text" className="form-control" id="inputEmail" placeholder="Ingresa tu nuevo email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputOldPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputOldPassword" placeholder="Ingresa tu contraseña para validar el cambio" />
                </div>
                <br></br>
                <button onClick={(e) => updatedEmail(e)} className="btn btn-success m-1">Update</button>
                <Link to='/dash/profile'>
                    <button className="btn btn-danger m-1">Cancel</button>
                </Link>
            </form>
        </>
    )
}