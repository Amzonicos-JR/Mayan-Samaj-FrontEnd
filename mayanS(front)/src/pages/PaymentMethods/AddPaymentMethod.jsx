import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Index";
import Swal from 'sweetalert2'

export const AddPaymentMethod = () => {
    const { id } = useContext(AuthContext);
    const navigate = useNavigate()

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }

    const addPaymentMethod = async (e) => {
        try {
            e.preventDefault();
            let payment = {
                name: document.getElementById('inputName').value,
                paymentMethod_type: document.getElementById('inputPaymentMethod_type').value,
            }
            console.log(headers, '2')
            const { data } = await axios.post('http://localhost:3000/paymentMethod/add', payment, { headers: headers })
            Swal.fire(data.message, '', 'success')
            resetAdd()
            navigate('/dash/payments')
        } catch (err) {
            console.error(err)
            throw new Error("Error to saved Payment")
        }
    }


    const resetAdd = async () => {
        try {
            document.getElementById('inputName').value = '',
                document.getElementById('inputPaymentMethod_type').value = ''
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1 className="text-center">Agregar Oficios</h1>
            <form className="m-5 text-center">
                {/* <div className="mb-3">
                    <label htmlFor="inputUser" className="form-label">User</label>
                    <input type="Number" className="form-control" id="inputUser" required />
                </div> */}
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName" required placeholder="Enter the name of the new payment method" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPaymentMethod_type" className="form-label">Payment Method Type</label>
                    <input type="text" className="form-control" id="inputPaymentMethod_type" required placeholder="Enter a description of the new payment method"/>
                </div>
                <br></br>

                <button onClick={(e) => addPaymentMethod(e)} className="btn btn-dark m-1">ADD</button>

                <Link to="/dash/payments">
                    <button className="btn btn-warning m-1">Cancel</button>
                </Link>
            </form>
        </>
    )
}