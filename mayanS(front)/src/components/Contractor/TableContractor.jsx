import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Contractor } from "./Contractor";
import Swal from 'sweetalert2'
export const TableContractor = () => {
    const [contractors, setContractors] = useState([{}]);
    const headers = {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
    };


    const getContractors = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/user/getC", { headers: headers });
            if (data.contractors) {
                setContractors(data.contractors);
            }
        } catch (err) {
            console.log(err);
            throw new Error(err.response.message || data, "Error getting users");
        }
    };


    const deleteContractor = async (id) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "Action not reversible",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#000000',
                cancelButtonColor: '#dccd30 ',
                confirmButtonText: 'Yes, Im sure'
            }).then((result) => {
                if (result.isConfirmed) {
                    const { data } = axios.delete(`http://localhost:3000/user/delete/${id}`,
                        { headers: headers }
                    );
                    Swal.fire(
                        'Deleted!',
                        'Your User has been deleted forever!.',
                        'success'
                    )
                    getContractors();
                }
            })
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getContractors();
    }, []);

    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>

            <br />
            <table className="table table-striped">
                <thead>
                    <tr className="text-center">
                        <th><i class="bi bi-person-square"></i> Name</th>
                        <th><i class="bi bi-person-square"></i> Surname</th>
                        <th><i class="bi bi-telephone-fill"></i> Phone</th>
                        <th><i class="bi bi-envelope-fill"></i> Email</th>
                        <th><i class="bi bi-incognito"></i> Role</th>
                        <th><i class="bi bi-person-bounding-box"></i> Update</th>
                        <th><i class="bi bi-trash-fill"></i> Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {contractors.map(
                        ({ _id, name, surname, phone, email, role }, index) => {
                            return (
                                <tr className="text-center" key={index}>
                                    <Contractor
                                        name={name}
                                        surname={surname}
                                        phone={phone}
                                        email={email}
                                        role={role}
                                    ></Contractor>
                                    <td>
                                        <Link to={`/dash/contractor/updateC/${_id}`}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="dark"
                                                class="bi bi-person-fill-gear"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                                            </svg>
                                        </Link>
                                    </td>
                                    <td>
                                        <svg
                                            onClick={() => deleteContractor(_id)}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            class="bi bi-person-fill-dash text-danger"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                                        </svg>
                                    </td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
            </table>
        </>
    );
};