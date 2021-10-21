import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-lecchain">
        <div className="left-footer-lecchain">
          <h4>CONTACT</h4>
          <div>
            address:{" "}
            <a className="link-footer-lecchain" href="">
              Jr. Medrano Silva 165, Barranco. Lima, Peru.
            </a>
          </div>
          <div>
            e-mail:{" "}
            <a
              className="link-footer-lecchain"
              href="mailto:lecchain@utec.edu.pe"
            >
              lecchain@utec.edu.pe
            </a>
          </div>
        </div>
        <div className="right-footer-lecchain">
          <a href="https://twitter.com/lecchain" target="_blank">
            <img
              src={process.env.PUBLIC_URL + "/footer/twitter_circulo.png"}
              alt="tw-link"
              width="80px"
            />
          </a>
          <a href="https://www.instagram.com/lecchain/" target="_blank">
            <img
              src={process.env.PUBLIC_URL + "/footer/IG_circulo.png"}
              alt="ig-link"
              width="80px"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/lecchain-peru"
            target="_blank"
          >
            <img
              src={process.env.PUBLIC_URL + "/footer/likedin_circulo.png"}
              alt="li-link"
              width="80px"
            />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
