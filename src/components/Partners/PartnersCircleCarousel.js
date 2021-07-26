import React, { Component } from "react";

import circle1 from "../imgs/Partners/ocean pledge.png";
import circle2 from "../imgs/Partners/green pop logo.png";
import circle3 from "../imgs/Partners/fish welfare initiative logo.png";

import circle4 from "../imgs/Partners/beyond the surface logo.png";
import circle5 from "../imgs/Partners/captain fanplastic logo.png";
import circle6 from "../imgs/Partners/fry's logo.png";

export default class PartnersCircleCarousel extends Component {
  render() {
    return (
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
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
                    <p className="text-accordion">
                      A Cape Town based grass root community that fights plastic
                      pollution in our oceans, by giving individuals the
                      opportunity to take a pledge on their website. Their motto
                      is C.A.R.E. (Collaborate, Act, Respond, and Enjoy!).
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
                    <p className="text-accordion">
                      They reconnect people with nature, all over Africa through
                      reforestation festivals, art projects and corporate events
                      at under-resourced schools etc. Greenpop has been a big
                      inspiration for the creation of Oceaneers!
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
                    <p className="text-accordion">
                      Fish Welfare Initiative helps up to 180 billion fish that
                      are farmed each year. It’s now no secret that fish can
                      experience pain – that’s why we dig the great work that
                      FWI is doing and are proud to call them part of our
                      extended family.
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
    );
  }
}
