import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Contractor/GetJobUnassigned.css";
import Swal from 'sweetalert2'
export const GetMyJob = () => {
  const [activeButton, setActiveButton] = useState("button6");
  const cambio = (buttonId) => {
    setActiveButton(buttonId);
    console.log(buttonId);
  };

  return (
    <>
      <div className="">
        <h1> Get My Jobs</h1>
        <div className="d-flex d-flex justify-content-center">
          <Link to={"/dash/job"}>
            <button
              id="button6"
              onClick={() => cambio("button6")}
              className={`button6 m-2 ${
                activeButton === "button6" ? "active6" : ""
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Unassigned <i class="bi bi-card-list"></i>
            </button>
          </Link>
          <Link to={"inprogress"}>
            <button
              id="button7"
              onClick={() => cambio("button7")}
              className={`button7 m-2 ${
                activeButton === "button7" ? "active7" : ""
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              In Progess <i class="bi bi-hourglass-split"></i>
            </button>
          </Link>
          <Link to={"completed"}>
            <button
              id="button8"
              onClick={() => cambio("button8")}
              className={`button8 m-2 ${
                activeButton === "button8" ? "active8" : ""
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Compleded <i class="bi bi-check2-square"></i>
            </button>
          </Link>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
};
