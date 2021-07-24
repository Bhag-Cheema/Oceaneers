import React, { Component } from "react";
import Navbar from "./NavBar";

import header1 from "../imgs/aboutus/header1.png";

import ambassador1 from "../imgs/aboutus/ambassador1.png"

import circle1 from "../imgs/Partners/ocean pledge.png";
import circle2 from "../imgs/Partners/green pop logo.png";
import circle3 from "../imgs/Partners/fish welfare initiative logo.png";

export default class Partners extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* Header image w text */}
        <div className="card text-white border-0">
          <img
            id="header-image"
            src={header1}
            alt="girl eating smoothie bowl"
          />
          <div className="card-img-overlay d-flex justify-content-center flex-column align-item-center text-center">
            <h1 className="header">About Us</h1>
            <h3 className="header-text">
            Join a community of like-minded people who share a passion for the ocean and are committed to reducing 
            their consumption of animal products.
            </h3>
          </div>
          {/* Join us button */}
          <div className="d-flex justify-content-center">
            <button className="learn-how">Want to Join? Learn how.</button>
          </div>
        </div>
        {/* Why We Started */}
        <div className="card text-center border-0">
          <h1 className="repeating-h1">Why We Started</h1>
          <h2 className="repeating-h2">
          We created Oceaneers as a community-driven initiative because we believe changing our food{" "}
            <br /> choices is the most powerful lever to make oceans more sustainable, reduce suffering worldwide,{" "}
            <br />  and take better care of our Oceans. 
          </h2>
          <h2 className="repeating-h2">
          The urge to share this information with our fellow Ocean-dwellers and inspire a reduction-based{" "}
            <br /> journey blossomed. Thus, we decided to put other work projects on stand-by and dedicate our {" "}
            <br />full time and energy towards this cause. 
          </h2>
          
          {/* Ambassadors */}
          <div className="card">
          <div className="container text-center">
            <h1 className="repeating-h1">Ambassadors</h1>
            {/* Circle Carousel */}
            {/* item 1 */}
            <div className="row row-cols-1 row-cols-md-4 g-4 mx-auto">
                <div className="col">
                    <div className="card rounded-circle border-0">
                        <img src={ambassador1} className="rounded-circle" alt="ambassador1"/>
                            <div className="card-body"></div>
                            <h2 className="repeating-h2">
                            James Taylor
                            </h2>                            
                    </div>

                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="button-accordian"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        >Learn More
                        <i className="bi bi-plus-circle"></i>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                      <div class="container-sm">
                           CONTAINER
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end */}
             


              </div> {/*end main Ambassadors card*/}

              
          
            </div>
          </div>
        </div>
      </div>
    );
  }
}
