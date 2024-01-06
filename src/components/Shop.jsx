import React, { useState, useEffect } from 'react';
import Nav from './Nav.jsx';
import '../style/shop.css';
import Cart from '../components/Cart.jsx'
import CartRender from '../components/CartRender.jsx'


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const handleAdd = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);

        const updatedTotal = updatedCart.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price;
        }, 0);
        setTotal(updatedTotal);
    }

    const handleRemove = (productID) => {
        const productIndex = cart.findIndex((product) => product.id === productID);

        if (productIndex === -1) {
            return;
        }

        const updatedCart = [...cart];
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);

        const updatedTotal = total - cart[productIndex].price;
        setTotal(updatedTotal);
    };

    return (
        <div className='container'>
            <Nav />
            <div className='shop-container'>
                <div id='shop-header'>
                    <h1>Products</h1>
                </div>
                <div id='shop-product'>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <ul>{products.map(product => (
                            <li key={product.id}>
                                <div id='product'>
                                    <div id='product-image'><img src={product.image} /></div>
                                    <div id='product-title'><p><i>{product.title}</i></p></div>
                                    <div id='product-price'><p>Price: {product.price}</p></div>
                                    <div id='product-button'>
                                        <div><button onClick={() => handleAdd(product)}>Add</button></div>
                                        <div><button onClick={() => handleRemove(product.id)}>Remove</button></div>
                                    </div>
                                </div>
                            </li>
                        ))}</ul>
                    )}
                </div>
            </div>
            <CartRender total={total} cart={cart} />
        </div>
    );
};

export default Shop;