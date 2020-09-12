const Otp = require("../../models/otp");
const unirest = require("unirest");
const rn = require("random-number");

const sendOTP = (otp, phoneNo) => {
  // Promotional API Fast2SMS
  // Will only be send till 9AM - 9PM because of TRAI rules.
  var req = unirest("POST", "https://www.fast2sms.com/dev/bulk");

  req.headers({
    authorization:
      "f2lLDCGujHjUaNyF20FwNa8r5fNdIBZbbtNAriQKCOUmeXaEVOEW8xcyGleK",
  });

  req.form({
    sender_id: "FSTSMS",
    message: "Your OTP is " + otp,
    language: "english",
    route: "p",
    numbers: phoneNo,
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);
    console.log(res.body);
  });
};

module.exports.generate = async function (request, response) {
  const gen = rn.generator({
    min: 1000,
    max: 9999,
    integer: true,
  });
  request.body.valid = true;
  request.body.otp = gen();

  sendOTP(request.body.otp, request.body.phone);

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
      oldOtp.valid = true;
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
  let otp = await Otp.findOne({ phone: request.body.phone });

  if (otp == null) {
    return response.json(404, {
      status: 404,
      message: "otp Not verified",
    });
  } else {
    if (otp.valid === false) {
      return response.json(404, {
        status: 404,
        message: "otp Not verified",
      });
    }
    var date = new Date(new Date());
    console.log(date);
    console.log(otp.updatedAt);
    console.log(date - otp.updatedAt);

    if (date - otp.updatedAt > 900000) {
      otp.valid = false;
      otp.save();
      return response.json(404, {
        status: 404,
        message: "otp expired",
      });
    }

    if (otp.otp == request.body.otp) {
      otp.valid = false;
      otp.save();
      return response.json(200, {
        status: 200,
        message: "otp verified",
      });
    } else {
      return response.json(404, {
        status: 404,
        message: "otp not verified",
      });
    }
  }
};
