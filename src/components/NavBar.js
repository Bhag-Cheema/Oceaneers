import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../imgs/logo.png";
import firebase from "../firebase/firebase";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  logout() {
    firebase.auth().signOut();
    this.props.history.push("/");
  }

  // handleClickedMenu = () => {
  //   this.setState({ clicked: !this.state.clicked });
  // };
  render() {
    const { user } = this.props;
    return (
      <div>

        {user ? <header className="main-head">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="m-2 image">
              <img src={logo} alt="Logo" height="10" />
            </div>
            <button
              className="navbar-toggler me-2"
              id="hamburger"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-2" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  {/* <a className="nav-link" href="">Home</a> */}
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/why">
                    Why
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/aboutus">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/events">
                    Events
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/partners">
                    Partners
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/joinus">
                    <button className="join">Join Us</button>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login">
                    <button className="login">Login</button>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <i className="bi bi-search pointer-why"></i>
                </li>
              </ul>
            </div>
          </nav>
        </header> :

          <header className="main-head">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="m-2 image">
                <img src={logo} alt="Logo" height="10" />
              </div>
              <button
                className="navbar-toggler me-2"
                id="hamburger"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse ms-2" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    {/* <a className="nav-link" href="">Home</a> */}
                    <NavLink className="nav-link" to="/">
                      Home
                  </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/why">
                      Why
                  </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link" to="/aboutus">
                      About Us
                  </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link" to="/events">
                      Events
                  </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link" to="/partners">
                      Partners
                  </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={{ pathname: "https://www.oceaneers.co/blog/" }} target="_blank">
                      Blog
                  </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Membership
                  </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/login">
                      <button onClick={() => this.logout()} className="login">Logout</button>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <i className="bi bi-search pointer-why"></i>
                  </li>
                </ul>
              </div>
            </nav>
          </header>}

      </div>
    );
  }
}
