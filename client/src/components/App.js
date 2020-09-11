import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./SignIn";
import OtpScreen from "./OtpScreen";
import Success from "./Success";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={SignIn} />
        <Route path="/otp" component={OtpScreen} />
        <Route path="/success" component={Success} />
      </Router>
    );
  }
}

export default App;
