import React, { Component } from "react";
import icon from "./../../project-icon.png";
import learnmore from "./../../learnmore.png";
import * as Scroll from "react-scroll";

import "./init.css";

class Initial extends Component {
  scrollProjPres() {
    Scroll.animateScroll.scrollTo(4450);
  }

  render() {
    return (
      <div className="project-init">
        <div className="init-txt">
          <div className="txt-title">PROJECT</div>
          {/* <div className="txt-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ex
            laboriosam reiciendis ut est tempora?
          </div> */}
          <div className="txt-button" onClick={this.scrollProjPres}>
            <img src={learnmore} alt="learn-more" />
          </div>
        </div>
        <div className="init-image">
          <img src={icon} alt="icono" />
        </div>
      </div>
    );
  }
}

export default Initial;
