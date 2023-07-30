import React from 'react'
import { Link, Outlet } from "react-router-dom";

export const PaymentPage = () => {

    return (
        <>
            <br></br>
            <h1 className='className="container d-flex justify-content-center align-items-center h-100"'>
                Payments Method Aplication  <i class="bi bi-coin"></i>
            </h1>
            <Outlet></Outlet>
        </>
    )
}