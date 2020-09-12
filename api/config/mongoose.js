const mongoose = require("mongoose");
// Connect to development server
mongoose.connect("mongodb://localhost/OTP_GENERATION_DEVELOPMENT");

// Create connection with mongoose
const db = mongoose.connection;

// Error connecting to Database
db.on("error", console.error.bind(console, "Error Connecting Database"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
