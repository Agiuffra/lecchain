import React, { Component } from "react";
//import Vid from "./../../video-prom.mp4";

import "./promvid.css";

class PromotionalVideo extends Component {
  render() {
    return (
      <div className="proj-prmvd">
        <div className="prmvd-title">Promotional video</div>
        {/* <div className="prmvd-subt">
          Lecchain - A novel subunit, oral and thermostable vaccine for
          COVID-19.
        </div> */}
        <div className="prmvd-ttl">
          <b>Title: </b> Lecchain - A novel subunit, oral and thermostable
          vaccine for COVID-19.
        </div>
        <div className="prmvd-desc">
          <b>Abstract: </b>The Coronavirus that is currently raging through the
          world will definitely not be the last virus that has the potential of
          becoming a pandemic. Vaccines will continue being developed and
          complex distribution for hard-to-reach regions will continue being a
          problem. As a way to face and be prepared for future pandemics iGEM
          DesignLeague team UTEC-Peru proposed{" "}
          <b>
            Lecchain: A novel subunit, oral and thermostable vaccine for
            COVID-19 that does not require cold chains
          </b>
          .
        </div>
        <div className="prmvd-video">
          <iframe
            width="1160"
            height="580"
            src="https://www.youtube.com/embed/esPDxMxKNpw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="prmvd-crdts">
          <b>Credits</b>
          <div className="crdts-dir">
            <b>Film maker: </b>Massiel Copara & Nathaly Dongo
          </div>
          <div className="crdts-edit">
            <b>Quechua Translation: </b>Jose Antonio Mendoza Valencia
          </div>
          <div className="crdts-nar">
            <b>Muisc Credits: </b>Antonio Vivaldi: Le quattro stagioni
          </div>
          <div className="crdts-cam">
            <b>Sound Editor: </b>Nathaly Dongo & Massiel Copara
          </div>
          <div className="crdts-brns">
            <b>Clips Credits: </b>Videvo
          </div>
        </div>
      </div>
    );
  }
}

export default PromotionalVideo;
