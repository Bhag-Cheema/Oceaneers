import React, { Component } from "react";
import firebase from "../firebase/firebase";

import AlertLogin from './AlertLogin';
import ButtonLogin from './ButtonLogin';

import Navbar from "./NavBar";




export default class Login extends Component {
  constructor(props) {
    super(props);

    this.auth = firebase.auth();

    this.state = {
      email: '',
      password: '',
      loading: false,
      error: '',
      alert: false
    };
  }

  async onLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ loading: true });

    try {
      await this.auth.signInWithEmailAndPassword(email, password);

      this.auth.onAuthStateChanged((user) => {
        if (user) {
          localStorage.setItem('user', user.Aa);
        } else {
          localStorage.removeItem('user');
        }
      });

      this.props.history.push("/");
    } catch (err) {
      this.setState({ error: err.message });
      this.setState({ alert: true })
    }

    this.setState({ loading: false });
  }

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    const { email, password, loading, error, alert } = this.state;

    return (
      <div>
        <Navbar />
        <div className="container my-4">
          <div className="h2-login">Login</div>

          <form onSubmit={(e) => this.onLogin(e)}>
            <div className="mb-3 m-5">
              <label className="form-label">Email address</label>
              <input
                value={email}
                onChange={(e) => this.setState({ email: e.target.value })}
                type="email"
                className="form-control"
              />
            </div>

            <div className="mb-3 m-5">
              <label className="form-label">Password</label>
              <input
                value={password}
                onChange={(e) => this.setState({ password: e.target.value })}
                type="password"
                className="form-control"
              />
            </div>

            {/*Login Button */}

            <div className="d-flex justify-content-end">
              {loading ? <button className="btn btn-primary px-5" type="submit"> <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div> </button> : <button className="btn btn-primary px-5" type="submit">
                Login
              </button>}
            </div>


            {/*Alert*/}

            {alert ? <div className="alert alert-danger mt-4" role="alert">
              <h2>Invalid Email or Password</h2>
            </div> : <div></div>}
          </form>

          {/* <AlertLogin className="mt-4" error={error} /> */}

        </div>
      </div>
    );
  }
}
