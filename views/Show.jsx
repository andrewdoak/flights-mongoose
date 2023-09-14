import React, { Component } from "react";

export default class Show extends Component {
  render() {
    const { flight } = this.props;

    // DATE VARIABLES
    const date = new Date();
    const futureDate = date.getDate() + 365;
    date.setDate(futureDate);
    const defaultValue = date.toLocaleString("en-US");

    // Hide bullets, sans serif
    const avenir = {
      fontFamily: "Avenir",
      listStyleType: "none",
    };
    return (
      <div>
        {/* FLIGHTS HOME */}
        <nav>
          <a style={avenir} href="/flights">
            Flights
          </a>
        </nav>
        <h1 style={avenir}>Flight Information</h1>
        {/* FLIGHT NO. DISPLAY */}
        <h2
          style={avenir}
        >{`${flight.airline} Airlines #${flight.flightNo}`}</h2>
        {/* DEPARTURE */}
        <p style={avenir}>{`Departs: ${flight.departs.toLocaleString()}`}</p>
        {/* AIRPORT */}
        <p style={avenir}>{`Airport Code: ${flight.airport}`}</p>
        <form
          action={`/flight/${this.props.flight._id}?_method=PUT`}
          method="POST"
        >
          {/* EDIT FORM */}
          {/* EDIT ARRIVAL TIME */}
          Arrival Time:{" "}
          <input
            // Locale vs. local
            type="datetime-local"
            name="arrival"
            defaultValue={defaultValue}
            style={{
              fontFamily: "Avenir",
            }}
          />
          <br />
          {/* EDIT ARRIVAL AIRPORT */}
          Arrival Airport{" "}
          <select name="airport" defaultValue={this.props.flight.airport}>
            <option value="SAN">SAN</option>
            <option value="ORD">ORD</option>
            <option value="AUS">AUS</option>
            <option value="DAL">DAL </option>
            <option value="LAX">LAX </option>
            <option value="SEA">SEA</option>
          </select>
          <br />
          {/* EDIT BUTTON */}
          <input type="submit" value="Add Destination" />
        </form>
      </div>
    );
  }
}

/*  
// DATE SEPARATION (CHRISTINA)
var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;

// EDIT PAGE
<a href={/flight/${`flight._id}/edit`}>Edit</a>
<a href="/flight">Back to Main</a>
*/
