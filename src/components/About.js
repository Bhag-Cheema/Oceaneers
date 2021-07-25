import React, { Component } from "react";
import Navbar from "./NavBar";

import header1 from "../imgs/aboutus/header1.png";

import ambassador1 from "../imgs/aboutus/ambassador1.png"
import ambassador2 from "../imgs/aboutus/ambassador2.png"
import ambassador3 from "../imgs/aboutus/ambassador3.png"
import ambassador4 from "../imgs/aboutus/ambassador4.png"

import team1 from "../imgs/aboutus/team1.png"
import team2 from "../imgs/aboutus/team2.png"
import team3 from "../imgs/aboutus/team3.png"

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
        </div>
          
        {/* Ambassadors */}
        <div className="container">
        <h1 className="repeating-h1-1">Ambassadors</h1>
          <div className="row row-cols-1 row-cols-md-4 g-4 mx-auto">
              <div className="col">
                <div className="card rounded-circle">
                  <img src={ambassador1} className="rounded-circle" alt="..." />
                </div>
                <h2 className="repeating-h2 d-flex justify-content-center">
                    James Taylor
                </h2>
                
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="button-accordian"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      > Learn More
                        <i className="bi bi-plus-circle"></i>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        A Cape Town based grass root community that fights
                        plastic pollution in our oceans, by giving individuals
                        the opportunity to take a pledge on their website. Their
                        motto is C.A.R.E. (Collaborate, Act, Respond, and
                        Enjoy!).
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end */}
              {/* Tammy Fry */}
              <div className="col">
                <div className="card rounded-circle border-0">
                  <img src={ambassador2} className="rounded-circle " alt="..." />
                </div>
                <h2 className="repeating-h2 d-flex justify-content-center">
                      Tammy Fry
                </h2>
              </div>
              {/*Terence Ball*/}
              <div className="col">
                <div className="card rounded-circle border-0">
                  <img src={ambassador3} className="card rounded-circle" alt="..." />
                </div>
                <h2 className="repeating-h2 d-flex justify-content-center">
                    Terence Bell
                </h2>
              </div>
              {/*Emi Koch */}
              <div className="col">
                <div className="card rounded-circle border-0">
                  <img src={ambassador4} className="rounded-circle" alt="..." />
                </div>
                <h2 className="repeating-h2 d-flex justify-content-center">
                    Emi Koch
                </h2>
              </div>
            </div>
          </div>
        {/* Our Team */}
        <div className="container">
        <h1 className="repeating-h1-1">Our Team</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
              <div className="col">
                <div className="card rounded-circle">
                  <img src={team1} className="rounded-circle" alt="..." />
                </div>
                <h2 className="repeating-h2 d-flex justify-content-center">
                  Kaspar Paur
                </h2>
                <h2 className="repeating-h3 d-flex justify-content-center">
                  Founder
                </h2>
                
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="button-accordian"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      > Learn More
                        <i className="bi bi-plus-circle"></i>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        A Cape Town based grass root community that fights
                        plastic pollution in our oceans, by giving individuals
                        the opportunity to take a pledge on their website. Their
                        motto is C.A.R.E. (Collaborate, Act, Respond, and
                        Enjoy!).
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end */}
              {/* Nathan Richardson */}
              <div className="col">
                <div className="card rounded-circle border-0">
                  <img src={team2} className="rounded-circle " alt="..." />
                </div>
                <h2 className="repeating-h2 d-flex justify-content-center">
                  Nathan Richardson
                </h2>
                <h2 className="repeating-h3 d-flex justify-content-center">
                  Stoke Manager
                </h2>
              </div>
              {/*Andrea Fedder*/}
              <div className="col">
                <div className="card rounded-circle border-0">
                  <img src={team3} className="card rounded-circle" alt="..." />
                </div>
                <h2 className="repeating-h2 d-flex justify-content-center">
                  Andrea Fedder
                </h2>
                <h2 className="repeating-h3 d-flex justify-content-center">
                (Alumni)
                </h2>
              </div>
              
            </div>
          </div>
      </div> //end render class
       
            
    );
  }
}
