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
                src={process.env.PUBLIC_URL + "/humanpract/person/community - infra.png"}
                alt=""
                width="100%"
              />
            </div>
            <div className="comm-sect-person">
              <div className="comm-sect-person-img">
                <img
                  src={process.env.PUBLIC_URL + "/humanpract/person/9.jpg"}
                  alt=""
                  width="175px"
                  height="175px"
                />
              </div>
              <div className="comm-sect-person-text">
                <div>
                  <b> Name: </b> Marcos Walter Seclen Fernandez
                </div>
                <div>
                  <b> Occupation: </b> Sanitary inspector at DIGESA - La libertad
                </div>
                <div>
                  <b> Fact: </b>  <b> DIGESA </b> is one of the institutions that works 
                  closely with regard to the <b> distribution of vaccines and the maintenance 
                  of cold chains in the country</b>.
                </div>
              </div>
            </div>
            <div className="comm-sect-person">
              <div className="comm-sect-person-img">
                <img
                  src={process.env.PUBLIC_URL + "/humanpract/person/3.png"}
                  alt=""
                  width="175px"
                  height="175px"
                />
              </div>
              <div className="comm-sect-person-text">
                <div>
                  <b> Name: </b> Alex Távara Aranibar
                </div>
                <div>
                  <b> Occupation: </b> Specialist in Territorial Development Policies in the 
                  Presidency of the Council of Ministers of Peru
                </div>
                <div>
                  <b> Fact: </b> He has experience in issues related to the <b> vaccination plan </b>
                  that is <b> carried out in the country from public policies</b>. In addition, for 
                  this reason he has traveled to the <b> most remote areas of the country to evaluate 
                  the vaccination process</b>.
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
