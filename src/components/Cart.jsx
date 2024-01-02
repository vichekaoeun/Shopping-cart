import Nav from './Nav.jsx';
import { render } from 'react-dom';
import React, { Component, useState } from 'react'

class Cart extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='container'>
                <Nav />
                <div className='cart-container'>
                    <h1>Cart</h1>
                </div>
            </div>
        )
    }
}
export default Cart;