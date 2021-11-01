import React, { Component } from "react";

import "./user.css";

class User extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="hp-popup-box">
        <div className="hp-box">
          <div className="close-icon" onClick={this.handleClick}>
            x
          </div>
          <div className="box-content">
            <div className="comm-sect-sep">
              <img
                src={process.env.PUBLIC_URL + "/humanpract/person/community -experts.png"}
                alt=""
                width="100%"
              />
            </div>
            <div className="comm-sect-person">
              <div className="comm-sect-person-logo">
                <img
                  src={process.env.PUBLIC_URL + "/humanpract/person/roche.png"}
                  alt=""
                  width="175px"
                  height="100px"
                />
              </div>
              <div className="comm-sect-person-text">
                <div>
                  <b> Roche </b> is a <b> Swiss multinational healthcare company </b> that 
                  operates worldwide under two divisions: <b> Pharmaceuticals and Diagnostics</b>. 
                  It is the <b> largest pharmaceutical company in the world </b> and the leading 
                  provider of cancer treatments globally.
                </div>
              </div>
            </div>
            <div className="comm-sect-person">
              <div className="comm-sect-person-logo">
                <img
                  src={process.env.PUBLIC_URL + "/humanpract/person/mased.png"}
                  alt=""
                  width="175px"
                  height="100px"
                />
              </div>
              <div className="comm-sect-person-text">
                <div>
                  Company dedicated to the <b> commercialization of laboratory equipment and 
                  supplies</b>. It represents big biotechnology companies such as <b> BioRad and 
                  Promega </b> in the country.
                </div>
              </div>
            </div>
            <div className="comm-sect-person">
              <div className="comm-sect-person-logo">
                <img
                  src={process.env.PUBLIC_URL + "/humanpract/person/auna.png"}
                  alt=""
                  width="175px"
                  height="100px"
                />
              </div>
              <div className="comm-sect-person-text">
                <div>
                  Auna offers comprehensive health care throughout a <b> network of clinics 
                  and wellness centers</b>; transversal health services, insurance products; 
                  and, all this, with the support of the <b> most advanced medical and academic 
                  research</b>. Auna has been working in <b> several projects to face COVID-19</b>.
                </div>
              </div>
            </div>
            <div className="comm-sect-person">
              <div className="comm-sect-person-logo">
                <img
                  src={process.env.PUBLIC_URL + "/humanpract/person/genlab.png"}
                  alt=""
                  width="175px"
                  height="100px"
                />
              </div>
              <div className="comm-sect-person-text">
                <div>
                  Company with more than 19 years of experience integrating projects and 
                  providing <b> technological solutions </b> in topics related to <b>life sciences 
                  research</b>.
                </div>
              </div>
            </div>
            <div className="comm-sect-person">
              <div className="comm-sect-person-logo">
                <img
                  src={process.env.PUBLIC_URL + "/humanpract/person/bio.jpg"}
                  alt=""
                  width="175px"
                  height="100px"
                />
              </div>
              <div className="comm-sect-person-text">
                <div>
                  The Bioengineering Research Center (BIO) looks to integrate <b> engineering 
                  with biology</b>, solving complex problems, both in the <b> biomedical </b> and 
                  <b> biotechnological areas</b>. BIO seeks to become a reference center and lead 
                  <b> technological research </b> and innovation in its <b> 10 lines of research</b>.
                </div>
              </div>
            </div>
            <div className="comm-sect-person">
              <div className="comm-sect-person-logo">
                <img
                  src={process.env.PUBLIC_URL + "/humanpract/person/biotec.png"}
                  alt=""
                  width="175px"
                  height="100px"
                />
              </div>
              <div className="comm-sect-person-text">
                <div>
                  It is the <b> first biotechnology company in Peru</b>, which meets the highest 
                  quality standards in the development and research of <b> cell therapies </b>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
