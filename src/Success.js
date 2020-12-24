import React from 'react';
import "./Success.css";
import {Link} from "react-router-dom"

function Success() {
    return (
        <div>
            <h1>Success</h1>
            <h4>Congratulations your payment is accepted</h4>
            <button><Link to="/">Go shopping</Link></button>
        </div>
    )
}

export default Success
