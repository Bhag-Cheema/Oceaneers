import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid d-flex justify-content-between">
                        <a className="navbar-brand" href="#">Navbar</a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="navbar-brand" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Why</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Events</a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Partners</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                </li>
                                <li>
                                    <button type="button" class="btn btn-primary">Join Us</button>
                                </li>
                                <li>
                                    <Link className="navbar-brand" to="/about">Login</Link>
                                </li>
                                <li>
                                    <i class="bi bi-search"></i>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
