import React from "react";
import { Outlet } from "react-router-dom";

export const JobPage = () => {
  return (
    <>
      <div className="ms-5 my-3">
        <h1>Jobs <i class="bi bi-card-checklist"></i></h1> 
      </div>
      <Outlet></Outlet>
    </>
  );
};
