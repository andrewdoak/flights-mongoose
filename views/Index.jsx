import React, { Component } from "react";

export default class Index extends Component {
  render() {
    const { flights } = this.props;
    // Hide bullets, sans serif
    const avenir = {
      fontFamily: "Avenir",
      listStyleType: "none",
    };
    return (
      <div>
        {/* PAGE TITLE */}
        <h1 style={avenir}>Departures</h1>
        {/* FLIGHT */}
        <ul style={avenir}>
          {/* MAP GRABS DATA FROM THE FLIGHT */}
          {flights.map((flight, i) => {
            return (
              <li key={i}>
                {/* AIRLINE AND FLIGHT */}
                <b>{`${flight.airline} Flight #${flight.flightNo} `}</b>
                {/* SHOW LINK */}
                <a style={avenir} href={`/flights/${flight._id}`}>
                  Info
                </a>
                {` `}
                {/* EDIT LINK */}
                {/* <a href={`/flights/${flight._id}/edit`}>Edit</a> */}
                {/* AIRPORT */}
                <br />
                {`Origin: ${flight.airport} `}
                <br />
                {/* DEPARTURE TIME */}
                {`Departure: ${flight.departs.toLocaleString()}`}
              </li>
            );
          })}
        </ul>
        {/* CREATE FLIGHT */}
        <nav>
          <a style={avenir} href="/flights/new">
            Add a Flight
          </a>
        </nav>
      </div>
    );
  }
}

/* 
// EDIT PAGE
<a href={/flight/${`flight._id}/edit`}>Edit</a>
<a href="/flight">Back to Main</a>
*/
