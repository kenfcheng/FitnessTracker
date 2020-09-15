let db = require("../models");

module.exports = function(app) {

   
    app.get("/api/user", function(req, res)  {
        db.Fitness.find({})
        .then(fitness => {
            res.json(fitness);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.post("/api/user", async function (req, res) {
        try{
            const response = await db.fitness.create({type: "fitness"})
            res.json(response);
        }
        catch(err){
            console.log("error", err)
        }
    })

    app.put("/api/user/:id", function ({body, params}, res)  {
        const workoutId = params.id;
        let savedExercises = [];

        db.Fitness.find({_id: workoutId})
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
            db.Fitness.findByIdAndUpdate(workoutId, {exercises: exercises}, function(err, doc){
            if(err){
                console.log(err)
            }

            })
        }
            
    })