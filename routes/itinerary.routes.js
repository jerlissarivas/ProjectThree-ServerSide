// ROUTES FILE NEEDS TO BE REQUIRED IN THE APP.JS IN ORDER NOT TO GIVE 404
// APP NEEDS TO KNOW YOU CREATED A NEW ROUTE FILE, THAT'S THE ONLY WAY FOR IT TO KNOW WHICH ROUTES YOU WANT TO HIT

const express = require("express");
const router = express.Router();

// ********* require Author and Book models in order to use them *********
// const Author = require('../models/Author.model');
const Itinerary = require("../models/Itinerary.model");

// ****************************************************************************************
// POST - create an itinerary (TESTED | WORKS)
// ****************************************************************************************

// <form action="/itinerary" method="POST">
router.post("/itinerary", (req, res) => {
  // console.log(req.body);
  Itinerary.create(req.body)
    .then((itineraryDoc) => res.status(200).json({ itinerary: itineraryDoc }))
    .catch((err) => next(err));
});

// ****************************************************************************************
// GET route to get all the itinerary options (TESTED | WORKS)
// ****************************************************************************************

router.get("/itinerary", (req, res) => {
  Itinerary.find()
    .then((itineraryFromDB) =>
      res.status(200).json({ itineraries: itineraryFromDB })
    )
    .catch((err) => next(err));
});

// ****************************************************************************************
// POST route to delete the itinerary option (TESTED | WORKS)
// ****************************************************************************************

// <form action="/itinerary/{{this._id}}/delete" method="post">
router.post("/itinerary/:itineraryId/delete", (req, res) => {
  Itinerary.findByIdAndRemove(req.params.itineraryId)
    .then(() => res.json({ message: "Successfully removed!" }))
    .catch((err) => next(err));
});

// ****************************************************************************************
// POST route to save the updates (TESTED | WORKS)
// ****************************************************************************************

// <form action="/itinerary/{{foundItinerary._id}}/update" method="POST">
router.post("/itinerary/:id/update", (req, res) => {
  Itinerary.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedItinerary) =>
      res.status(200).json({ itinerary: updatedItinerary })
    )
    .catch((err) => next(err));
});

// ****************************************************************************************
// GET route for getting the itinerary details (TESTED | WORKS)
// ****************************************************************************************

router.get("/itinerary/:someItineraryId", (req, res) => {
  Itinerary.findById(req.params.someItineraryId)
    // .populate("author")
    .then((foundItinerary) =>
      res.status(200).json({ itinerary: foundItinerary })
    )
    .catch((err) => next(err));
});

module.exports = router;
