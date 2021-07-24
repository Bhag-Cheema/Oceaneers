import React, { Component } from 'react';
import Navbar from './NavBar';



export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <Navbar />
                {/* Header image w text */}
                 <div className="card text-white border-0">
                    <img
                    id="header-image"
                    //src={}
                    alt="girl eating smoothie bowl"
                />
                <div className="card-img-overlay d-flex justify-content-center flex-column align-item-center text-center">
                    <h1 className="header">Partners and Friends</h1>
                    <h3 className="header-text">
                    Upon sign-up you'll receive a digital membership card and access
                    to our online membership area, providing you with unique discounts
                    offered by our wonderful brand community.
                    </h3>
                </div>
                {/* Join us button */}
                <div className="d-flex justify-content-center">
                    <button className="learn-how">Want to Join? Learn how.</button>
                </div>
                </div>
                


            </div>
        )
    }
}