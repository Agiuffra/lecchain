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
                src={process.env.PUBLIC_URL + "/humanpract/person/community - users.png"}
                alt=""
                width="100%"
              />
            </div>
            <div className="comm-sect-person">
              <div className="comm-sect-person-img">
                <img
                  src={process.env.PUBLIC_URL + "/humanpract/person/1.jpeg"}
                  alt=""
                  width="175px"
                  height="175px"
                />
              </div>
              <div className="comm-sect-person-text">
                <div>
                  <b> Name: </b> James Van Hallen Arbildo Pacheco
                </div>
                <div>
                  <b> Occupation: </b> University student living in Pucallpa
                </div>
                <div>
                  <b> Fact: </b> Pucallpa is one of the <b> regions of the Peruvian 
                  jungle that initially lagged behind in the vaccination </b> process 
                  due to the <b> lack of cold chains </b> and <b> difficult access to 
                  the city </b>. For this reason, James gives us a citizen perspective 
                  of how the vaccination campaign is developing in that area.
                </div>
              </div>
            </div>
            <div className="comm-sect-person">
              <div className="comm-sect-person-img">
                <img
                  src={process.env.PUBLIC_URL + "/humanpract/person/vacunaton.png"}
                  alt=""
                  width="175px"
                  height="175px"
                />
              </div>
              <div className="comm-sect-person-text">
                <div>
                  <b> User: </b> People in the Vacunaton
                </div>
                <div>
                  <b> Fact: </b> People going to big centers for receiving vaccines 
                  usually are misinformed around topics related to immunization, 
                  side effects, among others. In that sense, the key to connect 
                  with them starts by knowing what they think.
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
