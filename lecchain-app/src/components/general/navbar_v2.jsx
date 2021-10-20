import React, { Component, createRef } from "react";

import * as Scroll from "react-scroll";

import "./navbar_v2.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  /* Scroll de About */
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

  /* Scroll de Project */
  scrollDescription() {
    Scroll.animateScroll.scrollTo(650);
  }

  scrollRoadmap() {
    Scroll.animateScroll.scrollTo(1300);
  }

  scrollInfographic() {
    Scroll.animateScroll.scrollTo(2050);
  }

  scrollPromVid() {
    Scroll.animateScroll.scrollTo(2950);
  }

  scrollProjPres() {
    Scroll.animateScroll.scrollTo(4140);
  }

  scrollExperiments() {
    Scroll.animateScroll.scrollTo(5000);
  }

  render() {
    return (
      <nav
        className={
          this.props.dark === "1"
            ? "navbar-lecchain darkmode-txt"
            : "navbar-lecchain clearmode-txt"
        }
      >
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
            <ul
              className={
                this.props.about === "1"
                  ? "dropdown-lecchain dropdown-dark-lecchain"
                  : "nodisp"
              }
            >
              <li onClick={this.scrollCrew}>Crew</li>
              <li onClick={this.scrollInstructors}>Instructors</li>
              <li onClick={this.scrollCollaborators}>Collaborators</li>
              <li onClick={this.scrollSponsors}>Sponsors</li>
            </ul>
          </div>
          <div
            className={
              this.props.idx === "1"
                ? "navbar-sel-back-lecchain about-lecchain-button"
                : "navbar-nor-back-lecchain about-lecchain-button"
            }
          >
            <a className="navbar-link-lecchain" href="/project">
              Project
            </a>
            <ul
              className={
                this.props.project === "1" ? "dropdown-lecchain" : "nodisp"
              }
            >
              <li onClick={this.scrollDescription}>Description</li>
              <li onClick={this.scrollRoadmap}>Roadmap</li>
              <li onClick={this.scrollInfographic}>Infographic</li>
              <li onClick={this.scrollPromVid}>Promo video</li>
              <li onClick={this.scrollProjPres}>Presentation</li>
              {/* <li onClick={this.scrollSponsors}>Biosafety</li> */}
              <li onClick={this.scrollExperiments}>Experiments</li>
            </ul>
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
