import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Index";
import { Email } from "./Email";
import Swal from 'sweetalert2'

const TableEmail = () => {

    const { id } = useContext(AuthContext);
    const [email, setEmail] = useState([{}]);
    const [idEmail, setIdEmail] = useState();

    const getEmails = async () => {
        try {
            const { data } = await axios(`http://localhost:3000/email/get/${id}`)
            setEmail(data.email)
        } catch (err) {
            console.log(err)
        }
    }

    const seeEmail = async (idEmail) => {
        try {
            setIdEmail(idEmail)
            const { data } = await axios(`http://localhost:3000/email/see/${idEmail}`)
            setEmail(data.email)
        } catch (err) {
            console.log(err)
        }
    }

    const resetAdd = async () => {
        try {
            document.getElementById('inputSubject').value = '',
                document.getElementById('inputMessage').value = '',
                document.getElementById('inputForPerson').value = ''
        } catch (error) {
            console.log(error)
        }
    }

    const sendEmail = async () => {
        try {
            let formData = {
                subject: document.getElementById('inputSubject').value,
                message: document.getElementById('inputMessage').value,
                forPerson: document.getElementById('inputForPerson').value,
            }
            const { data } = await axios.post(`http://localhost:3000/email/send/${id}`, formData)
            getEmails()
            Swal.fire(data.message, '', 'success')
            resetAdd()
        } catch (error) {
            Swal.fire("Error sending email", '', 'error')
        }
    }

    useEffect(() => {
        getEmails();
    }, []);

    return (
        <>
            <br />
            <h1 className="text-center"><i class="bi bi-envelope-heart"></i> Email <i class="bi bi-envelope-heart"></i></h1>
            <br />
            <div className="text-center">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal2" type="button" class="btn btn-outline-primary">New Email</button>
            </div>
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Enter your email</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form action="">
                                <label htmlFor="inputSubject" className="form-label"><i class="bi bi-person-bounding-box"></i> Subject:</label>
                                <input placeholder="Enter Subject" type="text" className="form-control" id="inputSubject" required />
                                <br />
                                <label htmlFor="inputMessage" className="form-label"><i class="bi bi-chat-right-dots-fill"></i> Message:</label>
                                <input placeholder="Enter message" type="text" className="form-control" id="inputMessage" required />
                                <br />
                                <label htmlFor="inputForPerson" className="form-label"><i class="bi bi-people-fill"></i> For:</label>
                                <input placeholder="Enter email" type="email" className="form-control" id="inputForPerson" required />
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                            <button onClick={() => sendEmail()} type="button" class="btn btn-warning" data-bs-dismiss="modal">Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr className="text-center">
                        <th><i class="bi bi-person-bounding-box"></i> From</th>
                        <th><i class="bi bi-bookmark-star-fill"></i> Subject</th>
                        <th><i class="bi bi-calendar-week-fill"></i> Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        email.map(({ _id, from, subject, date }, index) => {
                            return (
                                <tr className="text-center" key={index}>
                                    <Email
                                        from={from}
                                        subject={subject}
                                        date={date}
                                    ></Email>
                                    <td>
                                        <svg onClick={() => seeEmail(_id)} data-bs-toggle="modal" data-bs-target="#exampleModal" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                        </svg>
                                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Mensaje de correo:</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <div className="d-flex flex-wrap">
                                                                {email.map(({ _id, from, subject, date, message, forPerson }, i) => (
                                                                    <>
                                                                        <div
                                                                            key={i}
                                                                            className="card border-info mb-3 d-inline-flex p-3 m-3"
                                                                            style={{ maxWidth: "18rem", borderRadius: '20px' }}
                                                                        >
                                                                            <div className="card-header" style={{ backgroundColor: 'rgb(230, 230, 63)', borderRadius: '30px' }}>From: {from}</div>
                                                                            <br />
                                                                            <div className="card-body" style={{ backgroundColor: 'rgb(113, 183, 230)' }}>
                                                                                <h5 className="card-title">Subject: {subject}</h5>
                                                                                <h5 className="card-title">Date: {date}</h5>
                                                                            </div>
                                                                            <div className="card-body" style={{ backgroundColor: 'rgb(113, 183, 230)' }}>
                                                                                <h5 className="card-title">Message: {message}</h5>
                                                                                <h5 className="card-title">For: {forPerson}</h5>
                                                                            </div><br />
                                                                            <h6 className="text-center">mayansamaj.com ®</h6>
                                                                        </div>
                                                                    </>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button onClick={() => getEmails()} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableEmail