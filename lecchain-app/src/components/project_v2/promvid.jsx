import React, { Component } from "react";
//import Vid from "./../../video-prom.mp4";

import "./promvid.css";

class PromotionalVideo extends Component {
  render() {
    return (
      <div className="proj-prmvd">
        <div className="prmvd-title">Promotional video</div>
        <div className="prmvd-subt">
          UTEC-Perú: Lecchain (2021) - Project Promotion Video [Spanish]
        </div>
        <div className="prmvd-ttl">
          <b>Title: </b> FlavoFlow - a comprehensive exogenous fish infections
          detection, treatment and prevention strategy.
        </div>
        <div className="prmvd-desc">
          <b>Abstract: </b>Throughout the United States, 23.1 million people
          lack access to fresh and affordable produce. Lambert iGEM presents
          Agrosense, a community-based aquaponics system that integrates
          synthetic biology. By engineering nutrient biosensors, we aim to
          reduce maintenance costs for aquaponics systems. With a focus on
          empowering communities, we plan to partner with schools and
          organizations to educate next-generation agriculture technology
          leaders on the intersection of aquaponics, synthetic biology, and
          engineering.
        </div>
        <div className="prmvd-video">
          <iframe
            width="1160"
            height="580"
            src="https://www.youtube.com/embed/bb1_7nj03oA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          {/* <video controls>
            <source src="" type="video/mp4" />
            video not supported.
          </video> */}
        </div>
        <div className="prmvd-crdts">
          <b>Credits:</b>
          <div className="crdts-dir">
            <b>Director/Producer: </b>Kathy Ye
          </div>
          <div className="crdts-edit">
            <b>Editor: </b>Payton Gray, Kathy Ye
          </div>
          <div className="crdts-nar">
            <b>Narrator: </b>Sri Pinnamaredy
          </div>
          <div className="crdts-cam">
            <b>Camera Operators: </b>Kathy Ye, Janet Standeven, Saif Khan, Zoya
            Mir
          </div>
          <div className="crdts-brns">
            <b>Brainstorming Committee: </b>Kathy Ye, Zoya Mir, Nega Lingam, Sri
            Pinnamaredy
          </div>
          <div className="crdts-gen">
            <b>General Video Committee: </b>Aditya Prabhaker, Faith Johnson,
            Melanie Kim, Neha Lingam
          </div>
        </div>
      </div>
    );
  }
}

export default PromotionalVideo;
