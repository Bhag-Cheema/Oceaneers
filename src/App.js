import React, { Component } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Partners from "./components/Partners";

import "./styles/home.scss";
import "./styles/home.css";
import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/partners" exact component={Partners} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
