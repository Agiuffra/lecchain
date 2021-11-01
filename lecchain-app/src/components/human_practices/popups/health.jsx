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
                src={process.env.PUBLIC_URL + "/humanpract/person/community_healt.png"}
                alt=""
                width="100%"
              />
            </div>
            <div className="comm-sect-person">
              <div className="comm-sect-person-img">
                <img
                  src={process.env.PUBLIC_URL + "/humanpract/person/7.jpeg"}
                  alt=""
                  width="175px"
                  height="175px"
                />
              </div>
              <div className="comm-sect-person-text">
                <div>
                  <b> Name: </b> Ronald Goicochea
                </div>
                <div>
                  <b> Occupation: </b> Surgeon in Ricardo Palma’s hospital
                </div>
                <div>
                  <b> Fact: </b> He is a doctor who  has been in the front row 
                  throughout the COVID period in Peru. And he has <b>experience 
                  in different vaccination campaigns throughout the country </b>. 
                  For this reason, he was able to experiment with all the 
                  <b> resources needed </b> in order to <b> improve the vaccination in 
                  rural areas </b>.
                </div>
              </div>
            </div>
            <div className="comm-sect-person">
              <div className="comm-sect-person-img">
                <img
                  src={process.env.PUBLIC_URL + "/humanpract/person/10.jpg"}
                  alt=""
                  width="175px"
                  height="175px"
                />
              </div>
              <div className="comm-sect-person-text">
                <div>
                  <b> Name: </b> Nery Peña
                </div>
                <div>
                  <b> Occupation: </b> Resident doctor at the Lambayeque Regional Hospital
                </div>
                <div>
                  <b> Fact: </b> She is a doctor who did her <b> internship in rural areas </b> of 
                  the Lambayeque region and realized the <b> weak infrastructure of the health 
                  centers</b>. Likewise, she performed her serums in a <b> covid hospital </b> so she was 
                  closely aware of the <b> vaccination plan</b>.
                </div>
              </div>
            </div>
            <div className="comm-sect-person">
              <div className="comm-sect-person-img">
                <img
                  src={process.env.PUBLIC_URL + "/humanpract/person/8.jpeg"}
                  alt=""
                  width="175px"
                  height="175px"
                />
              </div>
              <div className="comm-sect-person-text">
                <div>
                  <b> Name: </b> Gladys Mendoza
                </div>
                <div>
                  <b> Occupation: </b> Nurse at the Hospital of support in Camana, Arequipa
                </div>
                <div>
                  <b> Fact: </b> In <b> charge of vaccination </b> within the <b> Arequipa region
                  in Camana</b>.
                </div>
              </div>
            </div>
            <div className="comm-sect-person">
              <div className="comm-sect-person-img">
                <img
                  src={process.env.PUBLIC_URL + "/humanpract/person/5.jpeg"}
                  alt=""
                  width="175px"
                  height="175px"
                />
              </div>
              <div className="comm-sect-person-text">
                <div>
                  <b> Name: </b> Julia Gonzales Perez
                </div>
                <div>
                  <b> Occupation: </b> Nurse in Pucallpa vaccination process 
                </div>
                <div>
                  <b> Fact: </b> She is a nurse who has <b> worked directly </b> in the <b> vaccination 
                  process against covid 19 in Pucallpa</b>. Therefore, she knows about the 
                  <b> handling and transportation of vaccines </b> in that region. Pucallpa is one 
                  of the regions of the Peruvian jungle that initially lagged in the vaccination 
                  process. 
                </div>
              </div>
            </div>
            <div className="comm-sect-person">
              <div className="comm-sect-person-img">
                <img
                  src={process.env.PUBLIC_URL + "/humanpract/person/2.png"}
                  alt=""
                  width="175px"
                  height="175px"
                />
              </div>
              <div className="comm-sect-person-text">
                <div>
                  <b> Name: </b> María Julia Vega Ramirez
                </div>
                <div>
                  <b> Occupation: </b> Pharmaceutical engineer
                </div>
                <div>
                  <b> Fact: </b> In charge of the <b> vaccination process </b> so she needs to 
                  <b> know what temperature to keep </b> and remove for application and at what 
                  time.
                </div>
              </div>
            </div>
            <div className="comm-sect-person">
              <div className="comm-sect-person-img">
                <img
                  src={process.env.PUBLIC_URL + "/humanpract/person/4.jpg"}
                  alt=""
                  width="175px"
                  height="175px"
                />
              </div>
              <div className="comm-sect-person-text">
                <div>
                  <b> Name: </b> Marisa Mandarachi Rivera
                </div>
                <div>
                  <b> Occupation: </b> Nurse in charge of the South of Lima
                </div>
                <div>
                  <b> Fact: </b> She is <b> head of the logistics of the cold chain </b> used 
                  throughout the vaccination process in the <b> southern region of the country's 
                  capital</b>. Likewise, she has <b> worked directly in the vaccination process </b> for 
                  COVID 19.
                </div>
              </div>
            </div>
            <div className="comm-sect-person">
              <div className="comm-sect-person-img">
                <img
                  src={process.env.PUBLIC_URL + "/humanpract/person/6.jpeg"}
                  alt=""
                  width="175px"
                  height="175px"
                />
              </div>
              <div className="comm-sect-person-text">
                <div>
                  <b> Name: </b> Alexandra Hernández
                </div>
                <div>
                  <b> Occupation: </b> Surgeon
                </div>
                <div>
                  <b> Fact: </b> She performed her SERUM in different regions of the 
                  country, closely <b> experiencing the vaccination process that must be 
                  carried out in places with few medical resources</b>.
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
