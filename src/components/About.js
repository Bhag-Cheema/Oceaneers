import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "./NavBar";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";

import ambassador1circle from "../imgs/aboutus/ambassador1circle.png";
import ambassador2 from "../imgs/aboutus/ambassador2.png";
import ambassador3 from "../imgs/aboutus/ambassador3.png";
import ambassador4 from "../imgs/aboutus/ambassador4.png";

import team1 from "../imgs/aboutus/team1.png";
import team2 from "../imgs/aboutus/team2.png";
import team3 from "../imgs/aboutus/team3.png";

import iggy from "../imgs/aboutus/iggy.png";

export default class Partners extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* Header image w text */}
        <section className="header-image-about">
          <div className=" d-flex justify-content-center flex-column align-item-center text-white text-center">
            <p className="header-about">About Us</p>
            <p className="header-text-about">
              Join a community of like-minded people who share a passion for the
              ocean and are committed to reducing their consumption of animal
              products.
            </p>
          </div>
        </section>
        {/* Join us button */}
        <div className="d-flex justify-content-center">
          <Link to="/joinus">
            <button className="learn-how-about">
              Want to Join? Learn how.
            </button>
          </Link>
        </div>
        {/* Why We Started */}
        <div className="card text-center border-0">
          <h1 className="repeating-h1-about">Why We Started</h1>
          <h2 className="repeating-h3-iggy">
            We created Oceaneers as a community-driven initiative because we
            believe changing our food choices is the most powerful lever to make
            oceans more sustainable, reduce suffering worldwide, and take better
            care of our Oceans.
          </h2>
          <h2 className="repeating-h3-iggy">
            The urge to share this information with our fellow Ocean-dwellers
            and inspire a reduction-based journey blossomed. Thus, we decided to
            put other work projects on stand-by and dedicate our full time and
            energy towards this cause.
          </h2>
        </div>

        {/* Ambassadors */}
        <div className="container-about">
          <h1 className="repeating-h1-1-about">Ambassadors</h1>
          <div className="row mx-auto">
            <div className="col-sm">
              <img
                src={ambassador1circle}
                className="rounded-circle-ambassador"
                alt="..."
              />
              <h2 className="repeating-h2-about d-flex justify-content-center">
                James Taylor
              </h2>
              <div
                className="accordion-about about d-flex justify-content-center"
                id="accordionExample-James"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-James">
                    <button
                      className="button-accordion-about"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne-James"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      {" "}
                      Learn More
                    </button>
                  </h2>
                </div>
              </div>
            </div>

            {/* end */}
            {/* Tammy Fry */}
            <div className="col-sm">
              <img
                src={ambassador2}
                className="rounded-circle-ambassador "
                alt="..."
              />

              <h2 className="repeating-h2-about d-flex justify-content-center">
                Tammy Fry
              </h2>
              <div
                className="accordion-about d-flex justify-content-center"
                id="accordionExample-Tammy"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-Tammy">
                    <button
                      className="button-accordion-about"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne-Tammy"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      {" "}
                      Learn More
                    </button>
                  </h2>
                </div>
              </div>
            </div>
            {/*Terence Ball*/}
            <div className="col-sm">
              <img
                src={ambassador3}
                className="rounded-circle-ambassador "
                alt="..."
              />
              <h2 className="repeating-h2-about d-flex justify-content-center">
                Terence Bell
              </h2>
              <div
                className="accordion-about d-flex justify-content-center"
                id="accordionExample-Terence"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-Terence">
                    <button
                      className="button-accordion-about"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne-Terence"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      {" "}
                      Learn More
                    </button>
                  </h2>
                </div>
              </div>
            </div>
            {/*Emi Koch */}
            <div className="col-sm">
              <img
                src={ambassador4}
                className="rounded-circle-ambassador"
                alt="..."
              />
              <h2 className="repeating-h2-about d-flex justify-content-center">
                Emi Koch
              </h2>
              <div
                className="accordion-about d-flex justify-content-center"
                id="accordionExample-Emi"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-Emi">
                    <button
                      className="button-accordion-about"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne-Emi"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      {" "}
                      Learn More
                    </button>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Display Button James */}
        <div
          id="collapseOne-James"
          className="accordion-collapse collapse"
          aria-labelledby="heading-James"
          data-bs-parent="#accordionExample-James"
        >
          <div className="accordion-body-about">
            <div className="container-2 d-flex justify-content-center">
              <div className="row">
                <div className="col-4">
                  <div className="card-ambassador">
                    <img
                      id="cirlce-2"
                      src={ambassador1circle}
                      className="rounded-circle-am"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-8">
                  <h2 className="repeating-h2-name">James Taylor</h2>
                  <h3 className="h3-about">
                    Big-wave Surfer, Foiler, Spear-fisherman, Entrepreneur
                  </h3>
                  <h3 className="h3-description">
                    Unlike most big wave surfers, James didn’t grow up at the
                    ocean but in the middle of South Africa. After catching his
                    first wave at the mature age of 12, nothing could keep him
                    away from the salty playground anymore and he’s taken full
                    advantage of it ever since. This even lead to James’s
                    participation in the WSL Big Wave Tour in 2015/2016 where he
                    competed with the best big wave surfers on waves. But in
                    January 2016, James had the wipeout of his life at Jaws
                    (Hawaii) when his eardrum and inflation vest burst and his
                    leash snapped—pretty much the worst-case-scenario. Luckily
                    he survived it, and many other precarious moments in the
                    ocean, for example when he broke his back surfing a “small”
                    wave in Cape Town. His relationship with the sea doesn’t
                    stop at surfing though. He kitesurfs, windsurfs, SUPs,
                    spearfishes, swims and has increasingly often been spotted
                    on foils out in the Southern African ocean. We seriously
                    couldn’t think of a better first ambassador for Oceaneers
                    than James—stoked to have you on board! <br />
                  </h3>
                  <button className="interview">
                    View the full interview with James
                  </button>
                  <div className="social-media d-flex justify-content-center">
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-facebook"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Display Button Tammy Fry */}
        <div
          id="collapseOne-Tammy"
          className="accordion-collapse collapse"
          aria-labelledby="heading-Tamy"
          data-bs-parent="#accordionExample-Tammy"
        >
          <div className="accordion-body-about">
            <div className="container-2 d-flex justify-content-center">
              <div className="row">
                <div className="col-4">
                  <div className="card-ambassador">
                    <img
                      id="cirlce-2"
                      src={ambassador2}
                      className="rounded-circle-am"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-8">
                  <h2 className="repeating-h2-name">Tammy Fry</h2>
                  <h3 className="h3-about">
                    Surfer, Karateka, Blogger, Marketeer, Advocate, Influencer
                  </h3>
                  <h3 className="h3-description">
                    You do not want to drop in on Tammy Fry. Karate runs through
                    her veins. She’s won multiple South African National
                    Championships, the 2017 Australian Open, and is a Queensland
                    karate champion. In addition, she’s a self-defence coach,
                    runs regular workshops and writes blogs where she shares her
                    deep knowledge around plant-based nutrition. Having grown up
                    in Durban and now living on the Sunshine Coast, Tammy has
                    never strayed away for her love for the oceans. When Tammy
                    isn’t in the water, she runs the Marketing department of
                    Fry’s Family Foods, the iconic producer of plant-based foods
                    founded by her father in 1991. She is also the director of
                    Meat Free Mondays in Australia and South Africa, often found
                    speaking on national and international stages and staying
                    true to her motto “Spread love everywhere you go. Let no one
                    come to you without leaving happier” (Mother Teresa). Tammy,
                    we’re excited to have you on board, may your energy,
                    compassion and experience inspire lots of Oceaneers in their
                    reduction journey! <br />
                  </h3>
                  <button className="interview">
                    View the full interview with Tammy
                  </button>
                  <div className="social-media d-flex justify-content-center">
                    <i className="bi bi-instagram "></i>
                    <i className="bi bi-facebook"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Display Button Terence Bell */}
        <div
          id="collapseOne-Terence"
          className="accordion-collapse collapse"
          aria-labelledby="heading-Terence"
          data-bs-parent="#accordionExample-Terence"
        >
          <div className="accordion-body-about">
            <div className="container-2 d-flex justify-content-center">
              <div className="row">
                <div className="col-4">
                  <div className="card-ambassador">
                    <img
                      id="cirlce-2"
                      src={ambassador3}
                      className="rounded-circle-am"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-8">
                  <h2 className="repeating-h2-name">Terence Bell</h2>
                  <h3 className="h3-about">
                    Waterman, Endurance Athlete, Ocean-advocate, Investor
                  </h3>
                  <h3 className="h3-description">
                    Terence is an Australia-raised, passionate waterman and
                    endurance athlete. Nature has always been a significant part
                    of his life; the wild stillness of the ocean brings him back
                    to a natural state of being. In early 2018, he launched a
                    passion project called The Ocean Lover where he aims to
                    create a deeper awareness with the ocean through sharing
                    personal stories, creating, and investing in ocean-related
                    projects. In fact, Terence swam around the Hawaiian Island
                    of Kauai, covering around 100 miles (180km) and swimming
                    about 5 hours per day. This solo swim was a world-first and
                    had the intention of increasing global awareness about our
                    responsibilities as humans for the planet. He has partnered
                    with Sustainable Coastlines Hawaii (SCH), a non-profit
                    organization that works with local communities in Hawaii
                    andthe Seabin Project who provides a solution for plastic
                    and waste collection in marinas and ports. Terence, after
                    all the memories we've already had together, it's a huge joy
                    to know that you're part of this venture as well! <br />
                  </h3>
                  <button className="interview">
                    View the full interview with Terence
                  </button>
                  <div className="social-media d-flex justify-content-center">
                    <i className="bi bi-instagram "></i>
                    <i className="bi bi-facebook"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Display Button Emi Koch */}
        <div
          id="collapseOne-Emi"
          className="accordion-collapse collapse"
          aria-labelledby="heading-Emi"
          data-bs-parent="#accordionExample-Emi"
        >
          <div className="accordion-body-about">
            <div className="container-2 d-flex justify-content-center">
              <div className="row">
                <div className="col-4">
                  <div className="card-ambassador">
                    <img
                      id="cirlce-2"
                      src={ambassador4}
                      className="rounded-circle-am"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-8">
                  <h2 className="repeating-h2-name">Emi Koch</h2>
                  <h3 className="h3-about">
                    Surfer, Social Ecologist, Multimedia Storyteller, Founder
                  </h3>
                  <h3 className="h3-description">
                    Emi has created the reality that most of us are dreaming of:
                    getting paid to go surfing with Billabong. She overcame a
                    profound personal transformation when she taught science and
                    art in Mexico and Nepal monasteries. These two experiences
                    made her realize that she wants to advocate for a more
                    equitable world. At the tender age of 19, Emi started a
                    non-profit called Beyond The Surface International, an
                    initiative that “works at the local level with remote and
                    marginalized small-scale fishing communities for
                    social-ecological wellbeing.” Beyond the Surface has
                    partnered with coastal communities from Jamaica to India.
                    They use surfing, mindfulness and participatory media as
                    tools to engage local communities around marine
                    conservation, climate change adaption and social
                    environmental justice. Given her amazing work, Emi was named
                    2018 NatGeo Adventurer and 2019-2020 Fulbright NatGeo
                    Digital Storytelling Fellow. Emi, your work inspires us and
                    we’re eager to have you on our team! <br />
                  </h3>
                  <button className="interview">
                    View the full interview with Emi
                  </button>
                  <div className="social-media d-flex justify-content-center">
                    <i className="bi bi-instagram "></i>
                    <i className="bi bi-facebook"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="container-about">
          <h1 className="repeating-h1-1-about">Our Team</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
            <div className="col-md">
              <img src={team1} className="rounded-circle-team" alt="..." />
              <h2 className="repeating-h2-about d-flex justify-content-center">
                Kaspar Paur
              </h2>
              <h2 className="repeating-h3-about d-flex justify-content-center">
                Founder
              </h2>
              <div
                className="accordion-about d-flex justify-content-center"
                id="accordionExample-Kaspar"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-Kaspar">
                    <button
                      className="button-accordion-about"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne-Kaspar"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      {" "}
                      Learn More
                    </button>
                  </h2>
                </div>
              </div>
            </div>
            {/* end */}
            {/* Nathan Richardson */}
            <div className="col-md">
              <img src={team2} className="rounded-circle-team" alt="..." />
              <h2 className="repeating-h2-about d-flex justify-content-center">
                Nathan Richardson
              </h2>
              <h2 className="repeating-h3-about d-flex justify-content-center">
                Stoke Manager
              </h2>
              <div
                className="accordion-about d-flex justify-content-center"
                id="accordionExample-Nathan"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-Nathan">
                    <button
                      className="button-accordion-about"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne-Nathan"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      {" "}
                      Learn More
                    </button>
                  </h2>
                </div>
              </div>
            </div>
            {/*Andrea Fedder*/}
            <div className="col-md">
              <img src={team3} className="rounded-circle-team" alt="..." />
              <h2 className="repeating-h2-about d-flex justify-content-center">
                Andrea Fedder
              </h2>
              <h2 className="repeating-h3-about d-flex justify-content-center">
                (Alumni)
              </h2>
              <div
                className="accordion-about d-flex justify-content-center"
                id="accordionExample-Andrea"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-Andrea">
                    <button
                      className="button-accordion-about"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne-Andrea"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      {" "}
                      Learn More
                    </button>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Display Button Kaspar */}
        <div
          id="collapseOne-Kaspar"
          className="accordion-collapse collapse"
          aria-labelledby="heading-Kaspar"
          data-bs-parent="#accordionExample-Kaspar"
        >
          <div className="accordion-body-about">
            <div className="container-2 d-flex justify-content-center">
              <div className="row">
                <div className="col-4">
                  <div className="card-ambassador d-flex justify-content-center">
                    <img
                      id="cirlce-2"
                      src={team1}
                      className="rounded-circle-am"
                      alt="..."
                    />
                  </div>
                  <h4 className="h4 d-flex justify-content-center">
                    “No other human activity is as damaging to our <br /> living
                    planet as industrial fishing and livestock <br /> farming –
                    the challenge is that still few people <br />
                    are aware of that. ”
                  </h4>
                </div>
                <div className="col-8">
                  <h2 className="repeating-h2-name">Kaspar Paur</h2>
                  <h3 className="repeating-h3-team">Founder</h3>
                  <h3 className="h3-about">Kaspar’s Reduction Journey</h3>
                  <ul className="list">
                    <li className="il">
                      Arrives in South Africa in 2013 as an omnivore
                    </li>
                    <li className="il">
                      Learns about the impact of factory farming through locals,
                      reads Foer’s ‘Eating Animals’ and subsequently cuts out
                      meat and dairy
                    </li>
                    <li className="il">
                      Does his first Vipassana retreat (10-day silent meditation
                      based on Buddha’s teachings) in 2014, emerging even more
                      inpsired to reduce suffering of all living beings
                    </li>
                    <li className="il">
                      Becomes active in reduction advocacy, e.g. by collecting
                      signatures for a initiative to ban factory farming in
                      Switzerland
                    </li>
                    <li className="il">
                      Eats now 95% plant-based and enjoys each meal in which he
                      supports a flourishing plant-based food industry
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Display Button Nathan Richardson */}
        <div
          id="collapseOne-Nathan"
          className="accordion-collapse collapse"
          aria-labelledby="heading-Nathan"
          data-bs-parent="#accordionExample-Nathan"
        >
          <div className="accordion-body-about">
            <div className="container-2 d-flex justify-content-center">
              <div className="row">
                <div className="col-4">
                  <div className="card-ambassador">
                    <img
                      id="cirlce-2"
                      src={team2}
                      className="rounded-circle-am"
                      alt="..."
                    />
                  </div>
                  <h4 className="h4 d-flex justify-content-center">
                    “The oceans have shaped and moulded me into the person that
                    I am today. They have instilled in me a passion for nature
                    and all things living.”
                  </h4>
                </div>
                <div className="col-8">
                  <h2 className="repeating-h2-name">Nathan Richardson</h2>
                  <h3 className="repeating-h3-team">Founder</h3>
                  <h3 className="h3-about">Kaspar’s Reduction Journey</h3>
                  <ul className="ul">
                    <li className="il">
                    Just like any other SA boy, ate all the meat, all the time 
                    </li>
                    <li className="il">
                    A deep passion for the environment inspired his studies in Zoology 
                    and Ichthyology (Fishery Science) in 2010 and confronted by the harsh 
                    realities of the state of our natural world
                    </li>
                    <li className="il">
                    Exposure to a plant-based lifestyle made him realise a transition to a
                    plant-based diet was the best way to advocate for conservation and
                    sustainability
                    </li>
                    <li className="il">
                    Spent a year living a strictly plant-based lifestyle, moved towards a more flexi
                    approach while indulging in the occasional non-vegan treat
                    </li>
                    <li className="il">
                    Became a more conscious consumer and made decisions that aligned with personal values and
                    beliefs
                    </li>
                    <li className="il">
                    Now 95% plant-based, allowing for the odd human moment just to keep things light
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Display Button Andrea Fedder */}
        <div
          id="collapseOne-Andrea"
          className="accordion-collapse collapse"
          aria-labelledby="heading-Andrea"
          data-bs-parent="#accordionExample-Andrea"
        >
          <div className="accordion-body-about">
            <div className="container-2 d-flex justify-content-center">
              <div className="row">
                <div className="col-4">
                  <div className="card-ambassador">
                    <img
                      id="cirlce-2"
                      src={team3}
                      className="rounded-circle-am"
                      alt="..."
                    />
                  </div>
                  <h4 className="h4 d-flex justify-content-center">
                    “[The ocean] has been my reprieve from the world, <br />
                    my therapist and my coach and too often, <br />a best
                    friend."
                  </h4>
                </div>
                <div className="col-8">
                  <h2 className="repeating-h2-name">Andrea Fedder</h2>
                  <h3 className="repeating-h3-team">
                    Creator of Iggy, Content Force during First Year
                  </h3>
                  <h3 className="h3-about">Andrea's Reduction Journey</h3>
                  <ul>
                    <li className="il">
                      Was raised proper South African/German around the brain,{" "}
                      <br /> meat = mains
                    </li>
                    <li className="il">
                      Became aware of factory farming an inhumane animal
                      practices around age 21 (2007)
                    </li>
                    <li className="il">
                      Dabbled in various fully committed forms of vegetarian,
                      vegan, raw, pescatarian for a decade, while working in
                      food writing and later in ethical nature-oriented
                      industries, but never really felt comfortable in any
                      absolute diet-style
                    </li>
                    <li className="il">
                      Exposure to a plant-based lifestyle made him realise a
                      transition to a plant-based diet was the best way to
                      advocate for conservation and sustainability
                    </li>
                    <li className="il">
                      Switched back to fully vegetarian during serious yoga and
                      meditation studies
                    </li>
                    <li className="il">
                      Settled into flexitarianism in a 90% plant-based ratio in
                      2016 with flexibility around social situations and opting
                      for ethical wherever possible
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Iggy the Mascot */}
        <div className="card text-center border-0">
          <div className="text-center">
            <img src={iggy} className="rounded" alt="..." />
          </div>
          <h1 className="repeating-h1-about">Iggy, the Mascot</h1>
          <h2 className="repeating-h2-iggy">
            Who is He and Why Do We Love Him?
          </h2>
          <h3 className="repeating-h3-iggy">
            Meet Iggy, our Marine Iguana and Oceaneers mascot! Just like the
            community at Oceaneers, he’s devilishly good-looking, spends most of
            his time in the water, feasts on a plant-based diet, and doesn’t
            support industrialized animal farming and fishing. He is all about
            sustainability and saving the planet!
          </h3>
        </div>

        {/* <NewsLetter /> */}

        <Footer />
      </div> //end render class
    );
  }
}
