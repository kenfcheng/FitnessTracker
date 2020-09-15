let path = require("path");

module.exports = function (app) {
  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, ".Develop/public/exercise.html"));
  });

  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, ".Develop/public/stats.html"));
  });
};
