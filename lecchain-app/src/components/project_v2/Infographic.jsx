import React, { Component } from "react";

import "./infographic.css";

class Infographic extends Component {
  render() {
    return (
      <div className="proj-info">
        <div className="info-title">Infographic: Lecchain UTEC-Perú</div>
        <div className="info-slogn">
          Lecchain, a vaccine candidate that does not require refigeration.
        </div>
        <div className="info-auth">
          <b>Authors: </b>Aldoradin, Allison - Cavero, Gladys - Cisneros, Jose -
          Copara, Massiel - Dongo, Nathaly - Ferreyra, Yomali Fernandez, Ximena
          - Giuffra, Alessandro - Hurtado, Marcelo - Márquez, Valeria - Salazar,
          Maria - Peña, Diana -Quesada, Luis - Villegas. Ariana - Villena,
          Amalia
        </div>
        <div className="info-attr">
          <div className="attr-title">Attributions</div>
          <div className="atrr-brnstr">
            <b>Brainstorms: </b>all team members.
          </div>
          <div className="atrr-infdsgn">
            <b>Infographic Design: </b>asdasdasdasdasd and asdasdasdasd.
          </div>
        </div>
      </div>
    );
  }
}

export default Infographic;
