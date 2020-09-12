import React, { Component } from "react";
import handImg from "../assets/img/hand.png";
import "../assets/css/otp-screen.css";
import OtpInput from "react-otp-input";
import { withRouter } from "react-router-dom";
import {
  showNotificationError,
  showNotificationSuccess,
} from "../config/notification";

class OtpScreen extends Component {
  constructor() {
    super();
    this.state = { otp: "" };
  }

  componentDidMount = () => {
    if (this.props.phone == 0) {
      this.props.history.push("/");
    }
  };

  generateOTP = async () => {
    console.log(this.props.phone);
    const response = await fetch("http://localhost:8000/api/v1/otp/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone: this.props.phone }),
    });
    const data = await response.json();
    console.log(data);
    this.props.setNotificationUpdate(data.data.otp, this.props.phone);
  };

  verifyOTP = async () => {
    if (this.state.otp.length !== 4) {
      showNotificationError("OTP incorrect");
      return;
    }
    console.log(this.state.otp);
    const response = await fetch("http://localhost:8000/api/v1/otp/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp: this.state.otp, phone: this.props.phone }),
    });
    const data = await response.json();
    console.log(data);
    if (data.status == 200) {
      showNotificationSuccess("Successfully verified!! Welocome!");
      this.props.history.push("/success");
    } else {
      showNotificationError("Could not verify! Please retry or resend OTP");
    }
  };

  handleChange = (otp) => this.setState({ otp });

  handleEnterKey = (e) => {
    console.log(e);
    if (e.keyCode == 13) {
      this.verifyOTP();
    }
  };

  render() {
    return (
      <div className="app-body">
        <img className="hand-img" src={handImg}></img>
        <h4 className="heading">Please verify Mobile number</h4>
        <p className="number-info">
          An OTP is sent to <span>+{this.props.phone}</span>
        </p>
        <a
          onClick={() => {
            this.props.history.push("/");
          }}
          className="change-number-link"
        >
          Change Phone Number
        </a>
        <OtpInput
          value={this.state.otp}
          onChange={this.handleChange}
          inputStyle={{
            width: "49px",
            height: "49px",
            color: "black",
            marginRight: "18px",
            fontSize: "18px",
            border: "1px solid lightgray",
            borderRadius: "5px",
          }}
          numInputs={4}
          containerStyle={{
            marginTop: "80px",
            marginLeft: "13px",
          }}
          isInputNum={true}
        />
        <p className="resend-link">
          Didn't receive the code? &nbsp;{" "}
          <a onClick={this.generateOTP}>Resend</a>
        </p>

        <button className="submit-button" onClick={this.verifyOTP}>
          Verify
        </button>
      </div>
    );
  }
}

export default withRouter(OtpScreen);
