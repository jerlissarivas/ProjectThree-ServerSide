const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ItinerarySchema = new Schema(
  {
    // unless you are defining more than the "type" property, you don't have to use {} (see below)
    // firstName: {type: String, require: true}
    date: date,
    eventName: String,
    eventLocation: String, // maybe use google maps also
    locationURL: URL,
    // we want to reference authors inside the book model and for that we will use their IDs
    // this is telling us that in "author" property of each book object, we will have
    // saved ObjectId (id that is automatically generated by MongoDB) that belongs to one of the authors from the authors collection
    // author: { type: Schema.Types.ObjectId, ref: "Author" },
    // rating: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Itinerary", ItinerarySchema);
