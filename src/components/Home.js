import React, { Component } from "react";
import Navbar from "./NavBar";
import beach from "../imgs/iggy.png";


export default class Home extends Component {
  render() {
    return (

      <div>
        <Navbar />
        <div className="card bg-dark text-white">
          <img id="iggy" src={beach} alt="beach" />
          <div className="card-img-overlay text-center ">
            <h5 className="Oceaneers">Oceaneers</h5>
            <p className="card-text"> To the Oceans, Our Food Choices Matter</p>
          </div>
        </div>
        <div className="card text-center p-3 background-color: #024a63">
          <div className="card-body">Oceaneers</div>
          <p className="card-text"> A community of Ocean-aficionados who are driven by shared passion 
          for being in the ocean and a shared purpose of eating for the ocean</p>
        </div>
        <div className="card text-center p-3 background-color: #024a63">
          <div className="card-body">Our Purpose</div>
          <p className="card-text"> Our Purpose is to take better care of our Oceans 
          (and the living planet as a whole). We eblive that our food choices play a huge role
          in that - especially when it comes to fish and other animal products. 
          </p>
        </div>
      </div>
    );
  }
}
