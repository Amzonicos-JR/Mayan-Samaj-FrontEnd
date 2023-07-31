import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
export const AddJob = () => {
  const buttonclr2 = "#db3444";
  const buttonclr5 = "#19d982";
  const buttonStyle2 = {
    background: buttonclr2,
  };
  const buttonStyle5 = {
    background: buttonclr5,
  };
  const navigate = useNavigate();
  const [form, setForm] = useState({
    description: "",
    price: 0,
    location: "",
    oficios: "",
  });
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addJob = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post("http://localhost:3000/job/add", form, {
        headers: headers,
      });
      if (data) {
        Swal.fire(data.message, '', 'success')
        // alert(data.message);
        navigate("/dash/job");
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error to saved job");
    }
  };

  return (
    <>
      <form>
        <h2>Create a Job</h2>

        <div className="form-group">
          <label>Description</label>
          <input
            onChange={handleChange}
            id="inputDescription"
            name="description"
            type="text"
            className="form-control"
            placeholder="Description"
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            onChange={handleChange}
            id="inputPrice"
            name="price"
            type="number"
            className="form-control"
            placeholder="Price"
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            onChange={handleChange}
            id="inputLocation"
            name="location"
            type="text"
            className="form-control"
            placeholder="Location"
          />
        </div>
        <div className="form-group">
          <label>Oficios</label>
          <input
            onChange={handleChange}
            id="inputOficios"
            name="oficios"
            type="text"
            className="form-control"
            placeholder="Oficios"
          />
        </div>

        <button
          onClick={(e) => addJob(e)}
          type="button"
          className="button5 m-2 p-3 btn-lg btn-block"
          style={buttonStyle5}
        >
          <span>Crear</span>
          <i></i>
        </button>

        <Link to={"/dash/job"}>
          <button className="button2 m-2 p-3" style={buttonStyle2}>
            <span>Cancelar</span>
            <i></i>
          </button>
        </Link>
      </form>
    </>
  );
};
