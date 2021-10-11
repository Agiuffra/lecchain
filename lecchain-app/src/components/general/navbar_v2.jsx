import React, { Component } from "react";
import "./navbar_v2.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar-lecchain">
        <div className="d-flex justify-content-between navbar-buttons-lecchain">
          <div
            className={
              this.props.idx === "0"
                ? "navbar-sel-back-lecchain"
                : "navbar-nor-back-lecchain"
            }
          >
            <a className="navbar-link-lecchain" href="/about">
              About
            </a>
          </div>
          <div
            className={
              this.props.idx === "1"
                ? "navbar-sel-back-lecchain"
                : "navbar-nor-back-lecchain"
            }
          >
            <a className="navbar-link-lecchain" href="/project">
              Project
            </a>
          </div>
          <div
            className={
              this.props.idx === "2"
                ? "navbar-sel-back-lecchain"
                : "navbar-nor-back-lecchain"
            }
          >
            <a className="navbar-link-lecchain" href="/engineering">
              Engineering
            </a>
          </div>
          <div
            className={
              this.props.idx === "3"
                ? "navbar-sel-back-lecchain"
                : "navbar-nor-back-lecchain"
            }
          >
            <a className="navbar-link-lecchain" href="/human-practices">
              Human Practices
            </a>
          </div>
          <div
            className={
              this.props.idx === "4"
                ? "navbar-sel-back-lecchain"
                : "navbar-nor-back-lecchain"
            }
          >
            <a className="navbar-link-lecchain" href="/entrepreneurship">
              Entrepreneurship
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
