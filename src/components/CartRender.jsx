import React from 'react'
import '../style/cart.css'
import { Link } from 'react-router-dom';

const CartRender = ({ total, cart }) => {
    const totalPrice = { total };
    const item = { cart };
    const itemCount = item.length;
    return (
        <div className='container'>
            <div className='cart-container'>
                <div id='cart-content'>
                    <div><h1>Cart</h1></div>
                    <div>item: {cart ? cart.length : 0}</div>
                    <div>total: {total}</div>
                    <div>
                        <button>
                            <Link to='/cart' className='checkout-btn'>Checkout</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartRender;