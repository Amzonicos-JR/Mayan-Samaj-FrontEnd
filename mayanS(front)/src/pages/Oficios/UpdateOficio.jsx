import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const UpdateOficio = () => {
  const [oficios, setOficios] = useState(null); // Cambio el estado inicial a null
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
        console.log(data, '1');
        setOficios(data); // Corrección: establece "oficios" con "data" directamente.
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
      getOficios();
      alert(`${data.message}`)
      navigate('/dash/oficios')
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getOficios();
  }, []);

  // Si el estado "oficios" es null, muestra algún mensaje de carga o una animación.
  if (oficios === null) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <h1 className="container d-flex justify-content-center align-items-center h-100">
        Update Oficio
      </h1>
      <form className="m-5 text-center">
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputName" defaultValue={oficios?.name || ''} placeholder="Introduzca el nuevo Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputDescription" className="form-label">Description</label>
          <input type="text" className="form-control" id="inputDescription" defaultValue={oficios?.description || ''} placeholder="Introduzca la nueva description" />
        </div>
        <br></br>
        <button onClick={(e) => updateOficio(e)} className="btn btn-success m-1">Update</button>
        <Link to='/dash/oficios'>
          <button className="btn btn-danger m-1">Cancel</button>
        </Link>
      </form>
    </>
  )
}