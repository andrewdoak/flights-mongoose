import React, { Component } from "react";

export default class Index extends Component {
  render() {
    const { flights } = this.props;
    return (
      <div>
        <h1>All Flights</h1>
        {/* CREATE FLIGHT */}
        <nav>
          <a href="/flights/new">Create a Flight</a>
        </nav>
        <ul>
          {/* MAP GRABS DATA FROM THE FLIGHT */}
          {flights.map((flight, i) => {
            return (
              // Does this need to display the date?
              <li key={i}>
                {`${flight.airline} Flight ${flight.flightNo} 
                departs on ${flight.departs.toLocaleString()}`}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
