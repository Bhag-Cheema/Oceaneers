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
                            <li><NavLink to="/" activeClassName="active-link">Home</NavLink> </li>
                            <li><NavLink to="/why" activeClassName="active-link">Why</NavLink></li>
                            <li><NavLink to="" activeClassName="active-link">About Us</NavLink></li>
                            <li><NavLink to="/events" activeClassName="active-link">Events</NavLink></li>
                            <li><NavLink to="" activeClassName="active-link">Partners</NavLink></li>
                            <li><NavLink to="" activeClassName="active-link">Blog</NavLink></li>
                            <li><button className="join">Join Us</button></li>
                            <li><button className="login">Log In</button></li>
                            <li><i class="bi bi-search pointer"></i></li>

                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}
