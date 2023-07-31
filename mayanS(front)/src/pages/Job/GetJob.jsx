import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const GetJob = () => {
  const [activeButton, setActiveButton] = useState("button6");
  const cambio = (buttonId) => {
    setActiveButton(buttonId);
    console.log(buttonId);
  };

  return (
    <>
      <div className="">
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
              Search <i class="bi bi-search"></i>
            </button>
          </Link>
          <Link to={"applied"}>
            <button
              id="button9"
              onClick={() => cambio("button9")}
              className={`button9 m-2 ${
                activeButton === "button9" ? "active9" : ""
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              On Hold <i class="bi bi-hourglass-split"></i>
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
              In Progress <i class="bi bi-hammer"></i>
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
              Completed <i class="bi bi-check2-square"></i>
            </button>
          </Link>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
};
