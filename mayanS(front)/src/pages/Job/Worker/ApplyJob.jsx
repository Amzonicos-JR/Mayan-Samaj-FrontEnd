import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

export const ApplyJob = () => {
  const buttonclr2 = "#db3444";
  const buttonclr4 = "#10cbf2";
  const buttonclr5 = "#19d982";
  const buttonStyle2 = {
    background: buttonclr2,
  };
  const buttonStyle4 = {
    background: buttonclr4,
  };
  const buttonStyle5 = {
    background: buttonclr5,
  };
  const [job, setJob] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    job: id,
    duration: "",
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

  const getJob = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/job/get/${id}`);
      if (data.job) {
        setJob(data.job);
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error to get job");
    }
  };

  const apply = async (e) => {
    try {
      e.preventDefault();
      console.log(form);
      const { data } = await axios.post(
        "http://localhost:3000/request/add",
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
      throw new Error(err.response.message || "Error to apply at job");
    }
  };

  useEffect(() => {
    getJob();
  }, []);

  return (
    <>
      <h2> Applicar a este trabajo </h2>
      <Link to={"/dash/job"}>
        <button className="button4 m-2 p-3" style={buttonStyle4}>
          <span>Regresar</span>
          <i></i>
        </button>
      </Link>
      <div>
        <div className="card abs-center" style={{ width: "80vw" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h5 className="card-text">Status: {job.status}</h5>
            </li>
          </ul>
          <div className="card-body">
            <h5 className="card-title">Description: {job.description}</h5>
            <h5 className="card-text">Location: {job.location}</h5>
          </div>
          {job.status === "Unassigned" ? (
            <>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="card-body">
                    <h5 className="card-text">
                      Contractor: {job.contractor.name}
                      {""}
                      {job.contractor.surname}
                    </h5>
                    <h5 className="card-text">Phone: {job.contractor.phone}</h5>
                    <h5 className="card-text">Email: {job.contractor.email}</h5>
                  </div>
                </li>
              </ul>
            </>
          ) : (
            <></>
          )}
          <div className="card-body">
            <h5 className="card-title">Price: Q.{job.price}.00</h5>
          </div>
        </div>
        <div className="card abs-center" style={{ width: "80vw" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="form-group">
                <label>Description</label>
                <input
                  onChange={handleChange}
                  id="inputDuration"
                  name="duration"
                  type="text"
                  className="form-control"
                  placeholder="Duration"
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="position-absolute  start-50 translate-middle-x">
          <Link to={"/dash/job"}>
            <button className="button2 m-2 p-3" style={buttonStyle2}>
              <span>Cancelar</span>
              <i></i>
            </button>
          </Link>
          <Link onClick={(e) => apply(e)}>
            <button className="button5 m-2 p-3" style={buttonStyle5}>
              <span>Aplicar</span>
              <i></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
