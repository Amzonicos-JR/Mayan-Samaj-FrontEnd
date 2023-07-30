import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const UpdatePayment = () => {
  const [payments, setPatments] = useState(null); // Cambio el estado inicial a null
  const navigate = useNavigate();
  const { _id } = useParams();

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  const getPayments = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/paymentMethod/get/${_id}`, { headers: headers });
      if (data) {
        console.log(data, '1');
        setPatments(data); // Corrección: establece "oficios" con "data" directamente.
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || data, "Error getting payments");
    }
  };
  

  const updatePayment = async (e) => {
    try {
      e.preventDefault();
      let updateP = {
        name: document.getElementById('inputName').value,
        paymentMethod_type: document.getElementById('inputPaymentMethod_type').value
      }
      const { data } = await axios.put(`http://localhost:3000/paymentMethod/update/${_id}`, updateP, { headers: headers })
      getPayments();
      alert(`${data.message}`)
      navigate('/dash/payments')
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getPayments();
  }, []);

  // Si el estado "oficios" es null, muestra algún mensaje de carga o una animación.
  if (payments === null) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <h1 className="container d-flex justify-content-center align-items-center h-100">
        Update Payment
      </h1>
      <form className="m-5 text-center">
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputName" defaultValue={payments?.name || ''} placeholder="Introduzca el nuevo Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPaymentMethod_type" className="form-label">Payment Method Type</label>
          <input type="text" className="form-control" id="inputPaymentMethod_type" defaultValue={payments?.paymentMethod_type || ''} placeholder="Introduzca la nueva Payment" />
        </div>
        <br></br>
        <button onClick={(e) => updatePayment(e)} className="btn btn-success m-1">Update</button>
        <Link to='/dash/payments'>
          <button className="btn btn-danger m-1">Cancel</button>
        </Link>
      </form>
    </>
  )
}