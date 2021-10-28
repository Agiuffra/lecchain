import React, { Component } from "react";
import person from "./../../home_hand.png";
import start from "./../../start.png";
import "./init.css";

class Initial extends Component {
  soundGo = () => {
    var snd = new Audio(process.env.PUBLIC_URL + "testaudio.ogg");
    snd.play();
  };
  render() {
    return (
      <div className="home-init">
        <div className="init-text">
          <div className="init-title">LECCHAIN</div>
          <div className="init-body">One more degree, one more life.</div>
          <div className="init-group">
            <img
              src={start}
              alt="Start"
              /* onClick={this.soundGo} */
              className="init-group-image"
            />
            <div className="nones">
              <audio id="audiox" controls>
                <source src={process.env.PUBLIC_URL + "testaudio.ogg"} />
              </audio>
            </div>
            <div className="init-msg">ARE YOU READY TO SAVE LIVES WITH US?</div>
          </div>
        </div>
        <div className="init-img">
          <img src={person} alt="Person" className="init-image" />
        </div>
      </div>
    );
  }
}

export default Initial;
