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
    };
  }

  async onLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ loading: true });

    try {
      await this.auth.signInWithEmailAndPassword(email, password);
      this.props.history.push("/");
    } catch (err) {
      this.setState({ error: err.message });
    }
    this.setState({ loading: false });
  }

  render() {
    const { email, password, loading, error } = this.state;

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

          <div className="d-flex justify-content-end">
            <ButtonLogin
              type="submit"
              className="btn btn-primary px-5"
              loading={loading}>Login</ButtonLogin>
          </div>
        </form>

        <AlertLogin className="mt-4" error={error} />

      </div>
    </div>
    );
  }
}
