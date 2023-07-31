import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
export const RequestsJob = () => {
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
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };
  const [form, setForm] = useState({
    job: "",
  });

  const getRequests = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/request/getjob/${id}`
      );
      if (data.requests) {
        setRequests(data.requests);
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error to getting requests");
    }
  };

  const accepted = async (_id) => {
    try {
      let confirmRejected = confirm(
        `Are you sure to accepted this worker`
      );
      if (confirmRejected) {
        setForm({
          job: id,
        });
        const { data } = await axios.put(
          `http://localhost:3000/request/accept/${_id}`,
          form,
          { headers: headers }
        );
        if (data.message) {
          Swal.fire(data.message, '', 'success')
          // alert(data.message);
          navigate("/dash/job");
        }
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error to accepted request");
    }
  };

  const rejected = async (_id) => {
    try {
      let confirmRejected = confirm(
        `Are you sure to rejected this worker ${_id}`
      );
      if (confirmRejected) {
        setForm({
          job: id,
        });
        const { data } = await axios.put(
          `http://localhost:3000/request/rejected/${_id}`,
          form,
          { headers: headers }
        );
        if (data.message) {
          Swal.fire(data.message, '', 'success')
          // alert(data.message);
          getRequests();
        }
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error to rejected request");
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <>
      <h2>My request by Job</h2>
      <Link to={"/dash/job"}>
        <button className="button4 m-2 p-3" style={buttonStyle4}>
          <span>Regresar</span>
          <i></i>
        </button>
      </Link>
      {requests.length === 0 ? (
        <>
          <h3> You have not a requets</h3>
        </>
      ) : (
        <>
          {requests.map(({ _id, duration, worker, status }, i) => (
            <>
              <div
                className="card border-info mb-3  p-3 m-3 position-relative"
                style={{ maxWidth: "100%" }}
              >
                <div className="card-header"></div>
                <div className="card-body">
                  <h5 className="card-title">Duration: {duration}</h5>
                  <h5 className="card-title">
                    Name: {worker.name} {worker.surname}
                  </h5>
                  <h5 className="card-title">Email: {worker.email}</h5>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Status: {status}</h5>
                </div>
                <div className="card-body">
                  <div className="position-absolute bottom-0 end-0 m-3">
                    <Link onClick={() => accepted(_id)}>
                      <button className="button5 m-2 p-3" style={buttonStyle5}>
                        <span>Contratar</span>
                        <i></i>
                      </button>
                    </Link>
                    <Link onClick={() => rejected(_id)}>
                      <button className="button2 m-2 p-3" style={buttonStyle2}>
                        <span>Delete</span>
                        <i></i>
                      </button>
                    </Link>
                    <Link>
                      <button className="button4 m-2 p-3" style={buttonStyle4}>
                        <span>View More</span>
                        <i></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </>
      )}
    </>
  );
};
