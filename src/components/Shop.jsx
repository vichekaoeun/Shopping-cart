import React, { useState, useEffect } from 'react';
import Nav from './Nav.jsx';
import '../style/shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='container'>
            <Nav />
            <div className='shop-container'>
                <div id='shop-header'>
                    <h1>Products</h1>
                </div>
                <div id='shop-product'>
                    <ul>{products.map(product => (
                        <li key={product.id}>
                            <div>
                                <p>{product.title}</p>
                                <p>Price: {product.price}</p>
                            </div>
                        </li>
                    ))}</ul>
                </div>
            </div>
        </div>
    );
};

export default Shop;
