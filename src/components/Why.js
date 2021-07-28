import React, { Component } from 'react'
import NavBar from './NavBar';
import NewsLetter from './NewsLetter';
import Footer from './Footer';
import Cow from '../imgs/cow.png';
import Turtle from '../imgs/turtle.png';
import Branchbeach from "../imgs/branchBeach.png";
import Fish from "../imgs/fish.png";
import Pill from "../imgs/pills.png";
import Train from "../imgs/train.png";


export default class Why extends Component {
    render() {
        return (
            <div>
                <NavBar />

                <section className="intro-why">
                    <div>
                        <p className="title">Why You Should Care?</p>
                        <p className="desc">The detrimental impact of industrial fishing and livestock farming on our oceans,<br /> our planet,
                        and us are undeniable. Oceaneers advocated for a world free of them.</p>
                    </div>
                </section>
                <section className="compare">
                    <div className="indust">
                        <p className="sub-title">
                            Industrial vs. Non-Industrial <br /> Fishing and Livestock Farming
                        </p>
                        <p className="sub-desc">
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
                                </div>
                                <div className="green-bar">
                                    <h5>Non Industrial Fishing</h5>
                                </div>

                            </div>
                            <div className="non-indust-card">
                                <div className="card-itself-two">
                                    <h5>Non-Industrial Fishing/Livestock <br /> Farming</h5>
                                    <h6>Connection between the human and the individual <br /> animal – respect, care and dignity. Back to the roots.</h6>
                                </div>
                                <div className="green-bar">
                                    <h5>Industrial Livestock Fishing</h5>
                                </div>
                                <div className="green-bar">
                                    <h5>Non Industrial Livestock Fishing</h5>
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
                    {/* <div className="why-carousel-start">
                        <button className="carousel-button-why">
                            <i className="bi bi-arrow-right-circle"></i>
                        </button>
                        <div className="carousel-track-container-why">
                            <ul className="carousel-track-why">
                                <li className="carousel-slide-why">
                                    <img src={Fish} alt="cow" />
                                </li>
                                <li className="carousel-slide-why">
                                    <img src={Train} alt="" />

                                </li>
                                <li classNmae="carausel-slide-why">
                                    <img src={Branchbeach} alt="" />
                                </li>
                                <li classNmae="carausel-slide-why">
                                    <img src={Cow} alt="" />
                                </li>
                                <li classNmae="carausel-slide-why">
                                    <img src={Turtle} alt="" />
                                </li>
                                <li classNmae="carausel-slide-why">
                                    <img src={Pill} alt="" />
                                </li>

                            </ul>
                        </div>
                        <button type="button" className="carousel-button-why">
                            <i className="bi bi-arrow-left-circle"></i>
                        </button>
                    </div> */}
                    <div id="carouselExampleIndicators" className="carousel slide slide-why" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={Fish} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Train} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Branchbeach} alt="Third slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Cow} alt="Third slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Turtle} alt="Third slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Pill} alt="Third slide" />
                            </div>

                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
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
