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
        <h1 style={avenir}>Flight Information</h1>
        <h2
          style={avenir}
        >{`${flight.airline} Airlines #${flight.flightNo}`}</h2>
        <p style={avenir}>{`Departs: ${flight.departs.toLocaleString()}`}</p>
        <p style={avenir}>{`Airport Code: ${flight.airport}`}</p>
        {/* Time: ${flight.departs.toLocaleString() */}
        <nav>
          <a style={avenir} href="/flights">
            Flights
          </a>
        </nav>
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
