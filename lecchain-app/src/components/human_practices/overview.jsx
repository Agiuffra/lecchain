import React, { Component } from "react";

import "./overview.css";

class Overview extends Component {
  render() {
    return (
      <div className="humprac-ovrvw">
        <div className="ovrvw-title">The Problem</div>
        <div className="ovrvw-text">
          Peru is a very demographic limited country that does not have the
          sufficient resources and conditions for managing proper cold-chains in
          most of its regions. Actually, by 2019 about two million of the total
          population did not have access to electricity in their communities
          [1]. An important point considering that in a country where one in
          five rural households does not have access to electricity through the
          public grid, storing and distributing vaccines at the correct
          temperature can be challenging [1]. Probably the reason why there is a
          demographic vaccination difference between the peruvian regions, where
          only 5 of them have achieved more than 30% of the population [2].
        </div>
        <div className="ovrvw-text">
          The way doctors and nurses face this problem in Peru is by having a
          cold chain at the regional level, this is it, in the central part of
          the region. There, refrigerators and freezers are installed to keep
          vaccines in proper temperatures but for a limited time and health
          professionals need cold boxes for carrying out vaccines from the
          central part to the communities. However, due to the rugged geography
          of our country it is very difficult to get there by walking or by car,
          most of the time they need boats to arrive at the immunization sites.
          All this route, apart from being difficult, can take many hours;
          turning in a real problem for nurses to bring vaccines to every person
          in the region before losing their effectiveness. Like Peru, there are
          many other countries that have so many deficiencies for maintaining a
          correct cold chain and COVID-19 has brought them to light.
        </div>
        <div className="ovrvw-source">
          <div className="source-title">Source</div>
          <div className="source-src">
            [1] Instituto Nacional de Estadística e Informática, ‘Condiciones de
            vida en el Perú: Julio-Agosto-Septiembre’, Lima, 2020,{" "}
            <a href="http://m.inei.gob.pe/media/MenuRecursivo/boletines/informe-condiciones-de-vida.pdf">
              http://m.inei.gob.pe/media/MenuRecursivo/boletines/informe-condiciones-de-vida.pdf
            </a>
          </div>
          <div className="source-src">
            [2] Redacción LR, “Así avanza la vacunación contra la COVID-19 en
            Perú,” Larepublica.pe, 2021.{" "}
            <a href="https://data.larepublica.pe/avance-vacunacion-covid-19-peru/">
              https://data.larepublica.pe/avance-vacunacion-covid-19-peru/
            </a>
            (accessed Sep. 22, 2021).
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
