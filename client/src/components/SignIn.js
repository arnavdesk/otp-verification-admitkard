import React, { Component } from "react";
import applogo from "../assets/img/AK_logo.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import "../assets/css/sign-in.css";

class SignIn extends Component {
  render() {
    return (
      <div className="app-body">
        <img className="app-logo" src={applogo} alt="AdmitKard Logo"></img>
        <h4 className="heading">Welcome Back</h4>
        <p className="description">Please sign in to your account</p>
        <div className="phone-input-container">
          <PhoneInput
            countryCodeEditable={true}
            specialLabel="Enter Contact Number"
            placeholder="Phone Number"
            country={"in"}
            inputStyle={styles.inputStyle}
            containerStyle={styles.containerStyle}
          />
        </div>
        <p className="extra-info">
          We will send you a one time SMS message. Charges may apply.
        </p>

        <button className="submit-button">Sign In with OTP</button>
      </div>
    );
  }
}

const styles = {
  inputStyle: {
    padding: "10px 50px",
    width: "343px",
    height: "44px",
    fontFamily: "Work Sans",
    borderColor: " #FFD37D",
  },
  containerStyle: {
    fontFamily: "Work Sans",
    color: "gray",
  },
};

export default SignIn;
