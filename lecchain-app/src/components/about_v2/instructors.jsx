import React, { Component } from "react";

import "./instructors.css";

class Instructors extends Component {
  render() {
    return (
      <div className="lecchain-instructors">
        <div className="instructor-title">Instructors</div>
        <div className="instructors">
          <div className="instructor">
            <img
              className="instructor-img"
              src={process.env.PUBLIC_URL + "/instructors/Donayre.jpg"}
              alt=""
            />
            <div className="instructor-name">Alberto Donayre</div>
            <div className="instructor-job">
              UTEC Full time Professor - Bioengineering Department
            </div>
            <div className="instructor-email">
              <a href="mailto:adonayre@utec.edu.pe">adonayre@utec.edu.pe</a>
            </div>
          </div>
          <div className="instructor">
            <img
              className="instructor-img"
              src={process.env.PUBLIC_URL + "/instructors/Julio.jpg"}
              alt=""
            />
            <div className="instructor-name">Julio Valdivia</div>
            <div className="instructor-job">
              UTEC Director - Bioengineering Department & Center BIO
            </div>
            <div className="instructor-email">
              <a href="mailto:jvaldivia@utec.edu.pe">jvaldivia@utec.edu.pe</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Instructors;
