import React, { Component } from "react";
import applogo from "../assets/img/AK_logo.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import "../assets/css/sign-in.css";
import { withRouter } from "react-router-dom";
import { showNotificationError } from "../config/notification";

class SignIn extends Component {
  constructor() {
    super();
    this.state = { phone: 0 };
  }

  // Generate OTP from backend
  generateOTP = async () => {
    if (this.state.phone.length !== 12) {
      showNotificationError("Incorrect Phone Number!");
      return;
    }

    console.log(this.state.phone);
    const response = await fetch("http://localhost:8000/api/v1/otp/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone: this.state.phone }),
    });
    const data = await response.json();

    console.log(data);

    this.props.setNotificationUpdate(data.data.otp, this.state.phone);

    if (data.status === 200) {
      this.props.history.push("/otp");
    } else {
      showNotificationError("Error in Notification generation");
    }
  };

  // Sign in page
  render() {
    return (
      <div className="app-body">
        <img className="app-logo" src={applogo} alt="AdmitKard Logo"></img>
        <h4 className="heading">Welcome Back</h4>
        <p className="description">Please sign in to your account</p>
        <div className="phone-input-container">
          <PhoneInput
            countryCodeEditable={false}
            specialLabel="Enter Contact Number"
            placeholder="Phone Number"
            country={"in"}
            inputStyle={styles.inputStyle}
            containerStyle={styles.containerStyle}
            containerClass="phone-input-container"
            inputClass="phone-input"
            value={this.state.phone}
            onChange={(phone) => this.setState({ phone })}
            onEnterKeyPress={this.generateOTP}
          />
        </div>
        <p className="extra-info">
          We will send you a one time SMS message. Charges may apply.
        </p>

        <button onClick={this.generateOTP} className="submit-button">
          Sign In with OTP
        </button>
      </div>
    );
  }
}

// Styles for input bar and container bar required by react-phone-input-2
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

export default withRouter(SignIn);
