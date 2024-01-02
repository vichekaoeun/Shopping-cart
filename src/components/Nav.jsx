import React, { Component, useState } from 'react'
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import '../style/nav.css'

class Nav extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='nav-container'>
                <div id='Home'>
                    <Link to='/'>Home</Link>
                </div>
                <div id='Shop'>
                    <Link to='/shop'>Shopping</Link>
                </div>
                <div id='Cart'>
                    <Link to='/cart'>Cart</Link>
                </div>
            </div>
        )
    }
}
export default Nav;