import React, { Component } from "react";

export default class Show extends Component {
  render() {
    const { flight } = this.props;
    // Hide bullets, sans serif
    const avenir = {
      fontFamily: "Avenir",
      listStyleType: "none",
    };
    return (
      <div>
        <h1 style={avenir}>Flight Detail</h1>
        <nav>
          <a style={avenir} href="/flights">
            All Flights
          </a>
        </nav>
        <h2 style={avenir}>{`Airline ${flight.airline}`}</h2>
        <h4 style={avenir}>{`Flight No. ${flight.flightNo}`}</h4>
        <h4 style={avenir}>{`Airport ${flight.airport}`}</h4>
        <h4
          style={avenir}
        >{`Departure: ${flight.departs.toLocaleString()}`}</h4>
      </div>
    );
  }
}

/*  
// FLIGHT INDEX
<ul style={avenir}>
{flights.map((flight, i) => {
return (
    <li key={i}>
    <b>{`${flight.airline} Flight ${flight.flightNo}`}</b>
    <br />
    {`Departure Airport: ${flight.airport} `}
    <br />
    {`Time: ${flight.departs.toLocaleString()}`}
    </li>
);
})}
</ul>

// EDIT PAGE
<a href={/flight/${flight._id}/edit}>Edit Your Flight</a>
<a href="/flight">Back to Main</a>
*/
