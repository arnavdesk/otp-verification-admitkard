const express = require("express");
const router = express.Router();

const otpApi = require("../../../controllers/api/otp_api");

router.get("/generate", otpApi.generate);

router.get("/verify", otpApi.verify);

module.exports = router;
