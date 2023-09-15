// FLIGHT IS THE SCHEMA AND THE MODEL
const mongoose = require("mongoose"); // require mongoose

// DEFAULT
// const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor
// const model = mongoose.model; // shorthand for model function
// DESTRUCTURED BELOW
const { Schema, model } = require("mongoose");
// TODO: Do I need to import Destination model?
// const Destination = require("./Destination");

// DESTINATION SUB-DOCUMENT
// REFER TO TWEETS MODEL
const destinationSchema = new Schema({
  airport: {
    type: String,
    required: true,
    enum: ["AUS", "ORD", "DAL", "LAX", "SAN", "SEA"],
  },
  arrival: { type: Date, default: Date.now() },
});

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
    airport: {
      type: String,
      required: true,
      enum: ["AUS", "ORD", "DAL", "LAX", "SAN", "SEA"],
      default: "SAN",
    },
    flightNo: { type: Number, required: true, min: 10, max: 9999 },
    departs: { type: Date, default: Date.now() },
    // REFER TO INTRO TO MONGOOSE LESSON FOR THIS (TWEET.JS)
    destinations: [destinationSchema],
  },
  { timestamps: true }
);
// Schema Parameters:
// Airline needs enum validator for the array of airlines
// ENUM validates / checks if value given is an item in the array

const Flight = model("Flight", flightSchema);

//make this exportable to be accessed in `app.js`
module.exports = Flight;

/* 
const flightSchema = new mongoose.Schema({
    airline: { type: String, required: true, enum: ['American', 'Southwest', 'United'] },
    flightNo: {type: Number,  required: true, min: 10, max: 9999},
    departs: {type: Date},
    airport: { type: String, required: true, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'], default: 'SAN'},
    destinations: [destinationSchema]
}, {
    timestamps: true
})
*/
