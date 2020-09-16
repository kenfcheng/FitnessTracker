const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitness = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Exercise Name",
      },
      name: {
        type: String,
        trim: true,
        required: "Exercise Type",
      },
      duration: {
        type: Number,
        required: "Exercise Duration (minutes)",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Fitness = mongoose.model("Fitness", fitness);

module.exports = Fitness;
