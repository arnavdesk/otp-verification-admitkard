const express = require("express");
const router = express.Router();

// Route for handling doctor registration and login.
router.use("/otp", require("./otp"));

module.exports = router;
