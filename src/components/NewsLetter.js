import React, { Component } from "react";

import firebase from "../firebase/firebase";

export default class NewsLetter extends Component {
  constructor(props) {
    super(props);

    this.auth = firebase.auth();
    this.db = firebase.firestore();

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      loadingNews: false,
      alertSub: false
    };
  }
  async onSignUp(e) {
    e.preventDefault();
    console.log('States check:', this.state);
    if (this.state.firstname && this.state.lastname && this.state.email) {
      const {
        firstname,
        lastname,
        email,
      } = this.state;

      this.setState({ loading: true })
      this.setState({ alertSub: false })

      try {
        await this.db.collection("newsletter").doc(email).set({
          firstname,
          lastname,
          email,
        });
      } catch (err) {
        console.log(err)
        this.setState({ alertSub: true })
      }

      this.setState({ loading: false })

    } else {
      this.setState({ alertSub: true })
    }
  }


  render() {
    const {
      firstname,
      lastname,
      email,
      loading,
      alertSub
    } = this.state;

    return (
      <div>
        <form onSubmit={(e) => this.onSignUp(e)} className="newsLetter">
          <div className="newsLetter-container">
            <div className="desc-container">
              <h3>Subscribe to Our NewsLetter</h3>
              <h5>
                Our best reads and tips for living the reduction <br />
                lifestyle. Subscribe here, and <br />
                become an Oceaneer later!
              </h5>
            </div>

            <div className="inputs-container">
              <div className="input-names">
                <div className="firstname">
                  <label>First Name:</label>
                  <input value={firstname} onChange={(e) => this.setState({ firstname: e.target.value })}
                    type="text" id="fname" name="firstname"></input>
                </div>
                <div className="lastname">
                  <label>Last Name:</label>
                  <input value={lastname} onChange={(e) => this.setState({ lastname: e.target.value })} type="text" id="lname" name="lastname"></input>
                </div>
              </div>
              <div className="email">
                <label>Email:</label>
                <input  value={email} onChange={(e) => this.setState({ email: e.target.value })} type="email" id="email" name="email"></input>
              </div>

              <div className="subButton">
                {loading ?
                  <button type="submit">
                    <div className="spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </button>
                  :
                  <button type="submit">Subscribe</button>
                }
              </div>
            </div>
          </div>

          {alertSub ?
            <div className="alert alert-danger" role="alert">
              <h3>Please make sure you entered your first and last name with email</h3>
            </div>
            :
            <div></div>
          }

        </form>
      </div >
    );
  }
}
