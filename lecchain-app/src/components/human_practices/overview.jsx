import React, { Component } from "react";

import "./overview.css";

class Overview extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    im0: false,
  };
  toggleImage = () => {
    this.setState({
      im0: !this.state.im0,
    });
  };
  render() {
    return (
      <div className="humprac-ovrvw">
        <div className="ovrvw-title">The Problem</div>
        <div className="ovrvw-text">
          Peru is a very{" "}
          <b>
            demographic limited country that does not have the sufficient
            resources and conditions for managing proper cold-chains
          </b>{" "}
          in most of its regions. Actually, by 2019 about{" "}
          <b>
            two million of the total population did not have access to
            electricity in their communities
          </b>
          [1]. An important point considering that in a country where one in
          <b>
            five rural households does not have access to electricity through
            the public grid, storing and distributing vaccines at the correct
            temperature can be challenging
          </b>{" "}
          [1]. Probably the reason why there is a demographic vaccination
          difference between the <b>peruvian regions</b>, where only{" "}
          <b>5 of them have achieved more than 30% of the population</b> [2].
        </div>
        <div className="ovrvw-text">
          The way <b>doctors and nurses</b> face this problem in Peru is by{" "}
          <b>having a cold chain at the regional level</b>, this is it, in the{" "}
          <b>central part of the region</b>. There,{" "}
          <b>
            refrigerators and freezers are installed to keep vaccines in proper
            temperatures
          </b>{" "}
          but for a <b>limited time</b> and health professionals{" "}
          <b>need cold boxes for carrying out vaccines</b> from the central part
          to the communities. However, due to the rugged geography of our
          country it is very difficult to get there by <b>walking or by car</b>,
          most of the time they{" "}
          <b>need boats to arrive at the immunization sites</b>. All this route,
          apart from being difficult, can take many hours;
          <b>
            turning in a real problem for nurses to bring vaccines to every
            person in the region before losing their effectiveness
          </b>
          . Like Peru, there are many other countries that have so many
          deficiencies for maintaining a correct cold chain and COVID-19 has
          brought them to light.
        </div>
        <div className="ovrvw-img">
          <img
            src={process.env.PUBLIC_URL + "/humanpract/coldchain.png"}
            alt=""
            width="700px"
            className="ovrvw-img-img"
            onClick={this.toggleImage}
          />
          <div className={this.state.im0 ? "ovrvw-img-txt" : "none"}>
            Vaccines need to pass complex cold chains from the factory, national
            and regional storage facilities until reaching remote sites of
            immunization. All this path involve lot of time and resources making
            impossible to maintain mRNA vaccines.
          </div>
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
