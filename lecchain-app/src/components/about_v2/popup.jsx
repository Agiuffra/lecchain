import React, { Component } from "react";

import "./popup.css";

class Popup extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="popup-box">
        <div className="box">
          <div className="close-icon" onClick={this.handleClick}>
            x
          </div>
          <div className="box-content">
            <img
              className="stud-img"
              src={process.env.PUBLIC_URL + this.props.image}
              alt={this.props.name}
            />
            <div className="content-left">
              <div className="stud-name">{this.props.name}</div>
              <div className="stud-sub">
                <div className="stud-career">{this.props.career}</div>
                <div>-</div>
                <div className="stud-email">
                  <a href="mailto:{this.props.email}">{this.props.email}</a>
                </div>
              </div>
              <div className="stud-just">
                <div className="stud-work">
                  <b>Role: </b>
                  {this.props.work}
                </div>
                <div className="stud-interests">
                  <b>Interests: </b>
                  {this.props.interests}
                </div>
              </div>
              <div className="stud-desc">{this.props.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
