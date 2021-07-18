import React, { Component } from "react";
import logo from "../../logo-lecchain.png";
import "./navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-lecchain d-flex justify-content-between">
        <a className="navbar-brand" href="/lecchain/">
          <img width="100px" src={logo} alt="" />
        </a>
        <div className="d-flex justify-content-between navbar-buttons-lecchain">
          <div
            className={
              this.props.idx === "0"
                ? "mr-5 ml-5 navbar-sel-back-lecchain"
                : "mr-5 ml-5 navbar-nor-back-lecchain"
            }
          >
            <a className="navbar-link-lecchain" href="/lecchain/">
              HOME <span className="sr-only">(current)</span>
            </a>
          </div>
          <div
            className={
              this.props.idx === "3"
                ? "mr-5 ml-5 navbar-sel-back-lecchain"
                : "mr-5 ml-5 navbar-nor-back-lecchain"
            }
          >
            <a className="navbar-link-lecchain" href="/lecchain/project">
              PROJECT
            </a>
          </div>
          <div
            className={
              this.props.idx === "1"
                ? "mr-5 ml-5 navbar-sel-back-lecchain"
                : "mr-5 ml-5 navbar-nor-back-lecchain"
            }
          >
            <a className="navbar-link-lecchain" href="/lecchain/team">
              TEAM
            </a>
          </div>
          <div
            className={
              this.props.idx === "2"
                ? "mr-5 ml-5 navbar-sel-back-lecchain"
                : "mr-5 ml-5 navbar-nor-back-lecchain"
            }
          >
            <a className="navbar-link-lecchain" href="/lecchain/collaborations">
              COLLABORATIONS
            </a>
          </div>
          <div
            className={
              this.props.idx === "4"
                ? "mr-5 ml-5 navbar-sel-back-lecchain"
                : "mr-5 ml-5 navbar-nor-back-lecchain"
            }
          >
            <a className="navbar-link-lecchain" href="/lecchain/laboratory">
              LABORATORY
            </a>
          </div>
          <div
            className={
              this.props.idx === "5"
                ? "mr-5 ml-5 navbar-sel-back-lecchain"
                : "mr-5 ml-5 navbar-nor-back-lecchain"
            }
          >
            <a className="navbar-link-lecchain" href="/lecchain/engineering">
              ENGINEERING
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;