import React, { Component } from "react";
import "./supervisors.css";
import chelo from "./../data/img/Marcelo.jpeg";

class Supervisorpop extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={this.handleClick}>
            x
          </span>
          <div className="supervisor-content">
            <div className="supervisor-img">
              <img
                className="student-picture-img"
                height="150px"
                src={chelo}
                alt="student-picture"
              />
            </div>
            <div className="supervisor-description">
              <h3 className="supervisor-name">Supervisor A</h3>
              <div className="supervisor-resumee">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                quos eum est itaque nesciunt libero quae sed cupiditate
                suscipit? Temporibus ipsum expedita sequi cum error natus a
                deserunt voluptas ullam?
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Supervisorpop;
