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
      isLoggedIn: false,
    };
  }

  // Set loggedin as true

  setLoggedIn = () => {
    this.setState({ isLoggedIn: true });
  };

  // To set notifications
  setNotificationUpdate = (otp, mobileNumber) => {
    this.setState({ otp: otp, raiseNoty: true, mobileNumber: mobileNumber });
  };

  // show notification
  componentDidUpdate = () => {
    if (this.state.raiseNoty === true) {
      showNotification("Your OTP is " + this.state.otp);
      this.setState({ otp: 0, raiseNoty: false });
    }
  };

  // Use react router
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
              phone={this.state.mobileNumber}
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
              phone={this.state.mobileNumber}
              setNotificationUpdate={this.setNotificationUpdate}
              setLoggedIn={this.setLoggedIn}
            />
          )}
        />
        <Route
          path="/success"
          render={(props) => (
            <Success {...props} isLoggedIn={this.state.isLoggedIn} />
          )}
        />
      </Router>
    );
  }
}

export default App;
