import React, { Component } from "react";
import handImg from "../assets/img/hand.png";
import "../assets/css/otp-screen.css";
import OtpInput from "react-otp-input";

class OtpScreen extends Component {
  constructor() {
    super();
    this.state = { otp: "" };
  }

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <div className="app-body">
        <img className="hand-img" src={handImg}></img>
        <h4 className="heading">Please verify Mobile number</h4>
        <p className="number-info">
          An OTP is sent to <span>+917896781234</span>
        </p>
        <a className="change-number-link">Change Phone Number</a>
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
          Didn't receive the code? &nbsp; <a>Resend</a>
        </p>

        <button className="submit-button">Verify</button>
      </div>
    );
  }
}

export default OtpScreen;
