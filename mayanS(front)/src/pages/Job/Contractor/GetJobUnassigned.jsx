import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./GetJobUnassigned.css";
import Swal from 'sweetalert2'

export const GetJobUnassigned = () => {
  const buttonclr2 = "#db3444";
  const buttonclr3 = '#f9c208'
  const buttonclr4 = '#10cbf2'
  const buttonclr5 = '#19d982'
  const [jobs, setJobs] = useState([{}]);
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  const buttonStyle2 = {
    background: buttonclr2,
  };
  const buttonStyle3 = {
    background: buttonclr3
  }
  const buttonStyle4 = {
    background: buttonclr4
  }
  const buttonStyle5 = {
    background: buttonclr5
  }

  const getMyJob = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/job/getmyjob", {
        headers: headers,
      });
      if (data.jobs) {
        setJobs(data.jobs);
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error to gettin my jobs");
    }
  };

  const deleteJob = async (id) => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "Action not reversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#000000',
        cancelButtonColor: '#dccd30 ',
        confirmButtonText: 'Yes, Im sure'
      }).then((result) => {
        if (result.isConfirmed) {
          const { data } = axios.delete(
            `http://localhost:3000/job/delete/${id}`,
            { headers: headers }
          );
          Swal.fire(
            'Deleted!',
            'Successfully!.',
            'success'
          )
          getMyJob();
        }
      })
      // let confirmDelete = confirm(`Are you sure to delete this product ${id}`);
      // if (confirmDelete) {
      //   const { data } = await axios.delete(
      //     `http://localhost:3000/job/delete/${id}`,
      //     { headers: headers }
      //   );
      //   getMyJob();
      //   alert(data.message);
      // }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error to deleted job");
    }
  };

  useEffect(() => {
    getMyJob();
  }, []);
  return (
    <>
      <Link to={`add`}>
        {/*         <button className="button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          +ADD
        </button> */}
        <button className="button2 m-4 p-3" style={buttonStyle2}>
          <span>+ADD</span>
          <i></i>
        </button>
      </Link>
      <div className="d-flex justify-content-center d-flex flex-wrap m-4">
        {jobs.map(({ _id, description, price, location, status }, i) => (
          <>
            {jobs.length === 0 ? (
              <>
                <h1> No tienes trabajos completados</h1>
              </>
            ) : (
              <>
                {status === "Unassigned" ? (
                  <>
                    <>
                      <div
                        key={i}
                        id={_id}
                        className="card mb-3 d-inline-flex p-3 m-3 hover"
                        style={{ maxWidth: "18rem" }}
                      >
                        <div className="card-header">{description}</div>
                        <div className="card-body">
                          <h5 className="card-title">Location: {location}</h5>
                          <h5 className="card-title">Status: {status}</h5>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">Price: ${price}</h5>
                        </div>
                        <div className="card-body">
                          <Link to={`update/${_id}`}>
                            <button
                              className="button3 m-2 p-3"
                              style={buttonStyle3}
                            >
                              <span>Update</span>
                              <i></i>
                            </button>
                          </Link>
                          <Link onClick={() => deleteJob(_id)}>
                            <button
                              className="button2 m-2 p-3"
                              style={buttonStyle2}
                            >
                              <span>Delete</span>
                              <i></i>
                            </button>
                          </Link>
                          <Link to={`requests/${_id}`}>
                            <button
                              className="button5 m-2 p-3"
                              style={buttonStyle5}
                            >
                              <span>Request</span>
                              <i></i>
                            </button>
                          </Link>
                          <Link to={`viewmore/${_id}`}>
                            <button
                              className="button4 m-2 p-3"
                              style={buttonStyle4}
                            >
                              <span>View More</span>
                              <i></i>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </>
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
          </>
        ))}
      </div>
    </>
  );
};
