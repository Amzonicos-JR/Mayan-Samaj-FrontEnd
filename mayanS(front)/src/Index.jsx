import React, { useState, createContext, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/NotFound';
import { LoginPage } from './pages/LoginPage';
import App from './App'
import { DashboardPage } from './pages/DashboardPage/DashboardPage';
import { HomePage } from './pages/HomePage/HomePage';
import { NDash } from './pages/NDashBoard/NDash';

/* ADMINAM */

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
                    element: <HomePage/>
                },
                {
                    path: '/dash',
                    element: <DashboardPage></DashboardPage> 
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
