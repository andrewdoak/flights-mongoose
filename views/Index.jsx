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
        <h1 style={avenir}>All Flights</h1>
        {/* CREATE FLIGHT */}
        <nav>
          <a style={avenir} href="/flights/new">
            Create a Flight
          </a>
        </nav>
        <ul style={avenir}>
          {/* MAP GRABS DATA FROM THE FLIGHT */}
          {flights.map((flight, i) => {
            return (
              <li key={i}>
                {/* AIRLINE AND FLIGHT */}
                <b>{`${flight.airline} Flight ${flight.flightNo} `}</b>
                {/* SHOW LINK */}
                <a style={avenir} href={`/flights/${flight._id}`}>
                  Info
                </a>
                {/* AIRPORT */}
                <br />
                {`Departure Airport: ${flight.airport} `}
                <br />
                {/* DEPARTURE TIME */}
                {`Time: ${flight.departs.toLocaleString()}`}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
// .toLocaleString()
