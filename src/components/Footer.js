import React, { Component } from "react";
import Facebook from "../imgs/Footer/Facebook.png";
import Instagram from "../imgs/Footer/Instagram.png";
import { NavLink } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="main-footer mx-0">
            <div className="row">
              <div className="col-sm col-one">
                <h1 className="footer-title">Oceaneers</h1>
                <p className="footer-subtitle">
                  To the Oceans, Our Food Choices Matter.
                </p>
                <div className="social-icons">
                  <img
                    className="instagram"
                    id="header-image"
                    src={Instagram}
                    alt="instagram logo"
                  />
                  <img
                    className="facebook"
                    id="header-image"
                    src={Facebook}
                    alt="facebook logo"
                  />
                </div>
              </div>
              <div className="col-sm col-two d-flex justify-content-center">
                {/* NEEDS LINKING */}
                <NavLink to="" activeClassName="active-link">
                  About Us
                </NavLink>
              </div>
              <div className="col-sm col-three d-flex justify-content-center">
                {/* NEEDS LINKING */}
                Contact Us <br />
                hello@oceaneers.co
              </div>
              <div className="col-sm col-four d-flex align-items-end flex-column">
                <div>
                  <button className="footer-login">Log In</button>
                </div>
                <div>
                  <button className="footer-join">Join Us</button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
