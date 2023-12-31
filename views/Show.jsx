const React = require("react");

class Show extends React.Component {
  render() {
    const { flight } = this.props;

    // DATE VARIABLES
    const date = new Date();
    const futureDate = date.getDate() + 365;
    date.setDate(futureDate);
    const defaultValue = date.toLocaleString("en-US");

    // CSS
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

        {/* DEPARTURE AIRPORT */}
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
        {/* MAP OVER LI OR DIV ELEMENTS NOT IN AN UL, RETURN 1 ITEM ONLY */}
        {flight.destinations.map((flight, i) => {
          return (
            <li key={i} style={avenir}>
              {/* DESTINATION AIRPORT*/}
              <p>
                <b>{`Destination: `}</b>
                {`${flight.airport}`}
              </p>
              {/* DESTINATION TIME*/}
              <p>
                <b>{`Arrival: `}</b>
                {`${flight.arrival.toLocaleString()}`}
              </p>
            </li>
          );
        })}
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
CAN ONLY MAP OVER AN ARRAY

// DEPARTURE DETAILS
<h2
  style={avenir}
>{`${flight.airline} Airlines #${flight.flightNo}`}</h2>
// ORIGIN
<p style={avenir}>{`Origin: ${flight.airport}`}</p>
// DEPARTURE TIME
<p style={avenir}>{`Departure: ${flight.departs.toLocaleString()}`}</p>

// DATE SEPARATION (CHRISTINA)
var date = new Date(),
    minutes = date.getMinutes().toString().length == 1 ? '0'+date.getMinutes() : date.getMinutes(),
    hours = date.getHours().toString().length == 1 ? '0'+date.getHours() : date.getHours(),
    ampm = date.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[date.getDay()]+' '+months[date.getMonth()]+' '+date.getDate()+' '+date.getFullYear()+' '+hours+':'+minutes+ampm;

// EDIT PAGE
<a href={/flight/${`flight._id}/edit`}>Edit</a>
<a href="/flight">Back to Main</a>
*/
