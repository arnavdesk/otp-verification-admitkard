const express = require("express");
const router = express.Router();

const otpApi = require("../../../controllers/api/otp_api");

router.post("/generate", otpApi.generate);

router.post("/verify", otpApi.verify);

module.exports = router;
