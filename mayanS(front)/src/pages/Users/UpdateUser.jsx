import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export const UpdateUser = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const { _id } = useParams();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }
    const getUser = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/user/getAccount/${_id}`, { headers: headers })
            if (data) {
                console.log(data, 'a')
                setUser(data.user)
            }

        } catch (err) {
            console.log(err);
            throw new Error(err.response.message || data, "Error getting user");
        }

    };

    const updateUser = async (e) => {
        try {
            e.preventDefault();
            let userUp = {
                name: document.getElementById('inputName').value,
                surname: document.getElementById('inputSurname').value
                // phone: document.getElementById('inputPhone').value            
            }
            const { data } = await axios.put(`http://localhost:3000/user/update/${_id}`, userUp, { headers: headers })
            console.log(user, 'userss')
            getUser();
            alert(`${data.message}`)

            navigate('/dash/user')
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getUser();
    }, [])
    return (
        <>
            <h1 className='className="container d-flex justify-content-center align-items-center h-100"'>
                Update Worker
            </h1>
            <form className="m-5 text-center">
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName" defaultValue={user.name} />
                </div>
                <div>
                    <label htmlFor="inputSurname" className="form-label">Surname</label>
                    <input type="text" className="form-control" id="inputSurname" defaultValue={user.surname} />
                </div>
                <br></br>
                <button onClick={(e) => updateUser(e)} className="btn btn-dark m-1">Update</button>
                <Link to='/dash/user'>
                    <button className="btn btn-warning m-1">Cancel</button>
                </Link>
            </form>
        </>
    )
}