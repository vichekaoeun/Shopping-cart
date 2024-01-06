import Nav from './Nav.jsx';
import { render } from 'react-dom';
import React, { Component, useState } from 'react'
import '../style/cart.css'
import Shop from '../components/Shop.jsx'
import { Link } from 'react-router-dom';

const CartRender = ({ total }) => {
    return (
        <div className='container'>
            <div className='cart-container'>
                <div id='cart-content'>
                    <div><h1>Cart</h1></div>
                    <div>item</div>
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