import React, { Component, useState } from 'react'
import { render } from 'react-dom';
import Nav from './Nav.jsx'

class Home extends Component {
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
                    <div className='home-container'>
                        <div id='home-header'><h1>Header</h1></div>
                        <div id='home-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Sapiente totam quas veniam iure qui quos illo esse. Reiciendis
                            dolorum autem animi sint id error veritatis cum, eligendi fuga amet nesciunt!</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;