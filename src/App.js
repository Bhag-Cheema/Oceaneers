
import React, { Component } from 'react'
import Home from './components/Home';
import Login from './components/Login';
import Events from './components/Events';
import "./styles/home.scss";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter, Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/events" exact component={Events} />
        </BrowserRouter>
      </div>
    );
  };
};


export default App;