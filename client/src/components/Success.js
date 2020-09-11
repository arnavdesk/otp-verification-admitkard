import React, { Component } from "react";
import artboard from "../assets/img/artboard.png";
import "../assets/css/success.css";

class Success extends Component {
  render() {
    return (
      <div className="app-body">
        <img className="art-image" src={artboard}></img>
        <h3 className="heading">Welcome to AdmitKard</h3>
        <p className="description">
          In order to provide you with<br></br> a custom experience,<br></br>
          <span>we need to ask you a few questions.</span>
        </p>
        <button className="submit-button">Get Started</button>
        <p className="submit-info">*This will only take 5 min.</p>
      </div>
    );
  }
}

export default Success;
