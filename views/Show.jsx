const React = require("react");

class Show extends React.Component {
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

        {/* AIRLINE AND FLIGHT */}
        <h2
          style={avenir}
        >{`${flight.airline} Airlines #${flight.flightNo}`}</h2>

        {/* DEPARTURE PLACE */}
        <p style={avenir}>
          <b>{`Origin: `}</b>
          {`${flight.airport}`}
        </p>
        {/* FLIGHT DEPARTURE TIME */}
        <p style={avenir}>
          <b>{`Departure: `}</b>
          {`${flight.departs.toLocaleString()}`}
        </p>

        {/* ARRIVAL */}
        <ul style={avenir}>
          {flight.destinations.map((flight, i) => {
            return (
              <li key={i} style={avenir}>
                {/* DESTINATION PLACE*/}
                <b>Destination:</b>
                {` ${flight.airport}`}
                <br />
                {/* DESTINATION TIME*/}
                <b>Arrival:</b>
                {` ${flight.arrival.toLocaleString()}`}
              </li>
            );
          })}
        </ul>
        {/* FORM ACTION */}
        <form action={`/flights/${flight._id}?_method=PUT`} method="POST">
          {/* EDIT FORM */}
          {/* EDIT ARRIVAL TIME */}
          Arrival Time:{" "}
          <input
            // Locale vs. local
            type="datetime-local"
            name="arrival"
            // defaultValue={defaultValue}
            style={{
              fontFamily: "Avenir",
            }}
          />
          <br />
          {/* EDIT ARRIVAL AIRPORT */}
          Arrival Airport{" "}
          <select name="airport">
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
module.exports = Show;
/*  
// DEPARTURE DETAILS
<h2
  style={avenir}
>{`${flight.airline} Airlines #${flight.flightNo}`}</h2>
// ORIGIN
<p style={avenir}>{`Origin: ${flight.airport}`}</p>
// DEPARTURE TIME
<p style={avenir}>{`Departure: ${flight.departs.toLocaleString()}`}</p>

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
