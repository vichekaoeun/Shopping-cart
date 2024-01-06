import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../style/nav.css'

class Nav extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='nav-container'>
                <div id='nav-items'>
                    <div id='Home'>
                        <Link to='/'>Home</Link>
                    </div>
                    <div id='Shop'>
                        <Link to='/shop'>Shopping</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav;