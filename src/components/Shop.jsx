import { Component } from 'react';
import { render } from 'react-dom';
import Nav from './Nav.jsx';

class Shop extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div>
                    <div className='nav-container'>
                        <Nav />
                    </div>
                    <div className='shop-container'>
                        <div id='shop-header'>Products</div>
                        <div id='shop-product'>
                            <div>Scarf</div>
                            <div>Gloves</div>
                            <div>Beanie</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Shop;