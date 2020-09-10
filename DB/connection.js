const mongoose = require("mongoose");

const URI =
  "mongodb+srv://dbUser:dbUser@cluster0.qw6oe.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async function () {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("db connected !");
};

module.exports = connectDB;
