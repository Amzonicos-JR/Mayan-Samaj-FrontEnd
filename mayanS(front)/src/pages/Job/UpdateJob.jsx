import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
export const UpdateJob = () => {
  const buttonclr2 = "#db3444";
  const buttonclr5 = "#19d982";
  const buttonStyle2 = {
    background: buttonclr2,
  };
  const buttonStyle5 = {
    background: buttonclr5,
  };
  const { id } = useParams();
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

  const getJob = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/job/get/${id}`);
      if (data.job) {
        setForm(data.job);
        console.log(data.job);
        console.log(form);
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error to get job");
    }
  };

  const updateJob = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.put(
        `http://localhost:3000/job/update/${id}`,
        form,
        { headers: headers }
      );
      if (data.message) {
        Swal.fire(data.message, '', 'success')
        // alert(data.message);
        navigate("/dash/job");
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error to updated job");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getJob();
  }, []);

  return (
    <>
      <form>
        <h2>Update a Job</h2>

        <div className="form-group">
          <label>Description</label>
          <input
            onChange={handleChange}
            id="inputDescription"
            name="description"
            type="text"
            className="form-control"
            defaultValue={form.description}
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
            value={`${form.price}`}
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
            defaultValue={form.location}
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
            defaultValue={form.oficios}
          />
        </div>

        <button
          onClick={(e) => updateJob(e)}
          type="button"
          className="button5 m-2 p-3 btn-lg btn-block"
          style={buttonStyle5}
        >
          <span>Actualizar</span>
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
