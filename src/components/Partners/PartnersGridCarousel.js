import React, { Component } from "react";
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

export default class PartnersGridCarousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-slide-to="0"
            data-bs-target="#carouselExampleDark"
            className="active filled-circle mx-4"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
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
                    <p className="card-text">Locally made pulse-based foods</p>
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
                    <p className="card-text">Locally made pulse-based foods</p>
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
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <i className="bi bi-arrow-left-circle" aria-hidden="true"></i>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <i className="bi bi-arrow-right-circle" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}
