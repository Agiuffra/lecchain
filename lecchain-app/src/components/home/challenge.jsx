import React, { Component } from "react";
import sign from "./../../sign.png";
import "./challenge.css";

class Challenge extends Component {
  render() {
    return (
      <div className="home-challenge">
        <div className="challenge-text">
          <div className="challenge-body">
          The long wait for a vaccine is over, but 
          distribute them to 7.8 billion people around 
          the world was <span className="challenge-highlight"> 
          the next big challenge. </span> 
          </div>
        </div>
      </div>
    );
  }
}

export default Challenge;
