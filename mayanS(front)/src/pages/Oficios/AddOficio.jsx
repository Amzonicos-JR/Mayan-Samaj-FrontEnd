import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Index";
import Swal from 'sweetalert2'
export const AddOficio = () => {
    const { id } = useContext(AuthContext);
    const navigate = useNavigate()

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

    const addOficio = async (e) => {
        try {
            e.preventDefault();
            let oficio = {
                name: document.getElementById('inputName').value,
                description: document.getElementById('inputDescription').value,
            }
            console.log(headers, '2')
            const { data } = await axios.post('http://localhost:3000/oficio/add', oficio, { headers: headers })
            Swal.fire(data.message, '', 'success')
            resetAdd()
            navigate('/dash/oficios')
        } catch (err) {
            console.error(err)
            throw new Error("Error to saved oficio")
        }
    }


    const resetAdd = async () => {
        try {
            document.getElementById('inputName').value = '',
                document.getElementById('inputDescription').value = ''
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            
            <h1 className="text-center"><i class="bi bi-briefcase-fill"></i> Add new Job <i class="bi bi-briefcase-fill"></i></h1>
            <form className="m-5 text-center">
                {/* <div className="mb-3">
                    <label htmlFor="inputUser" className="form-label">User</label>
                    <input type="Number" className="form-control" id="inputUser" required />
                </div> */}
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName" required placeholder="Enter the name of the new job" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputDescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="inputDescription" required placeholder="Enter a description of the new job" />
                </div>
                <br></br>

                <button onClick={(e) => addOficio(e)} className="btn btn-dark m-1">ADD</button>

                <Link to="/dash/oficios">
                    <button className="btn btn-warning m-1">Cancel</button>
                </Link>
            </form>
        </>
    )
}