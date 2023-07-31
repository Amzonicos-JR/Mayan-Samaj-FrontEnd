import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
export const ViewMore = () => {
  const buttonclr2 = "#db3444";
  const buttonStyle2 = {
    background: buttonclr2,
  };
  const buttonclr5 = "#19d982";
  const buttonStyle5 = {
    background: buttonclr5,
  };
  const buttonclr4 = "#10cbf2";
  const buttonStyle4 = {
    background: buttonclr4,
  };
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigate = useNavigate();
  const [form, setForm] = useState({
    qualification: 0,
  });
  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
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

  const completed = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:3000/job/completed/${id}`,
        form,
        { headers: headers }
      );
      if (data.message) {
        navigate("/dash/job/inprogress");
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error to completed job");
    }
  };

  const star = (num) => {
    const button1 = document.getElementById("star1");
    const button2 = document.getElementById("star2");
    const button3 = document.getElementById("star3");
    const button4 = document.getElementById("star4");
    const button5 = document.getElementById("star5");

    const arr = [button1, button2, button3, button4, button5];

    for (let i = 0; i < arr.length; i++) {
      if (i < num) {
        arr[i].classList.remove("bi-star");
        arr[i].classList.remove("star");
        arr[i].classList.add("bi-star-fill");
        arr[i].classList.add("staractive");
        arr[i].classList.remove("animationactive");
      } else {
        arr[i].classList.remove("bi-star-fill");
        arr[i].classList.remove("staractive");
        arr[i].classList.add("bi-star");
        arr[i].classList.add("star");
        arr[i].classList.remove("animationactive");
      }
    }
    setForm({
      qualification: num,
    });
  };

  const animation = (num) => {
    const button1 = document.getElementById("star1");
    const button2 = document.getElementById("star2");
    const button3 = document.getElementById("star3");
    const button4 = document.getElementById("star4");
    const button5 = document.getElementById("star5");

    const arr = [button1, button2, button3, button4, button5];

    for (let i = 0; i < arr.length; i++) {
      if (i < num) {
        arr[i].classList.add("animationactive");
      } else {
        buttons[i].classList.remove("animationactive");
      }
    }
    setForm({
      qualification: num,
    });
  };

  const star2 = (qualification) => {
    const getFilledStars = () => {
      const filledStars = [];
      for (let i = 0; i < qualification; i++) {
        filledStars.push(
          <i key={i} className="bi bi-star-fill staractive2"></i>
        );
      }
      return filledStars;
    };
    const getEmptyStars = () => {
      const emptyStars = [];
      for (let i = qualification; i < 5; i++) {
        emptyStars.push(<i key={i} className="bi bi-star star2"></i>);
      }
      return emptyStars;
    };
    return (
      <>
        <div>
          {getFilledStars()}
          {getEmptyStars()}
        </div>
      </>
    );
  };

  useEffect(() => {
    getJob();
    star2();
  }, []);

  return (
    <>
      <div>
        {job.status === "InProgress" ? (
          <>
            <Link to={"/dash/job/inprogress"}>
              <button className="button4 ms-5 my-2 p-3" style={buttonStyle4}>
                <span>Regresar</span>
                <i></i>
              </button>
            </Link>
          </>
        ) : job.status === "Completed" ? (
          <>
            <Link to={"/dash/job/completed"}>
              <button className="button4 ms-5 my-2 p-3" style={buttonStyle4}>
                <span>Regresar</span>
                <i></i>
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/dash/job"}>
              <button className="button4 ms-5 my-2 p-3" style={buttonStyle4}>
                <span>Regresar</span>
                <i></i>
              </button>
            </Link>
          </>
        )}
        <div className="d-flex justify-content-center d-flex flex-wrap m-3">
          <h2> My Job</h2>
        </div>
      </div>

      <div className="d-flex justify-content-center d-flex flex-wrap">
        <div className="hover2" style={{ width: "80vw" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group">
              <h5 className="card-text">Status: {job.status}</h5>
            </li>
          </ul>
          <div className="card-body">
            <h5 className="card-title">Description: {job.description}</h5>
            <h5 className="card-text">Location: {job.location}</h5>
            <h5 className="card-text">Oficios: {job.oficios}</h5>
          </div>
          {job.status === "Unassigned" ? (
            <>
              <ul className="list-group list-group-flush">
                <li className="list-group">
                  <div className="card-body">
                    <h5 className="card-text">
                      Contractor: {job.contractor.name} {job.contractor.surname}
                    </h5>
                    <h5 className="card-text">Phone: {job.contractor.phone}</h5>
                    <h5 className="card-text">Email: {job.contractor.email}</h5>
                  </div>
                </li>
              </ul>
            </>
          ) : job.status === "InProgress" ? (
            <>
              <ul className="list-group list-group-flush">
                <li className="list-group">
                  <div className="card-body">
                    <h5 className="card-title">
                      Contractor: {job.contractor.name} {job.contractor.surname}
                    </h5>
                    <h5 className="card-text">Phone: {job.contractor.phone}</h5>
                    <h5 className="card-text">Email: {job.contractor.email}</h5>
                  </div>
                </li>
              </ul>
              <div className="card-body">
                <h5 className="card-title">Duration: {job.request.duration}</h5>
                <h5 className="card-text">
                  Status Request: {job.request.status}
                </h5>
              </div>
            </>
          ) : job.status === "Completed" ? (
            <>
              <ul className="list-group list-group-flush">
                <li className="list-group">
                  <div className="card-body">
                    <h5 className="card-text">
                      Contractor: {job.contractor.name} {job.contractor.surname}
                    </h5>
                    <h5 className="card-text">Phone: {job.contractor.phone}</h5>
                    <h5 className="card-text">Email: {job.contractor.email}</h5>
                  </div>
                </li>
              </ul>
              <div className="card-body">
                <h5 className="card-title">Duration: {job.request.duration}</h5>
                <h5 className="card-text">
                  Status Request: {job.request.status}
                </h5>
              </div>
            </>
          ) : job.status === "InProgress" &&
            localStorage.getItem("role") === "WORKER" ? (
            <>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="card-body">
                    <h5 className="card-text">
                      Contractor: {job.contractor.name} {job.contractor.surname}
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
          <ul className="list-group list-group-flush">
            {job.status === "Completed" ? (
              <>
                <div className="containerStar">{star2(job.qualification)}</div>
              </>
            ) : (
              <></>
            )}
          </ul>
          <div className="card-body">
            <h5 className="card-title">Pago: Q.{job.price}.00</h5>
          </div>
        </div>
        {job.status === "InProgress" &&
        localStorage.getItem("role") === "CONTRACTOR" ? (
          <>
            <h1 className="position-absolute  start-50 translate-middle-x">
              <div>
                <button
                  type="button"
                  className="button5 m-2 p-2 h4"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={buttonStyle5}
                >
                  <span>Finalizar</span>
                  <i></i>
                </button>
              </div>
            </h1>
          </>
        ) : job.status === "Unassigned" &&
          localStorage.getItem("role") === "WORKER" ? (
          <>
            {/*             <Link
              to={`/dash/job/apply/${job._id}`}
              className="position-absolute  start-50 translate-middle-x"
            >
              <button className="btn btn-success">Aplicar</button>
            </Link> */}
          </>
        ) : (
          <></>
        )}
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5>Que te parecio el trabajo ?</h5>
              <div className="containerStar">
                <i
                  id="star1"
                  className="bi bi-star star animation"
                  onMouseOver={() => star(1)}
                  onClick={() => animation(1)}
                ></i>
                <i
                  id="star2"
                  className="bi bi-star star animation"
                  onMouseOver={() => star(2)}
                  onClick={() => animation(2)}
                ></i>
                <i
                  id="star3"
                  className="bi bi-star star animation"
                  onMouseOver={() => star(3)}
                  onClick={() => animation(3)}
                ></i>
                <i
                  id="star4"
                  className="bi bi-star star animation"
                  onMouseOver={() => star(4)}
                  onClick={() => animation(4)}
                ></i>
                <i
                  id="star5"
                  className="bi bi-star star animation"
                  onMouseOver={() => star(5)}
                  onClick={() => animation(5)}
                ></i>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="button2 m-2 p-3"
                style={buttonStyle2}
                data-bs-dismiss="modal"
              >
                <span>Close</span>
                <i></i>
              </button>
              <button
                data-bs-dismiss="modal"
                onClick={() => completed()}
                type="button"
                className="button5 m-2 p-3"
                style={buttonStyle5}
              >
                <span>Finalizar</span>
                <i></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
