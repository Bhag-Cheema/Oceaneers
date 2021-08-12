import React, { Component } from "react";
import { Link } from "react-router-dom";

import Facebook from "../imgs/Footer/Facebook.png";
import Instagram from "../imgs/Footer/Instagram.png";

import Footer from "./Footer";
import Navbar from "./NavBar";
import Newsletter from "./NewsLetter";

import checkmark from "../imgs/Joinus/orangecardcheck.png";

import firebase from "../firebase/firebase";

export default class JoinUs extends Component {
  constructor(props) {
    super(props);

    this.auth = firebase.auth(); // email and password
    this.db = firebase.firestore(); // users data like name phone etc

    this.state = {
      firstname: "",
      lastname: "",
      city: "",
      country: "",
      email: "",
      password: "",
      phone: "",
      how: "",
      why: "",
      passive: false,
      active: false,
      raise: false,
      pay: false,
      fill: false,
      error: "",
      loading: false,
      alert: false,
      success: false,
    };
  }

  handlePassiveClicked = () => {
    this.setState({ passive: !this.state.passive });
  };

  handleActiveClicked = () => {
    this.setState({ active: !this.state.active });
  };

  handleRaiseClicked = () => {
    this.setState({ raise: !this.state.raise });
  };

  handlePayClicked = () => {
    this.setState({ pay: !this.state.pay });
  };

  handleFillClicked = () => {
    this.setState({ fill: !this.state.fill });
  };

  handleSuccuessClicked = () => {
    this.setState({ success: false });
  };

  async onJoin(e) {
    e.preventDefault();
    if (
      (this.state.passive || this.state.active) &&
      this.state.raise &&
      this.state.pay &&
      this.state.fill
    ) {
      this.setState({ alert: false });
      this.setState({ loading: true });
      try {
        const {
          firstname,
          lastname,
          city,
          country,
          email,
          password,
          phone,
          how,
          why,
          passive,
          active,
        } = this.state;
        const cred = await this.auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await this.db.collection("members").doc(cred.user.uid).set({
          firstname,
          lastname,
          phone,
          city,
          country,
          email,
          how,
          why,
          passive,
          active,
        });
        this.props.history.push("/joinus");
        console.log(cred.user);
      } catch (err) {
        this.setState({ error: err.message });
        this.setState({ alert: true });
      }

      this.setState({ success: true });
      this.setState({ loading: false });
    } else {
      this.setState({ alert: true });
    }
  }

  // front end
  render() {
    const {
      firstname,
      lastname,
      city,
      country,
      email,
      password,
      phone,
      how,
      why,
      passive,
      active,
      raise,
      pay,
      fill,
      loading,
      alert,
      success,
    } = this.state;
    return (
      <div>
        {/* Header Video */}
        <Navbar />
        <section className="header-image-joinus">
          <div className="d-flex justify-content-center flex-column align-item-center text-white text-center">
            <h1 className="joinus-cabin-large">Join The Oceaneer Community</h1>
            <p className="joinus-cabin-small"> Stoked to have you here.</p>
          </div>
        </section>
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
        </div>

        <p className="card-headers">From Anywhere and Everywhere...</p>
        <div className="join-us-cards">
          <div className="join-card">
            <div className="make-card-itself">
              <h5 className="join-card-text">
                Make it official and take the pledge.
              </h5>
              <a href="#sign-up-form" style={{ textDecoration: "none" }}>
                <button className="d-flex justify-content-center align-items-center joinus-card-btn">
                  Sign up Now
                </button>
              </a>
            </div>
          </div>
          <div className="join-card">
            <div className="commit-card-itself">
              <h5 className="join-card-text">
                Commit to your reduction journey and share your progress.
              </h5>
              <a href="#ways-to-reduce" style={{ textDecoration: "none" }}>
                <button className="d-flex justify-content-center align-items-center joinus-card-btn">
                  Ways to Reduce
                </button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="card-headers">If Cape Town is Your Home Base...</p>
        </div>
        <div className="join-us-cards">
          <div className="join-card">
            <div className="pay-card-itself">
              <h5 className="join-card-text">
                Pay the R50 sign-up fee and receive a Welcome Pack.
              </h5>
              <p className="check-email-card3">(Check your email)</p>
            </div>
          </div>
          <div className="join-card">
            <div className="get-card-itself">
              <h5 className="join-card-text">
                Commit to your reduction journey and share your progress.
              </h5>
              <Link
                to="/partners"
                style={{ textDecoration: "none" }}
                className="d-flex justify-content-center align-items-center"
              >
                <button className="joinus-card-btn">Brand Partners</button>
              </Link>
            </div>
          </div>
        </div>
        <p className="card-headers">
          If You’re Keen to Get More Involved Locally...
        </p>
        <div className="join-us-cards">
          <div className="join-card">
            <div className="salty-card-itself">
              <h5 className="join-card-text">
                Join our Salty Gatherings and meet your fellow Oceaneers.
              </h5>
              <Link
                to="/events"
                style={{ textDecoration: "none" }}
                className="d-flex justify-content-center align-items-center"
              >
                <button class="joinus-card-btn">View Events</button>
              </Link>
            </div>
          </div>
          <div className="join-card">
            <div className="active-card-itself">
              <h5 className="active-card-text">
                Commit to your reduction journey and share your progress.
              </h5>
            </div>
          </div>
        </div>

        <div>
          <h1 className="repeating-h1-join text-center">
            {" "}
            Ready to Commit? Sign Up Here!{" "}
          </h1>
        </div>

        {/* Form Card */}

        {success ? (
          <div className="card sign-up-popup">
            <i
              onClick={() => this.handleSuccuessClicked()}
              className="bi bi-plus-circle"
            ></i>
            <h1 className="sign-up-card-header">Success, you’ve made it! </h1>
            <img id="checkmark" src={checkmark} alt="checkmark" />
            <h2 className="sign-up-card-h2">
              Thank you for signing up to be an Oceaneer!
            </h2>
            <hr className="blue-line" />
            <h3 className="sign-up-card-h3">
              You will soon be added to a WhatsApp groupchat with other
              Oceaneers.
            </h3>
            <h3 className="sign-up-card-h3">
              Check your inbox for an email coming soon.{" "}
            </h3>
            <p className="sign-up-card-p">
              You will receive more information on paying your R50 membership
              fee, using your membership card that gives you access to the brand
              community discounts, starting your reduction journey, and going to
              regular Salty Gatherings that are exclusive to Oceaneer members.
            </p>
            <h3 className="sign-up-card-h3-raleway">
              Follow us on social media!
            </h3>
            <div className="social-icons-pop-up">
              <Link
                to={{ pathname: "https://www.instagram.com/oceaneers.co/" }}
                target="_blank"
              >
                <img
                  className="instagram-pop-up"
                  src={Instagram}
                  alt="instagram logo"
                />
              </Link>
              <Link
                to={{ pathname: "https://www.facebook.com/oceaneers.co/" }}
                target="_blank"
              >
                <img
                  className="facebook-pop-up"
                  src={Facebook}
                  alt="instagram logo"
                />
              </Link>
            </div>
          </div>
        ) : (
          <div className="form-field-card">
            <h2 className="form-title-join">Become an Oceaneer today.</h2>
            <p className="form-subtitle-join">
              Already have an account? Log in
            </p>
            <form onSubmit={(e) => this.onJoin(e)} id="sign-up-form">
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
                    value={firstname}
                    onChange={(e) =>
                      this.setState({ firstname: e.target.value })
                    }
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
                    value={lastname}
                    onChange={(e) =>
                      this.setState({ lastname: e.target.value })
                    }
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
                    value={city}
                    onChange={(e) => this.setState({ city: e.target.value })}
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
                    value={country}
                    onChange={(e) => this.setState({ country: e.target.value })}
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
                <input
                  value={email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  type="email"
                  className="full-width"
                />
              </div>
              {/* Row 4 */}
              <div className="full-col">
                <label
                  for="exampleFormControlInput1"
                  className="form-label join-us-form-labels"
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                  type="password"
                  className="full-width"
                />
              </div>
              {/* Row 5 */}
              <div className="full-col">
                <label
                  for="exampleFormControlInput1"
                  className="form-label join-us-form-labels"
                >
                  Phone
                </label>
                <input
                  value={phone}
                  onChange={(e) => this.setState({ phone: e.target.value })}
                  type="number"
                  className="full-width"
                />
              </div>
              {/* Row 5 */}
              <div className="full-col">
                <label
                  for="exampleFormControlInput1"
                  className="form-label join-us-form-labels"
                >
                  How did you hear about us?
                </label>
                <input
                  value={how}
                  onChange={(e) => this.setState({ how: e.target.value })}
                  type="text"
                  className="full-width"
                />
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
                  value={why}
                  onChange={(e) => this.setState({ why: e.target.value })}
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

                {/*Passive*/}
                <div className="form-check d-flex justify-content-left">
                  <input
                    value={passive}
                    onChange={() => this.handlePassiveClicked()}
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
                    value={active}
                    onChange={() => this.handleActiveClicked()}
                    className="form-check-input radio-button"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label join-us-form-checkboxes"
                    for="flexRadioDefault2"
                  >
                    Active (“I am keen to meet my fellow Oceaneers and
                    contribute actively”)
                  </label>
                </div>
              </div>
              {/* Checkboxes */}
              <div className="checkboxes">
                <div className="join-us-form-labels mt-4">
                  As an Oceaneer, I am committed to{" "}
                  <p className="required-orange">(required)</p>
                </div>

                {/*Raise*/}
                <div className="form-check d-flex">
                  <input
                    className="form-check-input checkbox-join"
                    type="checkbox"
                    value={raise}
                    onChange={() => this.handleRaiseClicked()}
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
                    value={pay}
                    onChange={() => this.handlePayClicked()}
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label join-us-form-checkboxes"
                    for="flexCheckChecked"
                  >
                    Paying a R50 sign-up fee
                  </label>
                </div>

                {/*Fill*/}
                <div className="form-check d-flex">
                  <input
                    className="form-check-input checkbox-join"
                    type="checkbox"
                    value={fill}
                    onChange={() => this.handleFillClicked()}
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

              {/*Sign Up Button*/}

              {loading ? (
                <button className="sign-up-btn" type="submit">
                  {" "}
                  <div className="spinner-border text-dark" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>{" "}
                </button>
              ) : (
                <button className="sign-up-btn" type="submit">
                  Sign Up
                </button>
              )}

              {alert ? (
                <div class="alert alert-danger" role="alert">
                  Please make sure you filled out all the requirements!
                </div>
              ) : (
                <div></div>
              )}
            </form>
          </div>
        )}

        <div id="ways-to-reduce">
          <div className="reduce-title">
            <h1 className="reduce-title">Ways To Reduce</h1>
            <p className="reduce-text">
              We hope that you’ve already signed up to our newsletter, or
              followed us on our socials. Now we can support you on your
              reduction journey with inspiring content.
            </p>
          </div>
          <div className="accordion-joinus" id="accordionExample">
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="button-accordion-joinus collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Be Curious
                  <i className="bi bi-plus-circle plus-icon-joinus"></i>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <p className="accordion-body-title-joinus">
                  Ask where the products are from!{" "}
                </p>
                <p className="accordion-body-joinus">
                  Next time you’re grocery shopping or eating at a restaurant,
                  consider going for the plant-based option, or animal products
                  that come from ethical farms (careful with labels – many of
                  them are misleading). See just a few products we love below.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-joinus" id="accordionExample">
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="button-accordion-joinus collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Join a Challange
                  <i className="bi bi-plus-circle plus-icon-joinus"></i>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <p className="accordion-body-title-joinus">
                  Who doesn't like a crowded line-up?{" "}
                </p>
                <div className="accordion-body-joinus">
                  Jokes aside, joining a challenge is a great way to keep
                  yourself motivated and held accountable by others. Keep
                  looking for some of our favourite campaigns. You’ll get plenty
                  of awesome guidance along the way!
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-joinus" id="accordionExample">
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="button-accordion-joinus collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Donate Now
                  <i className="bi bi-plus-circle plus-icon-joinus"></i>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <p className="accordion-body-title-joinus">
                  We get it. It can be really hard to reduce.
                </p>
                <div className="accordion-body-joinus">
                  Consider donating to organizations that protect our planet
                  (animal welfare, ocean conservation, etc.). We estimate that
                  ‘ethical’ animal products are usually 5-10 times more
                  expensive than industrial goods.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Newsletter /> */}
        <Footer />
      </div>
    );
  }
}
