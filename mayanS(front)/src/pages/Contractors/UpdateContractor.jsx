import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Swal from 'sweetalert2'
export const UpdateContractor = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const { _id } = useParams();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }
    const getC = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3000/user/getAccount/${_id}`, { headers: headers })
            if (data) {
                console.log(data, '1')
                setUser(data.user)
            }

        } catch (err) {
            console.log(err);
            throw new Error(err.response.message || data, "Error getting user");
        }

    };

    const updateC = async (e) => {
        try {
            e.preventDefault();
            let userUp = {
                name: document.getElementById('inputN').value,
                surname: document.getElementById('inputS').value
            }
            const { data } = await axios.put(`http://localhost:3000/user/update/${_id}`, userUp, { headers: headers })
            // console.log(user, 'userss')
            Swal.fire(data.message, '', 'success')
            getC();
            navigate('/dash/contractor')
            // alert(`${data.message}`)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getC();
    }, [])
    return (
        <>
            <h1 className='className="container d-flex justify-content-center align-items-center h-100"'>
                Update Worker
            </h1>
            <form className="m-5 text-center">
                <div className="mb-3">
                    <label htmlFor="inputN" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputN" defaultValue={user.name} />
                </div>
                <div>
                    <label htmlFor="inputS" className="form-label">Surname</label>
                    <input type="text" className="form-control" id="inputS" defaultValue={user.surname} />
                </div>
                <br></br>
                <button onClick={(e) => updateC(e)} className="btn btn-dark m-1">Update</button>
                <Link to='/dash/contractor'>
                    <button className="btn btn-warning m-1">Cancel</button>
                </Link>
            </form>
        </>
    )
}