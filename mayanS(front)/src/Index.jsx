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
 
import { EditUser } from './pages/Profile/EditUser';
import { GetProfile } from './pages/Profile/GetProfile';
import { ProfilePage } from './pages/Profile/ProfilePage';
import { EditEmail } from './pages/Profile/EditEmail';
import ReceiptPage from './pages/Receipt/ReceiptPage';
import EmailPage from './pages/EmailPage';

/* CONTRACTOR */
// ---# Job #---
import { JobPage } from './pages/Job/JobPage';
import { GetMyJob } from './pages/Job/GetMyJob';
import { AddJob } from './pages/Job/AddJob';
import { UpdateJob } from './pages/Job/UpdateJob';
import { RequestsJob } from './pages/Job/RequestsJob';
import { ViewMore } from './pages/Job/Worker/ViewMore';
import { GetJob } from './pages/Job/GetJob';
import { ApplyJob } from './pages/Job/Worker/ApplyJob';
import { GetJobUnassigned } from './pages/Job/Contractor/GetJobUnassigned';
import { GetJobInProgress } from './pages/Job/Contractor/GetJobInProgress';
import { GetJobCompleted } from './pages/Job/Contractor/GetJobCompleted';
import { GetJobNotAppleid } from './pages/Job/Worker/GetJobNotApplied';
import { GetJobApplied } from './pages/Job/Worker/GetJobApplied';
import { GetJobCompletedWorker } from './pages/Job/Worker/GetJobCompletedWorker';
import { GetJobInProgressWorker } from './pages/Job/Worker/GetJobInProgressWorker';
import { ViewMoreContractor } from './pages/Job/Contractor/ViewMoreContractor';

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
        },

    ]

    const CONTRACTORRoutes = [
        {
            path: 'profile',
            element: <ProfilePage/>,
            children: [
                {
                    path: '',
                    element: <GetProfile/>
                },
                {
                    path: 'editPassword',
                    element: <EditUser/>
                },
                {
                    path: 'editEmail',
                    element: <EditEmail/>
                }
            ]
        },
        {
            path: 'receipts',
            element: <ReceiptPage></ReceiptPage>
        },
        {
            path: 'email',
            element: <EmailPage></EmailPage>
        },
        {
            path: 'job',
            element: <JobPage></JobPage>,
            children: [
                {
                    path: '',
                    element: <GetMyJob></GetMyJob>,
                    children: [
                        {
                            path: '',
                            element: <GetJobUnassigned></GetJobUnassigned>
                        },
                        {
                            path: 'inprogress',
                            element: <GetJobInProgress></GetJobInProgress>
                        },
                        {
                            path: 'completed',
                            element: <GetJobCompleted></GetJobCompleted>
                        }
                    ]
                },
                {
                    path: 'add',
                    element: <AddJob></AddJob>
                },
                {
                    path: 'update/:id',
                    element: <UpdateJob></UpdateJob>
                },
                {
                    path: 'requests/:id',
                    element: <RequestsJob></RequestsJob>
                },
                {
                    path: 'viewmore/:id',
                    element: <ViewMoreContractor></ViewMoreContractor>
                }
            ]
        }        
    ]

    const WORKERRoutes = [
        {
            path: 'profile',
            element: <ProfilePage />,
            children: [
                {
                    path: '',
                    element: <GetProfile />
                },
                {
                    path: 'editPassword',
                    element: <EditUser />
                },
                {
                    path: 'editEmail',
                    element: <EditEmail/>
                }
            ]
        },
        {
            path: 'email',
            element: <EmailPage></EmailPage>
        },
        {
            path: 'job',
            element: <JobPage></JobPage>,
            children: [
                {
                    path: '',
                    element: <GetJob></GetJob>,
                    children: [
                        {
                            path: '',
                            element: <GetJobNotAppleid></GetJobNotAppleid>
                        },
                        {
                            path: 'applied',
                            element: <GetJobApplied></GetJobApplied>
                        },
                        {
                            path: 'inprogress',
                            element: <GetJobInProgressWorker></GetJobInProgressWorker>
                        },
                        {
                            path: 'completed',
                            element: <GetJobCompletedWorker></GetJobCompletedWorker>
                        }                        
                    ]
                },
                {
                    path: 'viewmore/:id',
                    element: <ViewMore></ViewMore>
                },
                {
                    path: 'apply/:id',
                    element: <ApplyJob></ApplyJob>
                }
            ]
        }        
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
