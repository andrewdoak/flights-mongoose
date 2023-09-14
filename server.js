// DEPENDENCIES //
//////////////////
// ENV package
require("dotenv").config();
// Load express
const express = require("express");
// Create Express App
const app = express();
// Import Mongoose
const mongoose = require("mongoose");
// PORT
// Define server port
const PORT = process.env.PORT || 3000;
// Flights Model
const Flight = require("./models/Flight");
// Destinations Model
const Destination = require("./models/Destination");

// MONGODB //
/////////////
// MongoDB GLOBAL CONFIG
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// MongoDB CONNECT
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB LOGGING
db.on("error", (err) =>
  console.log(err.message + " MongoDB is not running...")
);
db.on("open", () => console.log(`MongoDB is connected.`));
// If I want to see my URI from .env, DO
// console.log(`MongoDB is connected.`,`Your URI:`, mongoURI)
db.on("close", () => console.log("MongoDB is disconnected"));

// MongoDB CONNECTION TIMEOUT (5 SEC)
// setTimeout(() => {
//   db.close();
// }, 5000);

// JSX VIEW ENGINE //
/////////////////////
// Built-in method
const jsxViewEngine = require("jsx-view-engine");
// Look for jsx, default setting
app.set("view engine", "jsx");
// Call app engine
app.engine("jsx", jsxViewEngine());

// MIDDLEWARE //
////////////////
// LOG MIDDLEWARE
// app.use((req, res, next) => {
//   console.log("Middleware: I run for all routes");
//   next();
// });

// VIEW BODY OF A POST REQUEST
app.use(express.urlencoded({ extended: false }));

// 1. I - Index
app.get("/flights", async (req, res) => {
  try {
    const foundFlight = await Flight.find({});
    res.render("Index", { flights: foundFlight });
  } catch (error) {
    res.status(400).send(error);
  }
});
// 2. N - New
app.get("/flights/new", (req, res) => {
  res.render("New");
});

// 3. D - Delete

// 4. U - Update

// 5. C - Create
app.post("/flights", async (req, res) => {
  try {
    const createdFlight = await Flight.create(req.body);
    res.status(201).redirect("/flights");
  } catch (error) {
    res.status(400).send(error);
  }
});

// 6. E - Edit

// 7. S - Show
app.get("/flights/:id", async (req, res) => {
  try {
    const foundFlight = await Flight.findById(req.params.id);
    res.render("Show", {
      flight: foundFlight,
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

// 8. E - REDIRECT/CATCH ALL ROUTE
app.get("*", (req, res) => {
  res.redirect("/flights");
});

// LISTEN / PORT
app.listen(PORT, function () {
  console.log(`Server listening on port: ${PORT}`);
});
/*  
GIT REPO:
https://github.com/andrewdoak/flights-mongoose
*/
// TODO: Fix .env to write to a new Collection (currently FruitsPortal)
// TODO: Fix date display
