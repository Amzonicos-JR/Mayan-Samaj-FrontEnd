import React from 'react'
import { Link, Outlet } from "react-router-dom";

export const OficioPage = () => {

    return (
        <>
            <h1 className='className="container d-flex justify-content-center align-items-center h-100"'>
                Oficios Aplication
            </h1>
            <Outlet></Outlet>
        </>
    )
}