import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
export const GetJobInProgressWorker = () => {
  const buttonclr2 = "#db3444";
  const buttonclr4 = "#10cbf2";
  const buttonStyle2 = {
    background: buttonclr2,
  };
  const buttonStyle4 = {
    background: buttonclr4,
  };
  const [jobs, setJobs] = useState([]);
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };
  const getMyJob = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/job/getinprogress",
        {
          headers: headers,
        }
      );
      if (data.jobs) {
        setJobs(data.jobs);
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error to gettin my jobs");
    }
  };

  const deleteRequest = async (_id) => {
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
            `http://localhost:3000/request/delete/${_id}`,
            { headers: headers }
          );
          Swal.fire(
            'Canceled!',
            'Successfully',
            'success'
          )

          getMyJob();
        }
      })

      // let confirmDelete = confirm(`Are you sure to delete this request ${_id}`);
      // if (confirmDelete) {
      //   const { data } = await axios.delete(
      //     `http://localhost:3000/request/delete/${_id}`,
      //     { headers: headers }
      //   );
      //   if (data.message) {
      //     alert(data.message);
      //     getMyJob();
      //   }
      // }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error to deleted request");
    }
  };

  useEffect(() => {
    getMyJob();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center d-flex flex-wrap m-4">
        {jobs.map(
          ({ _id, contractor, description, price, location, status }, i) => (
            <>
              {jobs.length === 0 ? (
                <>
                  <h1> No tienes trabajos completados</h1>
                </>
              ) : (
                <>
                  <div
                    key={i}
                    className="card mb-3 d-inline-flex p-3 m-3 hover"
                    style={{ maxWidth: "18rem" }}
                  >
                    <div className="card-header">{description}</div>
                    <div className="card-body">
                      <h5 className="card-title">Location: {location}</h5>
                      <h5 className="card-title">Status: {status}</h5>
                    </div>

                    <ul className="list-group list-group-flush">
                      <li className="list-group">
                        <div className="card-body">
                          <h5 className="card-title">
                            Contractor: {contractor.name} {contractor.surname}
                          </h5>
                          <h5 className="card-text">
                            Phone: {contractor.phone}
                          </h5>
                          <h5 className="card-text">
                            Email: {contractor.email}
                          </h5>
                        </div>
                      </li>
                    </ul>
                    <div className="card-body">
                      <h5 className="card-title">Pago: Q.{price}.00</h5>
                    </div>
                    <div className="card-body">
                      <Link to={`/dash/job/viewmore/${_id}`}>
                        <button
                          className="button4 m-2 p-3"
                          style={buttonStyle4}
                        >
                          <span>View More</span>
                          <i></i>
                        </button>
                      </Link>
                      <Link onClick={() => deleteRequest(_id)}>
                        <button
                          className="button2 m-2 p-3"
                          style={buttonStyle2}
                        >
                          <span>Cancelar</span>
                          <i></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </>
          )
        )}
      </div>
    </>
  );
};
