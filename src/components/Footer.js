import React, { Component } from "react";
import Facebook from "../imgs/Footer/Facebook.png";
import Instagram from "../imgs/Footer/Instagram.png";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="main-footer mx-0">
            <div className="row">
              <div className="col col-one">
                <h1 className="footer-title">Oceaneers</h1>
                <p className="footer-subtitle">
                  To the Oceans, Our Food Choices Matter.
                </p>
                <div className="social-icons">
                  <Link
                    to={{ pathname: "https://www.instagram.com/oceaneers.co/" }}
                    target="_blank"
                  >
                    <img
                      className="instagram"
                      id="header-image"
                      src={Instagram}
                      alt="instagram logo"
                    />
                  </Link>
                  <Link
                    to={{ pathname: "https://www.facebook.com/oceaneers.co/" }}
                    target="_blank"
                  >
                    <img
                      className="facebook"
                      id="header-image"
                      src={Facebook}
                      alt="facebook logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col col-two">
                {/* NEEDS LINKING */}
                <Link to="/aboutus" style={{ textDecoration: "none" }}>
                  <p to="" className="about-us">
                    About Us
                  </p>
                </Link>
              </div>
              <div className="col col-three">
                {/* NEEDS LINKING */}
                Contact Us <br />
                hello@oceaneers.co
              </div>
              <div className="col col-four d-flex align-items-end flex-column">
                <div>
                  <button className="footer-login">Log In</button>
                </div>
                <div>
                  <Link to="/joinus">
                    <button className="footer-join">Join Us</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
