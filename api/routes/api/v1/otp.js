const express = require("express");
const router = express.Router();

const otpApi = require("../../../controllers/api/otp_api");

// generation of OTP
router.post("/generate", otpApi.generate);

// verification of OTP
router.post("/verify", otpApi.verify);

module.exports = router;
