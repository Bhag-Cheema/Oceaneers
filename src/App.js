import React, { Component } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Partners from "./components/Partners";
import Events from "./components/Events";
import Why from "./components/Why";
import About from "./components/About";
import JoinUs from "./components/JoinUs";
import AddEvents from "./components/AddEvents";
import firebase from "./firebase/firebase";

import "./styles/home.scss";
import "./styles/home.css";

import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route } from "react-router-dom";
import GuardedRoute from "./components/GuardedRoute";

class App extends Component {

  constructor(props) {
    super(props);
    this.auth = firebase.auth();
    this.db = firebase.firestore();

    this.state = {
      user: null
    }

  }


  componentDidMount() {
    this.auth.onAuthStateChanged(user => {
      this.setState({ user });
    })
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/why" exact component={Why} />
          <Route path="/events" exact render={(props) => <Events {...props}  />} />
          <Route path="/partners" exact component={Partners} />
          <Route path="/aboutus" exact component={About} />
          <Route path="/joinus" exact component={JoinUs} />
          <Route path="/addevents" exact component={AddEvents}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
