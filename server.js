const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const connectDB = require("./DB/connection");

const app = express();

connectDB();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
