import React, { Component } from "react";

import "./inst_popup.css";

class Instpopup extends Component {
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
            <div className="inst-img">
              <img
                src={process.env.PUBLIC_URL + this.props.image}
                alt={this.props.name}
                width="400px"
              />
            </div>
            <div className="content-left">
              <div className="instr-name">{this.props.name}</div>
              <div className="instr-sub">
                <div className="stud-career">{this.props.job}</div>
                <div className="stud-email">{this.props.title}</div>
              </div>
              <div className="stud-just">
                <div className="stud-work">
                  <b>Experience: </b>
                  <ul>
                    <li>
                      <div>- </div>
                      <div>{this.props.experience[0]}</div>
                    </li>
                    <li>
                      <div>- </div>
                      <div>{this.props.experience[1]}</div>
                    </li>
                  </ul>
                </div>
                {this.props.publications ? (
                  <div className="stud-interests">
                    <b>Publications: </b>
                    <ul>
                      <li>
                        <div>- </div>
                        <div>{this.props.publications[0]}</div>
                      </li>
                      <li>
                        <div>- </div>
                        <div>{this.props.publications[1]}</div>
                      </li>
                      <li>
                        <div>- </div>
                        <div>{this.props.publications[2]}</div>
                      </li>
                    </ul>
                  </div>
                ) : null}
              </div>
              <div className="stud-desc">{this.props.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Instpopup;
