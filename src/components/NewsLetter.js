import React, { Component } from "react";

import firebase from "../firebase/firebase";

export default class NewsLetter extends Component {
  constructor(props) {
    super(props);

    this.auth = firebase.auth();
    this.db = firebase.firestore();

    this.state = {
      firsnameNews: "",
      lastnameNews: "",
      emailNews: "",
      loadingNews: false,
      alertSub: false
    };
  }
  async onSignUp(e) {
    e.preventDefault();
    if (this.state.firstnameNews && this.state.lastnameNews && this.state.emailNews) {
      this.setState({ loading: true })
      this.setState({ alertSub: false })
      try {
        const {
          firstnameNews,
          lastnameNews,
          emailNews
        } = this.state;
        await this.db.collection("newsletter").doc.set({
          firstnameNews,
          lastnameNews,
          emailNews,
        })
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
      // firstnameNews,
      // lastnameNews,
      // emailNews,
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
                  <input value={this.state.firstnameNews} onChange={(e) => this.setState({ firstnameNews: e.target.value })}
                    type="text" id="fname" name="firstname"></input>
                </div>
                <div className="lastname">
                  <label>Last Name:</label>
                  <input value={this.state.lastnameNews} onChange={(e) => this.setState({ lastnameNews: e.target.value })} type="text" id="lname" name="lastname"></input>
                </div>
              </div>
              <div className="email">
                <label value={this.state.emailNews} onChange={(e) => this.setState({ emailNews: e.target.value })}>Email:</label>
                <input type="email" id="email" name="email"></input>
              </div>


              {loading ? <div className="subButton">
                <button type="submit"><div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div></button>
              </div> : <div className="subButton">
                  <button type="submit">Subscribe</button>
                </div>}

            </div>
          </div>

          {alertSub ? <div className="alert alert-danger" role="alert">
            <h3>Please make sure you entered your first and last name with email</h3>
          </div> : <div></div>}
        </form>
      </div >
    );
  }
}
