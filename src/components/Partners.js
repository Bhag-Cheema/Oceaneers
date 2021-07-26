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
import circle4 from "../imgs/Partners/beyond the surface logo.png";
import circle5 from "../imgs/Partners/captain fanplastic logo.png";
import circle6 from "../imgs/Partners/fry's logo.png";

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
            offering discounts & prizes to Oceaneers.
          </h2>
        </div>

        {/* Carousel */}
        <div
          id="gridCarousel"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-slide-to="0"
              data-bs-target="#gridCarousel"
              className="active filled-circle mx-4"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#gridCarousel"
              className="active filled-circle"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
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
                      <p className="card-text">Plant-based zero waste sushi</p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row row-cols-1 row-cols-md-3 g-4 slide">
                {/* this is one image card */}
                <div className="col">
                  <div className="card text-white border-0">
                    <img src={carousel2a} className="card-img" alt="..." />
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
                    <img src={carousel2b} className="card-img" alt="..." />
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
                    <img src={carousel2c} className="card-img" alt="..." />
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
                    <img src={carousel2d} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="card-title">Nourish’d Cafe & Juicery</h5>
                      <p className="card-text">Plant-based health bar</p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
                <div className="col">
                  <div className="card text-white border-0">
                    <img src={carousel2e} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="card-title">Nude Foods</h5>
                      <p className="card-text">Plastic-free groceries</p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
                <div className="col">
                  <div className="card text-white border-0">
                    <img src={carousel2f} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="card-title">Plushi</h5>
                      <p className="card-text">Plant-based zero waste sushi</p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#gridCarousel"
            data-bs-slide="prev"
          >
            <i className="bi bi-arrow-left-circle" aria-hidden="true"></i>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#gridCarousel"
            data-bs-slide="next"
          >
            <i className="bi bi-arrow-right-circle" aria-hidden="true"></i>
          </button>
        </div>

        {/* Our friends */}
        <div className="text-center">
          <h1 className="repeating-h1">Our Friends</h1>
          <h2 className="repeating-h2">
            Here are some of our favourite organizations that are doing amazing
            work in related fields, and that we proudly call our friends.
          </h2>
        </div>

        {/* Circle Carousel */}
        <div
          id="circleCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {/* item 1 */}
                <div className="col align-middle mx-auto">
                  <div className="card rounded-circle border-0">
                    <img src={circle1} className="card-img-top" alt="..." />
                  </div>

                  <div className="accordion  mx-auto">
                    <div className="accordion-item border-0">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="button-accordion"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Ocean Pledge
                          <i className="bi bi-plus-circle plus-icon"></i>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="text-accordion text-center">
                            A Cape Town based grass root community that fights
                            plastic pollution in our oceans, by giving
                            individuals the opportunity to take a pledge on
                            their website. Their motto is C.A.R.E. (Collaborate,
                            Act, Respond, and Enjoy!).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end of accordion */}
                </div>
                {/* end */}

                {/* item 2 */}
                <div className="col align-middle mx-auto">
                  <div className="card rounded-circle border-0 mx-auto">
                    <img src={circle2} className="card-img-top" alt="..." />
                  </div>

                  <div className="accordion  mx-auto">
                    <div className="accordion-item border-0">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="button-accordion"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          Greenpop
                          <i className="bi bi-plus-circle plus-icon"></i>
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="text-accordion  text-center">
                            They reconnect people with nature, all over Africa
                            through reforestation festivals, art projects and
                            corporate events at under-resourced schools etc.
                            Greenpop has been a big inspiration for the creation
                            of Oceaneers!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end of accordion */}
                </div>
                {/* end */}

                {/* item 3 */}
                <div className="col align-middle mx-auto">
                  <div className="card rounded-circle border-0 mx-auto">
                    <img src={circle3} className="card-img-top" alt="..." />
                  </div>
                  <div className="accordion  mx-auto">
                    <div className="accordion-item border-0">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="button-accordion"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                        >
                          Fish Welfare Initiative
                          <i className="bi bi-plus-circle plus-icon"></i>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="text-accordion text-center">
                            Fish Welfare Initiative helps up to 180 billion fish
                            that are farmed each year. It’s now no secret that
                            fish can experience pain – that’s why we dig the
                            great work that FWI is doing and are proud to call
                            them part of our extended family.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end of accordion */}
                </div>
                {/* end */}
              </div>
            </div>

            {/* next slide */}
            <div class="carousel-item">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {/* item 4 */}
                <div className="col align-middle mx-auto">
                  <div className="card rounded-circle border-0 d-flex justify-content-center">
                    <img src={circle4} className="card-img-top" alt="..." />
                  </div>

                  <div className="accordion  mx-auto">
                    <div className="accordion-item border-0">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="button-accordion d-flex align-items-center"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Beyond the Surface International
                          <i className="bi bi-plus-circle plus-icon"></i>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="text-accordion text-center">
                            This organization works at the local level with
                            marginalized small-scale fishing communities, for
                            social-ecological wellbeing. And we’re so excited
                            that the Emi Koch—founder and driving force—is our
                            4th Oceaneer Ambassador!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end of accordion */}
                </div>
                {/* end */}

                {/* item 5 */}
                <div className="col align-middle mx-auto">
                  <div className="card rounded-circle border-0 d-flex justify-content-center">
                    <img src={circle5} className="card-img-top" alt="..." />
                  </div>

                  <div className="accordion  mx-auto">
                    <div className="accordion-item border-0">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="button-accordion"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          Captain Fanplastic
                          <i className="bi bi-plus-circle plus-icon"></i>
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="text-accordion text-center">
                            The Pirates behind Captain Fanplastic use the power
                            of storytelling and gamification to raise awareness
                            among primary school learners in South Africa about
                            the impact of plastic pollution in our oceans.
                            #NoTrashButTreasure
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end of accordion */}
                </div>
                {/* end */}

                {/* item 6 */}
                <div className="col align-middle mx-auto">
                  <div className="card rounded-circle border-0 mx-auto">
                    <img src={circle6} className="card-img-top" alt="..." />
                  </div>
                  <div className="accordion  mx-auto">
                    <div className="accordion-item border-0">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="button-accordion"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                        >
                          Fry’s Family Food
                          <i className="bi bi-plus-circle plus-icon"></i>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="text-accordion text-center">
                            The number of plant-based nuggets we have devoured
                            in our post-surf wraps is closer to 1000. Having
                            Tammy Fry as ambassador makes us so proud, and the
                            support they give to our organization is tremendous.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end of accordion */}
                </div>
                {/* end */}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#circleCarousel"
            data-bs-slide="prev"
          >
            <i className="bi bi-arrow-left-circle" aria-hidden="true"></i>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#circleCarousel"
            data-bs-slide="next"
          >
            <i className="bi bi-arrow-right-circle" aria-hidden="true"></i>
          </button>
        </div>

        {/* div closing whole page   */}
      </div>
    );
  }
}
