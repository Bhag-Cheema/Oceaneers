import React, { Component } from "react";
import Navbar from "./NavBar";

import partnerheader from "../imgs/Partners/partnerheader.jpg";

import carousel1a from "../imgs/Partners/happy earth people-1.jpg";
import carousel1b from "../imgs/Partners/herbiraw-2.jpg";
import carousel1c from "../imgs/Partners/back2nature-3.jpg";
import carousel1d from "../imgs/Partners/nourished.jpg";
import carousel1e from "../imgs/Partners/nude foods.jpg";
import carousel1f from "../imgs/Partners/plushi.jpg";

import carousel2a from "../imgs/Partners/blended health bar.jpg";
import carousel2b from "../imgs/Partners/surf emporium.jpg";
import carousel2c from "../imgs/Partners/Thankgoodness.jpg";
import carousel2d from "../imgs/Partners/Wawa.jpg";
import carousel2e from "../imgs/Partners/The-Commons 1.jpg";
import carousel2f from "../imgs/Partners/Sealand 1.jpg";

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
            src={partnerheader}
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
        {/* Quote */}
        <div className="card text-center border-0">
          <h3 className="quote">
            "If you want to go fast, walk alone. If you want to go far, walk
            together."
          </h3>
        </div>
        {/* Our Brand Partners */}
        <div className="card text-center border-0">
          <h1 className="repeating-h1">Our Brand Partners</h1>
          <h2 className="repeating-h2">
            Brand partners are aligned brands who contribute to the community by{" "}
            <br /> offering discounts & prizes to Oceaneers.
          </h2>
          {/* Carousel */}
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="row row-cols-1 row-cols-md-3 g-4 slide">
                  {/* this is one image card */}
                  <div className="col">
                    <div className="card text-white border-0">
                      <img src={carousel1a} className="card-img" alt="..." />
                      <div className="card-img-overlay d-flex flex-column justify-content-end">
                        <h5 className="card-title">Happy Earth People</h5>
                        <p className="card-text">
                          Locally made pulse-based foods
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end of card */}
                  <div className="col">
                    <div className="card text-white border-0">
                      <img src={carousel1b} className="card-img" alt="..." />
                      <div className="card-img-overlay d-flex flex-column justify-content-end">
                        <h5 className="card-title">Herbi raw</h5>
                        <p className="card-text">
                          Holistic health + conscious cooking
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end of card */}
                  <div className="col">
                    <div className="card text-white border-0">
                      <img src={carousel1c} className="card-img" alt="..." />
                      <div className="card-img-overlay d-flex flex-column justify-content-end">
                        <h5 className="card-title">Back 2 Nature</h5>
                        <p className="card-text">
                          Eco-friendly skin, hair, and suncare products
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end of card */}
                  <div className="col">
                    <div className="card carousel-card text-white border-0">
                      <img src={carousel1d} className="card-img" alt="..." />
                      <div className="card-img-overlay d-flex flex-column justify-content-end">
                        <h5 className="card-title">Nourish’d Cafe & Juicery</h5>
                        <p className="card-text">Plant-based health bar</p>
                      </div>
                    </div>
                  </div>
                  {/* end of card */}
                  <div className="col">
                    <div className="card text-white border-0">
                      <img src={carousel1e} className="card-img" alt="..." />
                      <div className="card-img-overlay d-flex flex-column justify-content-end">
                        <h5 className="card-title">Nude Foods</h5>
                        <p className="card-text">Plastic-free groceries</p>
                      </div>
                    </div>
                  </div>
                  {/* end of card */}
                  <div className="col">
                    <div className="card text-white border-0">
                      <img src={carousel1f} className="card-img" alt="..." />
                      <div className="card-img-overlay d-flex flex-column justify-content-end">
                        <h5 className="card-title">Plushi</h5>
                        <p className="card-text">
                          Plant-based zero waste sushi
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end of card */}
                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="row row-cols-1 row-cols-md-3 g-4 slide">
                      {/* this is one image card */}
                      <div className="col">
                        <div className="card text-white border-0">
                          <img
                            src={carousel2a}
                            className="card-img"
                            alt="..."
                          />
                          <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 className="card-title">Happy Earth People</h5>
                            <p className="card-text">
                              Locally made pulse-based foods
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* end of card */}
                      <div className="col">
                        <div className="card text-white border-0">
                          <img
                            src={carousel2b}
                            className="card-img"
                            alt="..."
                          />
                          <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 className="card-title">Herbi raw</h5>
                            <p className="card-text">
                              Holistic health + conscious cooking
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* end of card */}
                      <div className="col">
                        <div className="card text-white border-0">
                          <img
                            src={carousel2c}
                            className="card-img"
                            alt="..."
                          />
                          <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 className="card-title">Back 2 Nature</h5>
                            <p className="card-text">
                              Eco-friendly skin, hair, and suncare products
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* end of card */}
                      <div className="col">
                        <div className="card carousel-card text-white border-0">
                          <img
                            src={carousel2d}
                            className="card-img"
                            alt="..."
                          />
                          <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 className="card-title">
                              Nourish’d Cafe & Juicery
                            </h5>
                            <p className="card-text">Plant-based health bar</p>
                          </div>
                        </div>
                      </div>
                      {/* end of card */}
                      <div className="col">
                        <div className="card text-white border-0">
                          <img
                            src={carousel2e}
                            className="card-img"
                            alt="..."
                          />
                          <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 className="card-title">Nude Foods</h5>
                            <p className="card-text">Plastic-free groceries</p>
                          </div>
                        </div>
                      </div>
                      {/* end of card */}
                      <div className="col">
                        <div className="card text-white border-0">
                          <img
                            src={carousel2f}
                            className="card-img"
                            alt="..."
                          />
                          <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 className="card-title">Plushi</h5>
                            <p className="card-text">
                              Plant-based zero waste sushi
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* end of card */}
                    </div>
                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Our friends */}
          <div className="container text-center">
            <h1 className="repeating-h1">Our Friends</h1>
            <h2 className="repeating-h2">
              Here are some of our favourite organizations that are doing
              amazing work <br /> in related fields, and that we proudly call
              our friends.
            </h2>

            {/* Circle Carousel */}

            {/* item 1 */}
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
              <div className="col">
                <div className="card rounded-circle border-0">
                  <img src={circle1} className="card-img-top" alt="..." />
                  <div className="card-body"></div>
                </div>

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
                      >
                        Ocean Pledge
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

              <div className="col">
                <div className="card rounded-circle border-0">
                  <img src={circle2} className="card-img-top" alt="..." />
                  <div className="card-body"></div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-circle border-0">
                  <img src={circle3} className="card-img-top" alt="..." />
                  <div className="card-body"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
