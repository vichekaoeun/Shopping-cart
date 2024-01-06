import React, { Component } from 'react'
import Nav from './Nav.jsx';
import '../style/home.css'

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='container'>
                <Nav />
                <div className='home-container'>
                    <div id='home-header'><h1>Welcome to the Jewelery shop</h1></div>
                    <div id='home-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Sapiente totam quas veniam iure qui quos illo esse. Reiciendis
                        dolorum autem animi sint id error veritatis cum, eligendi fuga amet nesciunt!</div>
                </div>
            </div>
        )
    }
}

export default Home;