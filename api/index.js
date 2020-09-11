const express = require("express");
var cors = require("cors");
const app = express();
let port = 8000;

// read request
app.use(express.urlencoded());
app.use(express.json());
// MongoDB
const db = require("./config/mongoose");

app.use(cors());

// Use express router
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in firing up the server : ${err}`);
  } else {
    console.log(`server is running on http://localhost:${port}`);
  }
});

module.exports = app;
