// const express = require("express");
const mongoose = require("mongoose");
const User = require("./user");
const express = require("express");
const route = express.Router();

route.post("/", async (req, res) => {
  const {
    day,
    exercises,
    name,
    duration,
    weight,
    reps,
    sets,
    distance,
  } = req.body;

  let user = {};
  user.day = day;
  user.exercises = exercises;
  user.name = name;
  user.duration = duration;
  user.weight = weight;
  user.reps = reps;
  user.sets = sets;
  user.distance = distance;

  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

module.exports = route;
