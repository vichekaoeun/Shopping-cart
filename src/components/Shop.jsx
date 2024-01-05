import React, { useState, useEffect } from 'react';
import Nav from './Nav.jsx';
import '../style/shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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
                                        <div><button>Add</button></div>
                                        <div><button>Remove</button></div>
                                    </div>
                                </div>
                            </li>
                        ))}</ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shop;
