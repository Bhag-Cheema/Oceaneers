import React, { Component } from "react";

export default class JoinUs extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="repeating-h1-join text-center">
            What it Takes to Be an Oceaneer
          </h1>
          <p className="card-headers">From Anywhere and Everywhere...</p>
        </div>
        <div>Cards</div>
        <div>
          <p className="card-headers">If Cape Town is Your Home Base...</p>
        </div>
        <div>Cards</div>
        <div>
          <p className="card-headers">
            If You’re Keen to Get More Involved Locally...
          </p>
        </div>
        <div>Cards</div>
        <div>
          <h1 className="repeating-h1-join text-center">
            {" "}
            Ready to Commit? Sign Up Here!{" "}
          </h1>
        </div>
        <div className="form-field-card">
          <h2 className="form-title-join">Become an Oceaneer today.</h2>
          <p className="form-subtitle-join">Already have an account? Log in</p>
          <form action="where-form-gets-sent-need-to-change">
            <div className="two-column-left">
              <label
                for="exampleFormControlInput1"
                className="form-label join-us-form-labels"
              >
                First Name
              </label>
              <input type="text" className="left-col" />
            </div>
            <div className="two-column-right">
              <label
                for="exampleFormControlInput1"
                className="form-label join-us-form-labels"
              >
                Last Name
              </label>
              <input type="text" className="right-col" />
            </div>

            <div className="two-column-left">
              <label
                for="exampleFormControlInput1"
                className="form-label join-us-form-labels"
              >
                City
              </label>
              <input type="text" className="left-col" />
            </div>
            <div className="two-column-right">
              <label
                for="exampleFormControlInput1"
                className="form-label join-us-form-labels"
              >
                Country
              </label>
              <input type="text" className="right-col" />
            </div>

            <div className="full-col">
              <label
                for="exampleFormControlInput1"
                className="form-label join-us-form-labels"
              >
                Email
              </label>
              <input type="email" className="full-width" />
            </div>

            <div className="full-col">
              <label
                for="exampleFormControlInput1"
                className="form-label join-us-form-labels"
              >
                Phone
              </label>
              <input type="number" className="full-width" />
            </div>

            <div className="full-col">
              <label
                for="exampleFormControlInput1"
                className="form-label join-us-form-labels"
              >
                How did you hear about us?
              </label>
              <input type="text" className="full-width" />
            </div>

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

              <div className="form-check d-flex align-items-center">
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
                  Raising awareness and embarking on a reduction journey
                </label>
              </div>
              <div className="form-check d-flex align-items-center">
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

              <div className="form-check d-flex align-items-center">
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

            <button className="sign-up-btn">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}
