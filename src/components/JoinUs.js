import React, { Component } from "react";
import { Link } from "react-router-dom";

import Footer from "./Footer";

import makeitofficial from "../imgs/Joinus/(1)makeitoffical.jpg";
import committoyour from "../imgs/Joinus/(2)commit to your .jpg";
import payr50 from "../imgs/Joinus/(3) pay R50.jpg";
import getaccess from "../imgs/Joinus/(4) get access.jpg";
import joinoursalty from "../imgs/Joinus/(5)join our salty.jpg";
import beactive from "../imgs/Joinus/(6) be active.jpg";

export default class JoinUs extends Component {
  render() {
    return (
      <div>
        {/* Header Video */}
        <div>
          <p className="join-us-body">
            Oceaneers are committed to reducing our consumption of industrially
            fished and farmed animal products, raising awareness on how our food
            choices impact the ocean, and keeping the oceans as clean and
            healthy as possible.
          </p>
        </div>

        {/* Repeating h1 */}
        <div>
          <h1 className="repeating-h1-join text-center">
            What it Takes to Be an Oceaneer
          </h1>
          <p className="card-headers">From Anywhere and Everywhere...</p>
        </div>

        {/* row 1 */}

        <div className="row">
          {/* Card 1: make it official */}
          <div className="col joinus-image-left-col ">
            <img
              src={makeitofficial}
              className="card-img-top join-us-image"
              alt="..."
            />
            <p className="joinus-card-text">
              Make it official and take the pledge.
            </p>
            <button className="d-flex justify-content-center align-items-center joinus-card-btn">
              Sign up Now
            </button>
          </div>

          {/* Card 2:commit */}
          <div className="col joinus-image-right-col ">
            <img
              src={committoyour}
              className="card-img-top join-us-image"
              alt="..."
            />
            <p className="joinus-card-text">
              Commit to your reduction journey and share your progress.
            </p>
            <button className="joinus-card-btn d-flex justify-content-center align-items-center">
              Ways to Reduce
            </button>
          </div>
        </div>

        <div>
          <p className="card-headers">If Cape Town is Your Home Base...</p>
        </div>
        {/* row 2 */}
        <div className="row">
          {/* Card 3 */}
          <div className="col joinus-image-left-col">
            <img
              src={payr50}
              className="card-img-top join-us-image"
              alt="..."
            />
            <p className="joinus-card-text">
              Pay the R50 sign-up fee and receive a Welcome Pack.
            </p>
            <p className="check-email-card3">(Check your email)</p>
          </div>

          {/* Card 4 */}
          <div className="col joinus-image-right-col">
            <img
              src={getaccess}
              className="card-img-top join-us-image"
              alt="..."
            />
            <p className="joinus-card-text">
              Get access to discounts from our local brand community.
            </p>
            <Link
              to="/partners"
              className="d-flex justify-content-center align-items-center"
            >
              <button className="joinus-card-btn">Brand Partners</button>
            </Link>
          </div>
        </div>
        <div>
          <p className="card-headers">
            If You’re Keen to Get More Involved Locally...
          </p>
        </div>
        {/* row 3 */}
        <div className="row">
          {/* Card 5 */}
          <div className="col joinus-image-left-col">
            <img
              src={joinoursalty}
              className="card-img-top join-us-image"
              alt="..."
            />
            <p className="joinus-card-text">
              Join our Salty Gatherings and meet your fellow Oceaneers.
            </p>
            <Link
              to="/events"
              className="d-flex justify-content-center align-items-center"
            >
              <button class="joinus-card-btn">View Events</button>
            </Link>
          </div>

          {/* Card 6 */}
          <div className="col joinus-image-right-col">
            <img
              src={beactive}
              className="card-img-top join-us-image"
              alt="..."
            />
            <p className="joinus-card-text">
              Join our Salty Gatherings and meet your fellow Oceaneers.
            </p>
          </div>
        </div>
        <div>
          <h1 className="repeating-h1-join text-center">
            {" "}
            Ready to Commit? Sign Up Here!{" "}
          </h1>
        </div>

        {/* Form Card */}
        <div className="form-field-card">
          <h2 className="form-title-join">Become an Oceaneer today.</h2>
          <p className="form-subtitle-join">Already have an account? Log in</p>
          <form id="sign-up-form">
            {/* Column 1: first and last name */}
            <div className="row input-rows">
              <div className="col">
                <label
                  for="exampleFormControlInput1"
                  className="form-label join-us-form-labels"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control left-col"
                  aria-label="First name"
                />
              </div>
              <div className="col">
                <label
                  for="exampleFormControlInput1"
                  className="form-label join-us-form-labels"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control right-col"
                  aria-label="Last name"
                />
              </div>
            </div>
            {/* end */}
            {/* Row 2: city & country */}
            <div className="row input-rows">
              <div className="col">
                <label
                  for="exampleFormControlInput1"
                  className="form-label join-us-form-labels"
                >
                  City
                </label>
                <input
                  type="text"
                  className="form-control left-col"
                  aria-label="First name"
                />
              </div>
              <div className="col">
                <label
                  for="exampleFormControlInput1"
                  className="form-label join-us-form-labels"
                >
                  Country
                </label>
                <input
                  type="text"
                  className="form-control right-col"
                  aria-label="Last name"
                />
              </div>
            </div>
            {/* end */}
            {/* Row 3 */}
            <div className="full-col">
              <label
                for="exampleFormControlInput1"
                className="form-label join-us-form-labels"
              >
                Email
              </label>
              <input type="email" className="full-width" />
            </div>
            {/* Row 4 */}
            <div className="full-col">
              <label
                for="exampleFormControlInput1"
                className="form-label join-us-form-labels"
              >
                Phone
              </label>
              <input type="number" className="full-width" />
            </div>
            {/* Row 5 */}
            <div className="full-col">
              <label
                for="exampleFormControlInput1"
                className="form-label join-us-form-labels"
              >
                How did you hear about us?
              </label>
              <input type="text" className="full-width" />
            </div>
            {/* Row 6 */}
            <div className="full-col">
              <label
                for="exampleFormControlTextarea1"
                className="form-label join-us-form-labels"
              >
                Why do you want to be an Oceaneer? (1-2 sentences)
              </label>
              <textarea
                type="text"
                className="full-width"
                id="textarea"
                rows="4"
              ></textarea>
            </div>

            {/* Radio Button */}
            <div className="radio-boxes">
              <div className="join-us-form-labels mb-2">
                What kind of Oceaneer do you want to be? (Don’t worry, you can
                change this choice down the line)
              </div>
              <div className="form-check d-flex justify-content-left">
                <input
                  className="form-check-input radio-button"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label join-us-form-checkboxes"
                  for="flexRadioDefault1"
                >
                  Passive (“I am inspired to start my reduction journey but
                  don’t have the time to join meet-ups”)
                </label>
              </div>
              <div className="form-check d-flex justify-content-left">
                <input
                  className="form-check-input radio-button"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label
                  className="form-check-label join-us-form-checkboxes"
                  for="flexRadioDefault2"
                >
                  Active (“I am keen to meet my fellow Oceaneers and contribute
                  actively”)
                </label>
              </div>
            </div>
            {/* Checkboxes */}
            <div className="checkboxes">
              <div className="join-us-form-labels mt-4">
                As an Oceaneer, I am committed to (required)
              </div>

              <div className="form-check d-flex">
                <input
                  className="form-check-input checkbox-join"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label
                  className="form-check-label join-us-form-checkboxes"
                  for="flexCheckChecked"
                >
                  Raising awareness and embarking on a reduction journey
                </label>
              </div>
              <div className="form-check d-flex">
                <input
                  className="form-check-input checkbox-join"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label
                  className="form-check-label join-us-form-checkboxes"
                  for="flexCheckChecked"
                >
                  Paying a R50 sign-up fee
                </label>
              </div>
              <div className="form-check d-flex">
                <input
                  className="form-check-input checkbox-join"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label join-us-form-checkboxes"
                  for="flexCheckDefault"
                >
                  Filling out a monthly survey to keep track of reduction
                  journey
                </label>
              </div>
            </div>
            <button className="sign-up-btn" type="submit">
              Sign Up
            </button>
          </form>
        </div>

        <Footer />
      </div>
    );
  }
}
