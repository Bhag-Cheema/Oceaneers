import React, { Component } from "react";
import Navbar from "./NavBar";
import AddEvents from "./AddEvents";
import events from "../imgs/events.png";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import firebase from "../firebase/firebase";

const db = firebase.firestore();

export default class Events extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      events: [],
    };
  }

componentDidMount() {
  this.fetchEvents();

}

async fetchEvents() {
  try {
    const snapshot = await db.collection('events').get();
    const events = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data()}
    });
    this.setState({events: events});
  } catch (err) {
    console.log(err);
  }
}
  render() {
    const {events} = this.state;
    return (
      <div>
        <Navbar />
        <section className="header-image-events">
          <div className="d-flex justify-content-center flex-column align-item-center text-white text-center">
            <h1 className="events-cabin-large">Events</h1>
            <p className="events-cabin-small">
              These events are publicly open to Oceaneers and non-Oceaneers
              alike. But if you are interested in getting invited to our regular
              Salty Gatherings exclusive to members, join us below. We explore
              the bounty of ocean activities together through surf sessions
              followed by plant-based feasts, free diving, canoe-ing with
              dolphins, and more.
            </p>
          </div>
        </section>
        <div className="d-flex justify-content-center mb-5">
          <Link to="/joinus">
            <button className="learn-how-events">
              Want to Join? Learn how.
            </button>
          </Link>
        </div>
        {/* render out the events images */}

        <div> 
          {
            events.map(event => {
              return <div key={event.id}>
                <img
                style={{
                  width: "250px",
                  height: "250px",
                  objectFit: "cover",
                }}
                src={event.downloadUrl}
                alt="Event cover"
              />
                </div>
            })
            }
        </div>
        <AddEvents history={this.props.history}/>
        <NewsLetter />
        <Footer />
      </div>
    );
  }
}
