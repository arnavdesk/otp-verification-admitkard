import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./SignIn";
import OtpScreen from "./OtpScreen";
import Success from "./Success";
import { showNotification } from "../config/notification";
import "../../node_modules/noty/lib/noty.css";
import "../../node_modules/noty/lib/themes/sunset.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      raiseNoty: false,
      otp: 0,
      mobileNumber: 0,
    };
  }

  setNotificationUpdate = (otp) => {
    this.setState({ otp: otp, raiseNoty: true });
  };

  componentDidUpdate = () => {
    if (this.state.raiseNoty === true) {
      showNotification("Your OTP is " + this.state.otp);
      this.setState({ otp: 0, raiseNoty: false });
    }
  };

  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={(props) => (
            <SignIn
              {...props}
              otp={this.state.otp}
              mobileNumber={this.state.mobileNumber}
              setNotificationUpdate={this.setNotificationUpdate}
            />
          )}
        />
        <Route
          path="/otp"
          render={(props) => (
            <OtpScreen
              {...props}
              otp={this.state.otp}
              mobileNumber={this.state.mobileNumber}
              setNotificationUpdate={this.setNotificationUpdate}
            />
          )}
        />
        <Route path="/success" render={(props) => <Success {...props} />} />
      </Router>
    );
  }
}

export default App;
