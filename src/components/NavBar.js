import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../imgs/logo.png";

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <header className="main-head">
                    <nav>
                        <img id="logo" src={logo} alt="logo" />
                        <ul>
                            <li><NavLink to="/" activeStyle={{ color: "red" }} className="active-link">Home</NavLink> </li>
                            <li><NavLink to="/why" activeStyle={{ color: "red" }} className="active-link">Why</NavLink></li>
                            <li><NavLink to="" activeStyle={{ color: "red" }} className="active-link">About Us</NavLink></li>
                            <li><NavLink to="/events" activeStyle={{ color: "red" }} className="active-link">Events</NavLink></li>
                            <li><NavLink to="/partners" activeStyle={{ color: "red" }} className="active-link">Partners</NavLink></li>
                            <li><NavLink to="" activeStyle={{ color: "red" }} className="active-link">Blog</NavLink></li>
                            <li><button className="join">Join Us</button></li>
                            <li><button className="login">Log In</button></li>
                            <li><i className="bi bi-search pointer"></i></li>

                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}
