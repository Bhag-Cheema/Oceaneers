import React, { Component } from "react";
import Navbar from "./NavBar";
import events from "../imgs/events.png";

export default class Events extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="card text-white border-0">
          <img id="events" src={events} alt="events" />
          <div className="card-img-overlay d-flex justify-content-center flex-column align-item-center text-center">
            <h1 className="events-cabin-large">Events</h1>
            <p className="events-cabin-small">
              {" "}
              These events are publicly open to Oceaneers and non-Oceaneers
              alike. But if you are interested in getting invited to our regular
              Salty Gatherings exclusive to members, join us below. We explore
              the bounty of ocean activities together through surf sessions
              followed by plant-based feasts, free diving, canoe-ing with
              dolphins, and more.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <button className="learn-how">Want to Join? Learn how.</button>
          </div>
        </div>
      </div>
    );
  }
}
