let db = require("../../models");

module.exports = function (app) {
  app.get("/api/user", function (req, res) {
    db.Fitness.find({})
      .then((Fitness) => {
        res.json(Fitness);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/user", async function (req, res) {
    try {
      const response = await db.Fitness.create({ type: "Fitness" });
      res.json(response);
    } catch (err) {
      console.log("error", err);
    }
  });

  app.put("/api/user/:id", function ({ body, params }, res) {
    const fitnessID = params.id;
    let savedExercises = [];

    db.Fitness.find({ _id: fitnessID })
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
      db.Fitness.findByIdAndUpdate(
        fitnessID,
        { exercises: exercises },
        function (err, doc) {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  });
};
