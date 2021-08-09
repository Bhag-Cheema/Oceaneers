import React, { Component } from 'react'
import NavBar from './NavBar';
import NewsLetter from './NewsLetter';
import Footer from './Footer';
import Cow from '../imgs/Cow.png';
import Turtle from '../imgs/Turtle.png';
import Ocean from "../imgs/Ocean.png";
import Fish from "../imgs/Fish.png";
import Pills from "../imgs/Pills.png";
import Train from "../imgs/Trainway.png";


export default class Why extends Component {
    render() {
        return (
            <div>
                <NavBar />

                <section className="intro-why">
                    <div>
                        <p className="title-why">Why You Should Care?</p>
                        <p className="desc-why">The detrimental impact of industrial fishing and livestock farming on our oceans,<br /> our planet,
                        and us are undeniable. Oceaneers advocated for a world free of them.</p>
                    </div>
                </section>
                <section className="compare">
                    <div className="indust">
                        <p className="sub-title-why">
                            Industrial vs. Non-Industrial <br /> Fishing and Livestock Farming
                        </p>
                        <p className="sub-desc-why">
                            Oceaneeers hopes for a world free of industrial fishing/livestock farming and for more <br />
                            non-industrial fishing/livestock farming.
                        </p>
                        <div className="indust-cards">
                            <div className="indust-card">
                                <div className="card-itself">
                                    <h5>Industrial <br /> Fishing/Livestock Farming</h5>
                                    <h6>Factories in place of farms. Intensive. Large-scale.<br /> Cheap. Shareholder value. Supermarkets. Exploitation.</h6>

                                </div>
                                <div className="green-bar">
                                    <h5>Industrial Fishing</h5>
                                    <div className="plusBoy">
                                        <i className="bi bi-plus-circle plus-icon plusBoy"></i>
                                    </div>

                                </div>
                                <div className="green-bar">
                                    <h5>Industrial Livestock Fishing</h5>

                                    <div className="plusBoy">
                                        <i className="bi bi-plus-circle plus-icon plusBoy"></i>
                                    </div>

                                </div>

                            </div>
                            <div className="non-indust-card">
                                <div className="card-itself-two">
                                    <div className="card-itself-two-content">
                                        <h5>Non-Industrial Fishing/Livestock <br /> Farming</h5>
                                        <h6>Connection between the human and the individual <br /> animal – respect, care and dignity. Back to the roots.</h6>
                                    </div>
                                </div>
                                <div className="green-bar">
                                    <h5>Non Industrial Fishing</h5>
                                    <div className="plusBoy">
                                        <i className="bi bi-plus-circle plus-icon plusBoy"></i>
                                    </div>
                                </div>
                                <div className="green-bar">
                                    <h5>Non Industrial Livestock Fishing</h5>
                                    <div className="plusBoy">
                                        <i className="bi bi-plus-circle plus-icon plusBoy"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="hrLine">
                    <hr />
                </div>


                <section className="further-explanation">
                    <div className="explanation-content">
                        <h2>Industrial animal-based food production <br />
                         affects the environment, inflicts animal <br />
                          suffering, and harms our health. </h2>
                        <h4>
                            From overfishing, ecosystem collapses, climate change, etc., the industries are closely tied to <br />
                            these effects. More and more research also shows how fish can feel pain, and we have enough <br /> research to know how much suffering factory farms inflict onto animals.
                            Lifestyle diseases are <br />
                             also more at risk with the consumption of animal products, and
                            the aquatic food chain has the<br /> most concentrated source of organic pollutants.</h4>
                    </div>
                </section>

                <div className="hrLine">
                    <hr />
                </div>


                <section className="why-carousel">
                    <div className="carousel-title-why">
                        <h3>Need more evidence? <br />
                            Believe in the numbers.</h3>
                    </div>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button
                                type="button"
                                data-bs-slide-to="0"
                                data-bs-target="#carouselExampleIndicators"
                                className="active filled-circle m-4 light"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                className="active filled-circle m-4"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                className="active filled-circle m-4"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                className="active filled-circle m-4"
                                data-bs-slide-to="3"
                                aria-label="Slide 4"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                className="active filled-circle m-4"
                                data-bs-slide-to="4"
                                aria-label="Slide 5"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                className="active filled-circle m-4"
                                data-bs-slide-to="5"
                                aria-label="Slide 6"
                            ></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={Fish} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={Train} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={Ocean} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={Cow} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={Turtle} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={Pills} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span> */}
                            <i
                                className="bi bi-arrow-left-circle"
                                aria-hidden="true"
                            ></i>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            {/* <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span> */}
                            <i
                                className="bi bi-arrow-right-circle"
                                aria-hidden="true"
                            ></i>
                        </button>
                    </div>
                </section>

                <section className="infographic">
                    <div>

                    </div>
                </section>

                <NewsLetter />
                <Footer />

            </div >
        )
    }
}
