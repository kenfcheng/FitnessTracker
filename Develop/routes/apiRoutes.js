let db = require("../models");

module.exports = function(app) {

   
    app.get("/api/workouts", function(req, res)  {
        db.workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.post("/api/workouts", async function (req, res) {
        try{
            const response = await db.workout.create({type: "workout"})
            res.json(response);
        }
        catch(err){
            console.log("error", err)
        }
    })

    app.put("/api/workouts/:id", function ({body, params}, res)  {
        const workoutId = params.id;
        let savedExercises = [];

        db.Workout.find({_id: workoutId})
        .then(dbWorkout => {
            savedExercises = dbWorkout[0].exercises;
            res.json(dbWorkout[0].exercises);
            let allExercises = [savedExercises, body]
            console.log(allExercises)
            updateWorkout(allExercises)
        })
        .catch(err => {
            res.json(err);
        });

        function updateWorkout(exercises){
            db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises}, function(err, doc){
            if(err){
                console.log(err)
            }

            })
        }
            
    })