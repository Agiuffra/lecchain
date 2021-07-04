import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-lecchain d-flex justify-content-between">
        <a className="navbar-brand" href="#">
          <img src="https://picsum.photos/100" alt="#" />
        </a>
        <div className="d-flex justify-content-between ">
          <div className="mr-5 ml-5 navbar-sel-back-lecchain">
            <a className="navbar-link-lecchain" href="#">
              HOME <span className="sr-only">(current)</span>
            </a>
          </div>
          <div className="mr-5 ml-5 navbar-nor-back-lecchain">
            <a className="navbar-link-lecchain" href="#">
              TEAM
            </a>
          </div>
          <div className="mr-5 ml-5 navbar-nor-back-lecchain">
            <a className="navbar-link-lecchain" href="#">
              COLLABORATIONS
            </a>
          </div>
          <div className="mr-5 ml-5 navbar-nor-back-lecchain">
            <a className="navbar-link-lecchain" href="#">
              PROJECT
            </a>
          </div>
          <div className="mr-5 ml-5 navbar-nor-back-lecchain">
            <a className="navbar-link-lecchain" href="#">
              LABORATORY
            </a>
          </div>
          <div className="mr-5 ml-5 navbar-nor-back-lecchain">
            <a className="navbar-link-lecchain" href="#">
              ENGINEERING
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
