import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Index";

const CardReceipt = () => {

    const { id } = useContext(AuthContext);
    const [receipt, setReceipt] = useState([{}]);


    const getReceiptByUser = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:3000/receipt/get/${id}`,
            );
            if (data.receipt) {
                setReceipt(data.receipt);                
            }
        } catch (err) {
            console.log(err);
            throw new Error(err.response.message || "Error getting receipts");
        }
    }

    useEffect(() => {
        getReceiptByUser();
    }, []);

    return (
        <>        
        <br />
            <h1 className="text-center">¡Welcome to Receipst!</h1><br />
            <div className="container" style={{display: 'flex', justifyContent: 'center'}}>                             
                <div className="d-flex flex-wrap">
                    {receipt.map(({ _id, contractor, jobDescription, totalPay }, i) => (
                        <>
                            <div
                                key={i}
                                className="card border-info mb-3 d-inline-flex p-3 m-3"
                                style={{ maxWidth: "18rem", borderRadius: '20px'}}
                            >
                                <div className="card-header" style={{backgroundColor: 'rgb(230, 230, 63)', borderRadius: '30px'}}>Name: {contractor}</div>
                                <br />
                                <div className="card-body" style={{backgroundColor: 'rgb(113, 183, 230)'}}>
                                    <h5 className="card-title">Description Work: {jobDescription}</h5>
                                </div>
                                <div className="card-body" style={{backgroundColor: 'rgb(113, 183, 230)'}}>
                                    <h5 className="card-title">Total Pay: Q{totalPay}</h5>
                                </div><br />
                                <h6 className="text-center">mayansamaj.com ®</h6>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CardReceipt