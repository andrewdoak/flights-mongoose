// FLIGHT IS THE SCHEMA AND THE MODEL
const mongoose = require("mongoose"); // require mongoose

// DEFAULT
// const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor
// const model = mongoose.model; // shorthand for model function
// DESTRUCTURED BELOW
const { Schema, model } = require("mongoose");

// SCHEMA - Defines shape of document (model instance) in the collection
// https://mongoosejs.com/docs/guide.html
// BELOW: WHAT A FLIGHT WILL LOOK LIKE
const flightSchema = new Schema(
  {
    airline: {
      type: String,
      required: true,
      enum: ["American", "Southwest", "United", "Spirit"],
    },
    flightNo: { type: Number, required: true, min: 10, max: 9999 },
    departs: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);
// Schema Parameters:
// Airline needs enum validator for the array of airlines
// ENUM validates / checks if value given is an item in the array

const Flight = model("Flight", flightSchema);

//make this exportable to be accessed in `app.js`
module.exports = Flight;
