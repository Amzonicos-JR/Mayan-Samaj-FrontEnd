import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'
export const UpdateOficio = () => {
  const [oficio, setOficio] = useState({}); // Cambio el estado inicial a null
  const navigate = useNavigate();
  const { _id } = useParams();

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }

  const getOficios = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/oficio/get/${_id}`, { headers: headers });
      if (data) {
        console.log(data, 'o');
        setOficio(data.oficio); // Corrección: establece "oficios" con "data" directamente.
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || data, "Error getting oficios");
    }
  };


  const updateOficio = async (e) => {
    try {
      e.preventDefault();
      let updateO = {
        name: document.getElementById('inputName').value,
        description: document.getElementById('inputDescription').value
      }
      const { data } = await axios.put(`http://localhost:3000/oficio/update/${_id}`, updateO, { headers: headers })
      Swal.fire(data.message, '', 'success')
      getOficios();
      navigate('/dash/oficios')
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getOficios();
  }, []);

  // Si el estado "oficios" es null, muestra algún mensaje de carga o una animación.
  // if (oficios === null) {
  //   return <p>Cargando...</p>;
  // }

  return (
    <>
      <h1 className="container d-flex justify-content-center align-items-center h-100">
        Update Oficio
      </h1>
      <form className="m-5 text-center">
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputName" defaultValue={oficio?.name || ''} placeholder="Introduzca el nuevo Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputDescription" className="form-label">Description</label>
          <input type="text" className="form-control" id="inputDescription" defaultValue={oficio?.description || ''} placeholder="Introduzca la nueva description" />
        </div>
        <br></br>
        <button onClick={(e) => updateOficio(e)} className="btn btn-dark m-1">Update</button>
        <Link to='/dash/oficios'>
          <button className="btn btn-warning m-1">Cancel</button>
        </Link>
      </form>
    </>
  )
}