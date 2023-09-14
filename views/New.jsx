import React from "react";

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
          Airport{" "}
          <select name="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
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
          <input type="submit" value="Add Flight" />
        </form>
      </div>
    );
  }
}

module.exports = New;

/*
 */
