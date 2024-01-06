import React from 'react'
import '../style/cart.css'

const CartRender = ({ total, cart }) => {
    const handleClick = () => {
        alert('This does nothing, it is a fake store for educational purposes.')
    }

    return (
        <div className='container'>
            <div className='cart-container'>
                <div id='cart-content'>
                    <div><h1>Cart</h1></div>
                    <div>item: {cart ? cart.length : 0}</div>
                    <div>total: {total}</div>
                    <div>
                        <button onClick={handleClick}>
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartRender;