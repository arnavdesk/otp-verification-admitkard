const Otp = require("../../models/otp");
const unirest = require("unirest");
const rn = require("random-number");

module.exports.generate = async function (request, response) {
  //   var req = unirest("POST", "https://www.fast2sms.com/dev/bulk");

  //   req.headers({
  //     authorization:
  //       "f2lLDCGujHjUaNyF20FwNa8r5fNdIBZbbtNAriQKCOUmeXaEVOEW8xcyGleK",
  //   });

  //   req.form({
  //     sender_id: "FSTSMS",
  //     message: "OTP is 1122",
  //     language: "english",
  //     route: "p",
  //     numbers: "7042881200",
  //   });

  //   req.end(function (res) {
  //     if (res.error) throw new Error(res.error);
  //     console.log(res.body);
  //   });

  const gen = rn.generator({
    min: 1000,
    max: 9999,
    integer: true,
  });

  request.body.valid = true;
  request.body.otp = gen();

  try {
    let oldOtp = await Otp.findOne({ phone: request.body.phone });

    if (oldOtp == null) {
      let newOtp = await Otp.create(request.body);
      return response.json(200, {
        status: 200,
        data: {
          message: "otp generated",
          otp: newOtp.otp,
        },
      });
    } else {
      oldOtp.otp = request.body.otp;
      oldOtp.save();
      return response.json(200, {
        status: 200,
        data: {
          message: "otp generated",
          otp: oldOtp.otp,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.verify = async function (request, response) {
  return response.json(200, {
    status: 200,
    message: "otp verified",
  });
};
