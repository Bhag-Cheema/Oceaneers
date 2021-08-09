import React, { Component } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

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

import carousel3a from "../imgs/Partners/1.body and being.jpg";
import carousel3b from "../imgs/Partners/2.Yoffi Falaffel.jpg";
import carousel3c from "../imgs/Partners/3.mahina towels.jpg";
import carousel3d from "../imgs/Partners/4.Cape town Freediving.jpg";
import carousel3e from "../imgs/Partners/5.Captail Fanplastic.jpg";
import carousel3f from "../imgs/Partners/6.the plantiful coach.jpg";

import circle1 from "../imgs/Partners/ocean pledge.png";
import circle2 from "../imgs/Partners/green pop logo.png";
import circle3 from "../imgs/Partners/fish welfare initiative logo.png";
import circle4 from "../imgs/Partners/beyond the surface logo.png";
import circle5 from "../imgs/Partners/captain fanplastic logo.png";
import circle6 from "../imgs/Partners/fry's logo.png";
import NewsLetter from "./NewsLetter";

export default class Partners extends Component {
  render() {
    return (
      <div>
        <Navbar />

        {/* Header image w text */}
        <section className="header-image-partner">
          <div className=" d-flex justify-content-center flex-column align-item-center text-white text-center">
            <p className="header">Partners and Friends</p>
            <p className="header-text">
              Upon sign-up you'll receive a digital membership card and access
              to our online membership area, providing you with unique discounts
              offered by our wonderful brand community.
            </p>
          </div>
        </section>
        {/* Join us button */}
        <div className="d-flex justify-content-center">
          <button type="button" className="learn-how-partners cursor">
            Want to Join? Learn how.
          </button>
        </div>
        {/* Quote */}
        <div className="text-center">
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
          data-interval="false"
          data-wrap="false"
          data-pause="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-slide-to="0"
              data-bs-target="#gridCarousel"
              className="active filled-circle m-4 light"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#gridCarousel"
              className="active filled-circle m-4"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#gridCarousel"
              className="active filled-circle m-4"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row row-cols-1 row-cols-md-3 g-4 slide">
                {/* this is one image card */}
                <div className="col-6 col-md-4">
                  <div className="card text-white border-0 text-center">
                    <img src={carousel1a} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end ">
                      <h5 className="partner-card-title">Happy Earth People</h5>
                      <p className="partner-card-text">
                        Locally made pulse-based foods
                      </p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
                <div className="col-6 col-md-4">
                  <div className="card text-white border-0 text-center">
                    <img
                      src={carousel1b}
                      className="card-img"
                      alt="..."
                      id="grid-image"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="partner-card-title">Herbi raw</h5>
                      <p className="partner-card-text">
                        Holistic health + conscious cooking
                      </p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
                <div className="col-6 col-md-4">
                  <div className="card text-white border-0 text-center">
                    <img src={carousel1c} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="partner-card-title">Back 2 Nature</h5>
                      <p className="partner-card-text">
                        Eco-friendly skin, hair, and suncare products
                      </p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
                <div className="col-6 col-md-4">
                  <div className="card carousel-card text-white border-0 text-center">
                    <img src={carousel1d} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="partner-card-title">
                        Nourish’d Cafe & Juicery
                      </h5>
                      <p className="partner-card-text">
                        Plant-based health bar
                      </p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
                <div className="col-6 col-md-4">
                  <div className="card text-white border-0 text-center">
                    <img src={carousel1e} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="partner-card-title">Nude Foods</h5>
                      <p className="partner-card-text">
                        Plastic-free groceries
                      </p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
                <div className="col-6 col-md-4">
                  <div className="card text-white border-0 text-center">
                    <img src={carousel1f} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="partner-card-title">Plushi</h5>
                      <p className="partner-card-text">
                        Plant-based zero waste sushi
                      </p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row row-cols-1 row-cols-md-3 g-4 slide">
                {/* this is one image card */}
                <div className="col-6 col-md-4">
                  <div className="card text-white border-0 text-center">
                    <img src={carousel2a} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="partner-card-title">Blended Health Bar</h5>
                      <p className="partner-card-text">Plant-based cafe</p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
                <div className="col-6 col-md-4">
                  <div className="card text-white border-0 text-center">
                    <img src={carousel2b} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="partner-card-title">Surf Emporium</h5>
                      <p className="partner-card-text">
                        Surf school in Muizenburg
                      </p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
                <div className="col-6 col-md-4">
                  <div className="card text-white border-0 text-center">
                    <img src={carousel2c} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="partner-card-title">
                        Thankgoodness Treats
                      </h5>
                      <p className="partner-card-text">
                        Vegan decadent, healthy treats
                      </p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
                <div className="col-6 col-md-4">
                  <div className="card text-white border-0 text-center">
                    <img src={carousel2d} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="partner-card-title">Wawa Surfboards</h5>
                      <p className="partner-card-text">Eco surf boards</p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
                <div className="col-6 col-md-4">
                  <div className="card text-white border-0 text-center">
                    <img src={carousel2e} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="partner-card-title">The Commons</h5>
                      <p className="partner-card-text">
                        Creative space in Muizenburg
                      </p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
                <div className="col-6 col-md-4">
                  <div className="card text-white border-0 text-center">
                    <img src={carousel2f} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="partner-card-title">Sealand</h5>
                      <p className="partner-card-text">
                        Sustainable bags and clothing
                      </p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row row-cols-1 row-cols-md-3 g-4 slide">
                {/* this is one image card */}
                <div className="col-6 col-md-4">
                  <div className="card text-white border-0 text-center">
                    <img src={carousel3a} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="partner-card-title">Body and Being</h5>
                      <p className="partner-card-text">Reflexologist </p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
                <div className="col-6 col-md-4">
                  <div className="card text-white border-0 text-center">
                    <img src={carousel3b} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="partner-card-title">Yoffi Falaffel</h5>
                      <p className="partner-card-text">
                        Plant-based Middle Eastern restaurant
                      </p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
                <div className="col-6 col-md-4">
                  <div className="card text-white border-0 text-center">
                    <img src={carousel3c} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="partner-card-title">Mahina Towels</h5>
                      <p className="partner-card-text">
                        Local, hand-made towels
                      </p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
                <div className="col-6 col-md-4">
                  <div className="card text-white border-0 text-center">
                    <img src={carousel3d} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="partner-card-title">
                        Cape Town Freediving
                      </h5>
                      <p className="partner-card-text">
                        Diving and snorkeling courses
                      </p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
                <div className="col-6 col-md-4">
                  <div className="card text-white border-0 text-center">
                    <img src={carousel3e} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="partner-card-title">Captain Fanplastic</h5>
                      <p className="partner-card-text">
                        Plastic-free knowledge (primary school programme)
                      </p>
                    </div>
                  </div>
                </div>
                {/* end of card */}
                <div className="col-6 col-md-4">
                  <div className="card text-white border-0 text-center">
                    <img src={carousel3f} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="partner-card-title">
                        The Plantiful Coach
                      </h5>
                      <p className="partner-card-text">Health coaching</p>
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
            <i
              className="bi bi-arrow-left-circle left-arrow-bottom-grid"
              aria-hidden="true"
            ></i>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#gridCarousel"
            data-bs-slide="next"
          >
            <i
              className="bi bi-arrow-right-circle right-arrow-bottom-grid"
              aria-hidden="true"
            ></i>
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
          // data-bs-ride="carousel"
          data-interval="false"
          data-wrap="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {/* item 1 */}
                <div className="col align-middle mx-auto p-0">
                  <div className="card rounded-circle border-0 mx-auto">
                    <img src={circle1} className="card-img-top" alt="..." />
                  </div>

                  <div
                    className="accordion-partners d-flex justify-content-center"
                    id="accordionExample"
                  >
                    <div className="accordion-item border-0">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="button-accordion mx-auto d-flex align-items-center justify-content-center"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Ocean Pledge
                          <i className="bi bi-plus-circle plus-icon-partners"></i>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse mx-auto"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body mx-auto">
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
                <div className="col align-middle mx-auto p-0">
                  <div className="card rounded-circle border-0 mx-auto">
                    <img src={circle2} className="card-img-top" alt="..." />
                  </div>

                  <div
                    className="accordion-partners d-flex justify-content-center"
                    id="accordionExample"
                  >
                    <div className="accordion-item border-0">
                      <h2
                        className="accordion-header text-center"
                        id="headingTwo"
                      >
                        <button
                          className="button-accordion mx-auto d-flex align-items-center justify-content-center"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          Greenpop
                          <i className="bi bi-plus-circle plus-icon-partners"></i>
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body mx-auto">
                          <p className="text-accordion text-center">
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
                <div className="col align-middle mx-auto p-0">
                  <div className="card rounded-circle border-0 mx-auto">
                    <img src={circle3} className="card-img-top" alt="..." />
                  </div>

                  <div
                    className="accordion-partners d-flex justify-content-center"
                    id="accordionExample"
                  >
                    <div className="accordion-item border-0">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="button-accordion mx-auto d-flex align-items-center justify-content-center"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                        >
                          Fish Welfare <br />
                          Initiative
                          <i className="bi bi-plus-circle plus-icon-partners"></i>
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse mx-auto"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body mx-auto">
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
            <div className="carousel-item">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {/* item 4 */}
                <div className="col align-middle mx-auto p-0">
                  <div className="card rounded-circle border-0 mx-auto d-flex justify-content-center">
                    <img src={circle4} className="card-img-top" alt="..." />
                  </div>

                  <div
                    className="accordion-partners d-flex justify-content-center"
                    id="accordionExample"
                  >
                    <div className="accordion-item border-0">
                      <h2
                        className="accordion-header text-center"
                        id="headingFour"
                      >
                        <button
                          className="button-accordion mx-auto d-flex align-items-center justify-content-center"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="true"
                          aria-controls="collapseFour"
                        >
                          Beyond the Surface International
                          <i className="bi bi-plus-circle plus-icon-partners"></i>
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body mx-auto">
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
                <div className="col align-middle mx-auto p-0">
                  <div className="card rounded-circle border-0 mx-auto d-flex justify-content-center">
                    <img src={circle5} className="card-img-top" alt="..." />
                  </div>

                  <div
                    className="accordion-partners d-flex justify-content-center"
                    id="accordionExample"
                  >
                    <div className="accordion-item border-0">
                      <h2
                        className="accordion-header text-center"
                        id="headingFive"
                      >
                        <button
                          className="button-accordion mx-auto d-flex align-items-center justify-content-center"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="true"
                          aria-controls="collapseFive"
                        >
                          Captain Fanplastic
                          <i className="bi bi-plus-circle plus-icon-partners"></i>
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="accordionExample"
                      >
                        <div className="accordion-body mx-auto">
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
                <div className="col align-middle mx-auto p-0">
                  <div className="card rounded-circle border-0 mx-auto">
                    <img src={circle6} className="card-img-top" alt="..." />
                  </div>

                  <div
                    className="accordion-partners d-flex justify-content-center"
                    id="accordionExample"
                  >
                    <div className="accordion-item border-0">
                      <h2
                        className="accordion-header text-center"
                        id="headingTwo"
                      >
                        <button
                          className="button-accordion mx-auto d-flex align-items-center justify-content-center"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="true"
                          aria-controls="collapseSix"
                        >
                          Fry’s Family Food
                          <i className="bi bi-plus-circle plus-icon-partners"></i>
                        </button>
                      </h2>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body mx-auto">
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
            <i
              className="bi bi-arrow-left-circle left-arrow-bottom-circles"
              aria-hidden="true"
            ></i>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#circleCarousel"
            data-bs-slide="next"
          >
            <i
              className="bi bi-arrow-right-circle right-arrow-bottom-circles"
              aria-hidden="true"
            ></i>
          </button>
        </div>

        {/* <NewsLetter /> */}

        {/* Footer */}

        <Footer />

        {/* div closing whole page   */}
      </div>
    );
  }
}
