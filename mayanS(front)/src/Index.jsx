import React, { useState, createContext, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/NotFound';
import { LoginPage } from './pages/LoginPage';
import App from './App'
import { DashboardPage } from './pages/DashboardPage/DashboardPage';
import { HomePage } from './pages/HomePage/HomePage';
import { NDash } from './pages/NDashBoard/NDash';
import { RegisterW } from './pages/Register/RegisterW';
import { RegisterC } from './pages/Register/RegisterC';

/* ADMINAM */
// ---# Users #---
import { UserPage } from './pages/Users/UserPage';
import { GetUser } from './pages/Users/GetUser';
import { UpdateUser } from './pages/Users/UpdateUser';
// --# Contractors #---
import { ContractorPage } from './pages/Contractors/ContractorPage';
import { GetContractor } from './pages/Contractors/GetContractor';
import { UpdateContractor } from './pages/Contractors/UpdateContractor';
//  --------------- Oficios ---------------
import { OficioPage } from './pages/Oficios/OficioPage';
import { AddOficio } from './pages/Oficios/AddOficio';
import { GetOficios } from './pages/Oficios/GetOficios';
import { UpdateOficio } from './pages/Oficios/UpdateOficio';
//  --------------- Payments ---------------
import { PaymentPage } from './pages/PaymentMethods/PaymentMethodPage';
import { AddPaymentMethod } from './pages/PaymentMethods/AddPaymentMethod';
import { GetPayments } from './pages/PaymentMethods/GetPaymentMethods';
import { UpdatePayment } from './pages/PaymentMethods/UpdatePaymentMethod'; 
 
/* CLIENT */

export const AuthContext = createContext();
export const Index = () => {
    const [role, setRole] = useState('')
    const [id, setId] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)

    const [dataUser, setDataUser] = useState({
        name: '',
        username: '',
        role: ''
    })

    const [isAdmin, setIsAdmin] = useState('ADMIN');

    useEffect(() => {
        let token = localStorage.getItem('token')
        let role = localStorage.getItem('role')
        let id = localStorage.getItem('_id')
        if (token) {
            setLoggedIn(true)
            setRole(role)
            setId(id)
        }
    }, [])

    const ADMINAMRoutes = [
        {
            path: 'user',
            element: <UserPage></UserPage>,
            children: [
                {
                    path: '',
                    element: <GetUser></GetUser>
                },
                {
                    path: 'updateuser/:_id',
                    element: <UpdateUser></UpdateUser>
                }
            ]
        },
        {
            path: 'contractor',
            element: <ContractorPage></ContractorPage>,
            children: [
                {
                    path: '',
                    element: <GetContractor></GetContractor>
                },
                {
                    path: 'updateC/:_id',
                    element: <UpdateContractor></UpdateContractor>
                }
            ]
        },
        {
            path: 'oficios',
            element: <OficioPage></OficioPage>,
            children: [
                {
                    path: '',
                    element: <GetOficios></GetOficios>
                },
                {
                    path: 'addoficio',
                    element: <AddOficio></AddOficio>
                },
                {
                    path: 'updateO/:_id',
                    element: <UpdateOficio></UpdateOficio>
                }
            ]
        },
        {
            path: 'payments',
            element: <PaymentPage></PaymentPage>,
            children: [
                {
                    path: '',
                    element: <GetPayments></GetPayments>
                },
                {
                    path: 'addpayment',
                    element: <AddPaymentMethod></AddPaymentMethod>
                },
                {
                    path: 'updateP/:_id',
                    element: <UpdatePayment></UpdatePayment>
                } 
            ]
        }
    ]

    const CONTRACTORRoutes = [
    ]

    const WORKERRoutes = [

    ]

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <NotFound />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: '/dash',
                    element: loggedIn ? <DashboardPage></DashboardPage> : <LoginPage></LoginPage>,
                    children: role === 'ADMINAM' ? ADMINAMRoutes :
                        role === 'CONTRACTOR' ? CONTRACTORRoutes :
                            WORKERRoutes
                },
                {
                    path: '/ndash',
                    element: loggedIn ? <NDash></NDash> : <LoginPage></LoginPage>,
                    children: role === 'ADMINAM' ? ADMINAMRoutes :
                        role === 'CONTRACTOR' ? CONTRACTORRoutes :
                            WORKERRoutes
                },
                {
                    path: '/login',
                    element: <LoginPage></LoginPage>

                },
                {
                    path: '/rw',
                    element: <RegisterW></RegisterW>
                },
                {
                    path: '/rc',
                    element: <RegisterC></RegisterC>
                }
            ]
        }
    ])
    return (
        <AuthContext.Provider value={{ isAdmin, loggedIn, setLoggedIn, dataUser, setDataUser, role, id }}>
            <RouterProvider router={routes}></RouterProvider>
        </AuthContext.Provider>
    )
}
