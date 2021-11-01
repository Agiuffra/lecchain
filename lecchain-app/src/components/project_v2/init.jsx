import React, { Component } from "react";
import { If, Fallback, Then, Else } from 'react-if';
import icon from "./../../project-icon.png";
import learnmore from "./../../learnmore.png";
import * as Scroll from "react-scroll";

import "./init.css";

class Initial extends Component {
  constructor(props){
    super(props);
  }

  state = { language: 'EN' }

  onChange(lang) {
    console.log("Lang: " + lang);
    this.state.language = lang;
  }

  scrollProjPres() {
    Scroll.animateScroll.scrollTo(4450);
  }

  render() {
    return (
      <div className="project-init">
        <div className="init-txt">
          <If condition={this.state.language==='EN'}>
            <Then>
              <div className="txt-title">PROJECT</div>
            </Then>
            <Else>
              <div className="txt-title">PROJECTO</div>
            </Else>
          </If>
          
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
