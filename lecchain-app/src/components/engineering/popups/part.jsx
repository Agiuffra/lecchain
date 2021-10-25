import React, { Component } from "react";

import "./part.css";

class artpop extends Component {
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
            <div className="content-left">
              <div className="stud-name">{this.props.name}</div>
              <div className="stud-just">
                <div className="stud-work">
                  <b>Description: </b>
                  {this.props.desc}
                </div>
                <div className="stud-interests">
                  <b>Application: </b>
                  {this.props.appl}
                </div>
                <div className="stud-interests">
                  <b>Biology: </b>
                  {this.props.bio}
                </div>
                <div className="stud-interests">
                  <b>Standarization: </b>
                  {this.props.stand}
                </div>
              </div>
              {this.props.img === "null" ? null : (
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/engineering/parts/" +
                    this.props.img
                  }
                  alt={this.props.name}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default artpop;
