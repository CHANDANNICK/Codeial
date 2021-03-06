const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/codeial_development");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting to Database"));
db.once("open", function() {
  console.log("Connected to the Database :: MongoDB");
});

module.exports = db;
