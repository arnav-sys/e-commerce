import React from 'react';
import { Link } from 'react-router-dom';
import "./Payment.css"

function Payment() {
    return (
        <div className="payment">
            <form className="address">
                <br/>
                <label>write your address</label>
                <br/>
                <input placeholder="Address 1"></input>
                <br/>
                <input placeholder="Address 2"></input>
                <br/>
            </form>
            <form className="Payment">
                <label>write your payment details</label>
                <br/>
                <div className="payment-top">
                <input placeholder="name on card"></input>
                <br/>
                <input placeholder="card number"></input>
                <br/>
                </div>
                <div className="payment-bottom">
                <input placeholder="expiry date"></input>
                <br/>
                <input placeholder="cvv"></input>
                </div>
            </form>
            <button><Link to="/payment-successful">buy now</Link></button>
        </div>
    )
}

export default Payment
