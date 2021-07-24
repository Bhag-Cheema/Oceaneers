import React, { Component } from "react";
import Navbar from "./NavBar";
import beach from "../imgs/iggy.png";
import image1 from "../imgs/image1.jpg";
import image2 from "../imgs/image2.png";
import image3 from "../imgs/image3.png";
import image4 from "../imgs/image4.png";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="card text-white border-0">
          <img id="iggy" src={beach} alt="beach" />
          <div className="card-img-overlay d-flex justify-content-center flex-column align-item-center text-center">
            <h1 className="oceaneers-cabin-large">Oceaneers</h1>
            <p className="oceaneers-cabin-small"> To the Oceans, Our Food Choices Matter.</p>
          </div>
          <div className="d-flex justify-content-center">
            <button className="learn-how">Want to Join? Learn how.</button>
          </div>
        </div>

        <div className="homepage-color">
          <div className="card-body justify-content-center text-center">
            <h1 className="oceaneers-cabin">
              oceaneers (n.) \\\\ˈō-shən–nirs \\\\
            </h1>
            <div className="oceaneers-raleway">
              <p className="oceaneers-raleway">
                A community of Ocean-aficionados who are driven by shared
                passion for being in the ocean and a shared purpose of eating
                for the ocean
              </p>
            </div>
          </div>
        </div>

        <div className="our-purpose">
          <h1 className="our-purpose">Our Purpose</h1>
          <p className="our-purpose-text">
            Our Purpose is to take better care of our Oceans (and the living
            planet as a whole). We belive that our food choices play a huge role
            in that - especially when it comes to fish and other animal
            products.
          </p>
        </div>

        <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header justify-content-center" id="headingOne">
                      <button
                        class="button-accordian"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                          Awarness
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
                      …is what we raise! Food choices matter more than most people
                (want to) know. That’s not a coincidence – there’s some pretty
                powerful & loaded industries & lobbyists out there who want to
                keep it that way
                      </div>
                    </div>
                  </div>
                  </div>

                  <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        class="button-accordian"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                          Empowerment
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
                      …is what drives us! 3 times a day you get to vote, with your
                hard-earned nuggets. Unless you’re munching like Iggy, then it’s
                6-12 times. It’s like democracy, but on steroids.
                      </div>
                    </div>
                  </div>
                  </div>

                  <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        class="button-accordian"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                         Reduction
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
                      ...is what we aim for! We don’t recommend to go from carnivore
                to complete herbivore, the same way we don’t recommend to go
                from Muizies to Dungeons (big wave spot). We believe that
                reduction is the most sustainable path for most people.
                      </div>
                    </div>
                  </div>
                  </div>
                  
<div className= "container">
<div className="our-purpose">
          <h1 className="card-body text-center">Why become an Oceaneer?</h1> 
        <div class="row row-cols-lg-5 g-2 g-lg-3">
          <div class="column">
            <img id="image1.jpg" src={image1} alt="image1" />
          </div>
          <div class="column">
            <img id="image2.png" src={image2} alt="image2" />
          </div>
          <div class="column">
            <img id="image3.png" src={image3} alt="image3" />
          </div>
          <div class="column">
            <img id="image4.png" src={image4} alt="image4" />
          </div>
        </div>
        </div>
        </div>
      </div>
    
    );
  }
}
