import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const GetJobNotAppleid = () => {
  const buttonclr4 = "#10cbf2";
  const buttonclr5 = "#19d982";
  const buttonStyle4 = {
    background: buttonclr4,
  };
  const buttonStyle5 = {
    background: buttonclr5,
  };
  const [jobs, setJobs] = useState([]);
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  const getMyJob = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/job/getnotapplied",
        {
          headers: headers,
        }
      );
      if (data.jobs) {
        setJobs(data.jobs);
        console.log(jobs);
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error to gettin my jobs");
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
                      <Link to={`apply/${_id}`}>
                        <button
                          className="button5 m-2 p-3"
                          style={buttonStyle5}
                        >
                          <span>Aplicar</span>
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
