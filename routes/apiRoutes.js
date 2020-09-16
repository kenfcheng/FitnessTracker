const Fitness = require("../models/fitness.js");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Fitness.find({})
      .then((dbFitness) => {
        console.log("dbfitness", dbFitness);
        res.json(dbFitness);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", async function (req, res) {
    try {
      const response = await Fitness.create({ type: "Fitness" });
      res.json(response);
    } catch (err) {
      console.log("error", err);
    }
  });

  app.put("/api/workouts/:id", function ({ body, params }, res) {
    const fitnessID = params.id;
    let savedExercises = [];

    Fitness.find({ _id: fitnessID })
      .then((dbFitness) => {
        savedExercises = dbFitness[0].exercises;
        res.json(dbFitness[0].exercises);
        let allExercises = [savedExercises, body];
        console.log(allExercises);
        updateWorkout(allExercises);
      })
      .catch((err) => {
        res.json(err);
      });

    function updateWorkout(exercises) {
      Fitness.findByIdAndUpdate(fitnessID, { exercises: exercises }, function (
        err,
        doc
      ) {
        if (err) {
          console.log(err);
        }
      });
    }
  });
  app.get("/api/workouts/range", function (req, res) {
    Fitness.find({})
      .then((dbFitness) => {
        res.json(dbFitness);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
