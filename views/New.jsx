import React from "react";

class New extends React.Component {
  render() {
    // DATE VARIABLES
    const date = new Date();
    // const options = {
    //   formatMatcher: "hour, minute",
    // };
    const futureDate = date.getDate() + 365;
    date.setDate(futureDate);
    const defaultValue = date.toLocaleDateString("en-US");

    return (
      <div>
        <h1>Add Your Flight</h1>
        <form action="/flights" method="POST">
          Your Airline <input type="text" name="airline" />
          <br />
          Your Flight No.{" "}
          <input type="number" name="flightNo" min={10} max={9999} />
          <br />
          Your Departure Time{" "}
          <input
            // Locale, NOT local
            type="datetime-local"
            name="departs"
            default={defaultValue}
          />
          <br />
          <input type="submit" value="Add Your Flight" />
        </form>
        <nav>
          <a href="/flights">Flights Home</a>
        </nav>
      </div>
    );
  }
}

module.exports = New;
