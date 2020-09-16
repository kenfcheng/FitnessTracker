const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
// const connectDB = require("./DB/connection");

const app = express();

// connectDB();

app.use("/api/userModel", require("./api/user"));

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));
// app.use(app.router);

mongoose.connect(
  "mongodb+srv://dbUser:dbUser@cluster0.qw6oe.gcp.mongodb.net/FitnessTracker?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
