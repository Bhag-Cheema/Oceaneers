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

import carousel3a from "../imgs/Partners/1.body and being.jpg";
import carousel3b from "../imgs/Partners/2.Yoffi Falaffel.jpg";
import carousel3c from "../imgs/Partners/3.mahina towels.jpg";
import carousel3d from "../imgs/Partners/4.Cape town Freediving.jpg";
import carousel3e from "../imgs/Partners/5.Captail Fanplastic.jpg";
import carousel3f from "../imgs/Partners/6.the plantiful coach.jpg";

export default class Membership extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* Header image w text */}
        <section className="header-image-mem">
          <div className=" d-flex justify-content-center flex-column align-item-center text-white text-center">
            <p className="header">Membership</p>
            <p className="header-text">
              Welcome to our amazing members! Find your discount codes for all
              places below.
            </p>
          </div>
        </section>

        <div className="container mt-4 d-flex justify-content-center">
          <div className="row row-col-4">
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
              <div className="discount-info">
                <p>Discount: 10%</p>
                <p>On: All Products on www.happyeaerthpeople.com</p>
                <p className="discount-code">Code: #Pulsepower</p>
                <p>Type: Foods</p>
              </div>
            </div>

            {/* end of card one */}
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
              <div className="discount-info">
                <p>Discount: 15% on 500ml Salmun Jar (order through IG), 30% on Herbiraw Cookbook </p>
                <p>On: Online at www.herbiraw.com or Instagram</p>
                <p className="discount-code">Code: Order though the website or Instagram</p>
                <p>Type: Food</p>
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
              <div className="discount-info">
                <p>Discount: 15%</p>
                <p>On:Blanket - all products</p>
                <p className="discount-code">Code: OCEANEERS7</p>
                <p>Type: Skin products</p>
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
                  <p className="partner-card-text">Plant-based health bar</p>
                </div>
              </div>
              <div className="discount-info">
                <p>Discount:</p>
                <p>On:</p>
                <p className="discount-code">Code:</p>
                <p>Type:</p>
              </div>
            </div>
            {/* end of card */}
            <div className="col-6 col-md-4">
              <div className="card text-white border-0 text-center">
                <img src={carousel1e} className="card-img" alt="..." />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 className="partner-card-title">Nude Foods</h5>
                  <p className="partner-card-text">Plastic-free groceries</p>
                </div>
              </div>
              <div className="discount-info">
                <p>Discount:</p>
                <p>On:</p>
                <p className="discount-code">Code:</p>
                <p>Type:</p>
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
              <div className="discount-info">
                <p>Discount:</p>
                <p>On:</p>
                <p className="discount-code">Code:</p>
                <p>Type:</p>
              </div>
            </div>
            {/* end of card */}

            {/* this is one image card */}
            <div className="col-6 col-md-4">
              <div className="card text-white border-0 text-center">
                <img src={carousel2a} className="card-img" alt="..." />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 className="partner-card-title">Blended Health Bar</h5>
                  <p className="partner-card-text">Plant-based cafe</p>
                </div>
              </div>
              <div className="discount-info">
                <p>Discount:</p>
                <p>On:</p>
                <p className="discount-code">Code:</p>
                <p>Type:</p>
              </div>
            </div>
            {/* end of card */}

            <div className="col-6 col-md-4">
              <div className="card text-white border-0 text-center">
                <img src={carousel2b} className="card-img" alt="..." />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 className="partner-card-title">Surf Emporium</h5>
                  <p className="partner-card-text">Surf school in Muizenburg</p>
                </div>
              </div>
              <div className="discount-info">
                <p>Discount:</p>
                <p>On:</p>
                <p className="discount-code">Code:</p>
                <p>Type:</p>
              </div>
            </div>
            {/* end of card */}

            <div className="col-6 col-md-4">
              <div className="card text-white border-0 text-center">
                <img src={carousel2c} className="card-img" alt="..." />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 className="partner-card-title">Thankgoodness Treats</h5>
                  <p className="partner-card-text">
                    Vegan decadent, healthy treats
                  </p>
                </div>
              </div>
              <div className="discount-info">
                <p>Discount:</p>
                <p>On:</p>
                <p className="discount-code">Code:</p>
                <p>Type:</p>
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
              <div className="discount-info">
                <p>Discount:</p>
                <p>On:</p>
                <p className="discount-code">Code:</p>
                <p>Type:</p>
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
              <div className="discount-info">
                <p>Discount:</p>
                <p>On:</p>
                <p className="discount-code">Code:</p>
                <p>Type:</p>
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
              <div className="discount-info">
                <p>Discount:</p>
                <p>On:</p>
                <p className="discount-code">Code:</p>
                <p>Type:</p>
              </div>
            </div>
            {/* end of card */}

            {/* this is one image card */}
            <div className="col-6 col-md-4">
              <div className="card text-white border-0 text-center">
                <img src={carousel3a} className="card-img" alt="..." />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 className="partner-card-title">Body and Being</h5>
                  <p className="partner-card-text">Reflexologist </p>
                </div>
              </div>
              <div className="discount-info">
                <p>Discount:</p>
                <p>On:</p>
                <p className="discount-code">Code:</p>
                <p>Type:</p>
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
              <div className="discount-info">
                <p>Discount:</p>
                <p>On:</p>
                <p className="discount-code">Code:</p>
                <p>Type:</p>
              </div>
            </div>
            {/* end of card */}
            <div className="col-6 col-md-4">
              <div className="card text-white border-0 text-center">
                <img src={carousel3c} className="card-img" alt="..." />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 className="partner-card-title">Mahina Towels</h5>
                  <p className="partner-card-text">Local, hand-made towels</p>
                </div>
              </div>
              <div className="discount-info">
                <p>Discount:</p>
                <p>On:</p>
                <p className="discount-code">Code:</p>
                <p>Type:</p>
              </div>
            </div>
            {/* end of card */}
            <div className="col-6 col-md-4">
              <div className="card text-white border-0 text-center">
                <img src={carousel3d} className="card-img" alt="..." />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 className="partner-card-title">Cape Town Freediving</h5>
                  <p className="partner-card-text">
                    Diving and snorkeling courses
                  </p>
                </div>
              </div>
              <div className="discount-info">
                <p>Discount:</p>
                <p>On:</p>
                <p className="discount-code">Code:</p>
                <p>Type:</p>
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
              <div className="discount-info">
                <p>Discount:</p>
                <p>On:</p>
                <p className="discount-code">Code:</p>
                <p>Type:</p>
              </div>
            </div>
            {/* end of card */}
            <div className="col-6 col-md-4">
              <div className="card text-white border-0 text-center">
                <img src={carousel3f} className="card-img" alt="..." />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 className="partner-card-title">The Plantiful Coach</h5>
                  <p className="partner-card-text">Health coaching</p>
                </div>
              </div>
              <div className="discount-info">
                <p>Discount:</p>
                <p>On:</p>
                <p className="discount-code">Code:</p>
                <p>Type:</p>
              </div>
            </div>
            {/* end of card */}
          </div>
        </div>
      </div>
    );
  }
}
