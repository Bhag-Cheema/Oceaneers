import React, { Component } from 'react'

import Navbar from './NavBar';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="hero-section">
                    <div className="hero-section-text">
                        <h1>Header</h1>
                        <h5>subtitle about anything you like</h5>
                    </div>
                </div>
            </div>
        )
    }
}
