// FLIGHT IS THE SCHEMA AND THE MODEL
const mongoose = require("mongoose"); // require mongoose

// DEFAULT
// const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor
// const model = mongoose.model; // shorthand for model function
// DESTRUCTURED BELOW
const { Schema, model } = require("mongoose");

// SCHEMA - Defines shape of document (model instance) in the collection
// https://mongoosejs.com/docs/guide.html
// BELOW: WHAT A DESTINATION WILL LOOK LIKE
const destinationSchema = new Schema(
  {
    airport: {
      type: String,
      required: true,
      enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
    },
    arrival: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);
// Schema Parameters:
// Airport takes an enum validator for the array of airlines
// ENUM validates / checks if value given is an item in the array

const Destination = model("Destination", destinationSchema);

//make this exportable to be accessed in `app.js`
module.exports = Destination;
