import React, { Component, createRef } from "react";

import * as Scroll from "react-scroll";

import "./navbar_v2.css";

var scrolling = Scroll.animateScroll;

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  scrollCrew() {
    Scroll.animateScroll.scrollTo(850);
  }

  scrollInstructors() {
    Scroll.animateScroll.scrollTo(2950);
  }

  scrollCollaborators() {
    Scroll.animateScroll.scrollTo(3600);
  }

  scrollSponsors() {
    Scroll.animateScroll.scrollToBottom();
  }

  render() {
    return (
      <nav className="navbar-lecchain">
        <div className="d-flex justify-content-between navbar-buttons-lecchain">
          <div
            className={
              this.props.idx === "0"
                ? "navbar-sel-back-lecchain about-lecchain-button"
                : "navbar-nor-back-lecchain about-lecchain-button"
            }
          >
            <a className="navbar-link-lecchain" href="/about">
              About
            </a>
            <ul className="dropdown-lecchain">
              <li onClick={this.scrollCrew}>Crew</li>
              <li onClick={this.scrollInstructors}>Instructors</li>
              <li onClick={this.scrollCollaborators}>Collaborators</li>
              <li onClick={this.scrollSponsors}>Sponsors</li>
            </ul>
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
