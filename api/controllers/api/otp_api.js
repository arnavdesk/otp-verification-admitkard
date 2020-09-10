const Otp = require("../../models/otp");

module.exports.generate = async function (request, response) {
  console.log("HELLOOOO");
  return response.json(200, {
    status: 200,
    message: "otp generated",
  });
};

module.exports.verify = async function (request, response) {
  return response.json(200, {
    status: 200,
    message: "otp verified",
  });
};
