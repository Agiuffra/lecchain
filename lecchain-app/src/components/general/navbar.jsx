import React, { Component } from "react";
import logo from "../logo-lecchain.png";
import Project from "../pages/project";
import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-lecchain d-flex justify-content-between">
        <Link className="navbar-brand" to="/">
          <img width="100px" src={logo} alt="" />
        </Link>
        <div className="d-flex justify-content-between navbar-buttons-lecchain">
          <div className={this.props.idx==="0"?"mr-5 ml-5 navbar-sel-back-lecchain":"mr-5 ml-5 navbar-nor-back-lecchain"}>
            <Link className="navbar-link-lecchain" to="/">
              HOME <span className="sr-only">(current)</span>
            </Link>
          </div>
          <div className={this.props.idx==="1"?"mr-5 ml-5 navbar-sel-back-lecchain":"mr-5 ml-5 navbar-nor-back-lecchain"}>
            <a className="navbar-link-lecchain" href="#">
              TEAM
            </a>
          </div>
          <div className={this.props.idx==="2"?"mr-5 ml-5 navbar-sel-back-lecchain":"mr-5 ml-5 navbar-nor-back-lecchain"}>
            <a className="navbar-link-lecchain" href="#">
              COLLABORATIONS
            </a>
          </div>
          <div className={this.props.idx==="3"?"mr-5 ml-5 navbar-sel-back-lecchain":"mr-5 ml-5 navbar-nor-back-lecchain"}>
            <Link className="navbar-link-lecchain" to="/project">
              PROJECT
            </Link>
          </div>
          <div className={this.props.idx==="4"?"mr-5 ml-5 navbar-sel-back-lecchain":"mr-5 ml-5 navbar-nor-back-lecchain"}>
            <a className="navbar-link-lecchain" href="#">
              LABORATORY
            </a>
          </div>
          <div className={this.props.idx==="5"?"mr-5 ml-5 navbar-sel-back-lecchain":"mr-5 ml-5 navbar-nor-back-lecchain"}>
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
