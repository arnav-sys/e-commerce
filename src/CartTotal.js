import React from 'react'
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import './CartTotal.css'

function CartTotal({ items }) {

    const getTotalPrice = () => {
        let total = 0;
        items.forEach((item) => {
            total += (parseFloat(item.product.price) * item.product.quantity)
        })
        return total;
    }

    return (
        <div className="CartTotal">
            <h3>
                Subtotal({items.length} items): 
                <span className="CartTotal-price">
                    <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
                </span>
            </h3>
            <button>
                <Link to="/payment">Proceed to checkout</Link>
            </button>
        </div>
    )
}

export default CartTotal
