import React from 'react'
import { Link, Outlet } from "react-router-dom";

export const OficioPage = () => {

    return (
        <>
            <br></br>
            <h1 className='className="container d-flex justify-content-center align-items-center h-100"'>
                Jobs  <i class="bi bi-hand-index-thumb"></i>
            </h1>
            <br></br>
            <Outlet></Outlet>
        </>
    )
}