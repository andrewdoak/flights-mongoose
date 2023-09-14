import React from "react";
// USE INDEX AS AN EXAMPLE
class Edit extends React.Component {
  render() {
    // DATE VARIABLES
    const date = new Date();
    const futureDate = date.getDate() + 365;
    date.setDate(futureDate);
    const defaultValue = date.toLocaleDateString("en-US");

    // FONT STYLING
    const avenir = {
      fontFamily: "Avenir",
      listStyleType: "none",
    };
    return (
      <div>
        <h1 style={avenir}>Edit Your Flight</h1>
        <nav>
          <a style={avenir} href="/flights">
            All Flights
          </a>
        </nav>
        <form
          action={`/flight/${this.props.flight._id}?_method=PUT`}
          method="POST"
        >
          {/* AIRLINE */}
          Airline:{" "}
          <input
            type="text"
            size="35"
            placeholder="American, Spirit, Southwest, United"
            name="airline"
            defaultValue={this.props.flight.airline}
            style={{
              fontFamily: "Avenir",
            }}
          />
          {/* FLIGHT NUMBER */}
          <br />
          Flight No.{" "}
          <input
            type="number"
            name="flightNo"
            defaultValue={this.props.flight.flightNo}
            min={10}
            max={9999}
          />
          <br />
          {/* Arrival TIME */}
          Arrival:{" "}
          <input
            // Locale, NOT local
            type="datetime-local"
            name="arrival"
            defaultValue={defaultValue}
            style={{
              fontFamily: "Avenir",
            }}
          />
          <br />
          {/* AIRPORT DROPDOWN */}
          Airport{" "}
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
          <input type="submit" value="Edit Flight" />
        </form>
      </div>
    );
  }
}

module.exports = Edit;

/* 
class New extends React.Component {
  render() {
    // DATE VARIABLES
    const date = new Date();
    const futureDate = date.getDate() + 365;
    date.setDate(futureDate);
    const defaultValue = date.toLocaleDateString("en-US");

    // FONT STYLING
    const avenir = {
      fontFamily: "Avenir",
      listStyleType: "none",
    };

    return (
      <div>
        <h1 style={avenir}>Add Your Flight</h1>
        <nav>
          <a style={avenir} href="/flights">
            All Flights
          </a>
        </nav>
        <br />
        <form action="/flights" method="POST">
          Airline{" "}
          <input
            type="text"
            size="35"
            placeholder="American, Spirit, Southwest, United"
            name="airline"
            style={{
              fontFamily: "Avenir",
            }}
          />
          <br />
          Flight No. <input type="number" name="flightNo" min={10} max={9999} />
          <br />
          Departure{" "}
          <input
            // Locale, NOT local
            type="datetime-local"
            name="departs"
            default={defaultValue}
            style={{
              fontFamily: "Avenir",
            }}
          />
          <br />
          Airport{" "}
          <select name="airport">
            <option value="SAN">SAN</option>
            <option value="ORD">ORD</option>
            <option value="AUS">AUS</option>
            <option value="DAL">DAL </option>
            <option value="LAX">LAX </option>
            <option value="SEA">SEA</option>
          </select>
          <br />
          <input type="submit" value="Add Flight" />
        </form>
      </div>
    );
  }
}

module.exports = New;

*/
