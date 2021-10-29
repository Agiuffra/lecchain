import React, { Component } from "react";

import "./projvid.css";

class ProjectVideo extends Component {
  render() {
    return (
      <div className="proj-provd">
        <div className="provd-title">Project Presentation video</div>
        <div className="provd-ttl">
          <b>Title: </b> Lecchain - A novel subunit, oral and thermostable
          vaccine for COVID-19.
        </div>
        <div className="provd-desc">
          <b>Abstract: </b>Complex logistics, distribution, and storage of most
          COVID-19 vaccines are a huge barrier to achieve immunization for
          low-income countries. UTEC-Peru aims to face this problem with a novel
          vaccine for COVID-19. Our solution is based on a chimeric antigen
          composed by the Receptor Binding Domain (RTB) antigen of SARS-COV-2
          and the plant lectin Ricin Toxin B (RTB). By engineering an E.coli for
          producing both proteins and thanks to the properties demonstrated by
          the scientific evidence around RTB as a mucosal adjuvant and the
          potential thermostable properties of plant lectins we can have a
          vaccine that does not require cold chains. Join us to see all the way
          we have traveled to reach our final proposal: <b>Lecchain</b>.
        </div>
        <div className="provd-video">
          <iframe
            width="1160"
            height="580"
            src="https://www.youtube.com/embed/bb1_7nj03oA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="provd-crdts">
          <b>Credits</b>
          <div className="crdts-dir">
            <b>Film makers: </b>Massiel Copara & Nathaly Dongo
          </div>
          <div className="crdts-edit">
            <b>Quechua Translation: </b>Jose Antonio Mendoza Valencia
          </div>
          <div className="crdts-nar">
            <b>Music Credits: </b>
          </div>
          <div className="crdts-cam">
            <b>Sound Editor: </b>Nathaly Dongo & Massiel Copara
          </div>
          <div className="crdts-brns">
            <b>Clips Credits: </b>
          </div>
          <div className="crdts-gen">
            <b>Participants: </b>Allison Aldoradin, Gladys Cavero, Massiel
            Copara, Nathaly Dongo, Yomali Ferreyra, Ximena Fernández, Marcelo
            Hurtado, Maria De Fátima Salazar, Diana Peña, Luis Quesada & Amalia
            Villena
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectVideo;
