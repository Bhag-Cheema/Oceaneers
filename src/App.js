
import React, { Component } from 'react'
import Home from './components/Home';
import Login from './components/Login';
import Why from './components/Why';
import "./styles/home.scss";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/why" exact component={Why} />

        </BrowserRouter>
      </div>
    );
  };
};


export default App;