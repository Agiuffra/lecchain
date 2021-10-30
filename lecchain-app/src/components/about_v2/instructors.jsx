import React, { Component } from "react";
import Instpopup from "./inst_popup";

import "./instructors.css";

class Instructors extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    donayrePopup: false,
    valdiviaPopup: false,
  };
  toggleDonayre = () => {
    this.setState({
      donayrePopup: !this.state.donayrePopup,
    });
  };
  toggleValdivia = () => {
    this.setState({
      valdiviaPopup: !this.state.valdiviaPopup,
    });
  };
  render() {
    return (
      <div className="lecchain-instructors">
        <div className="instructor-title">Instructors</div>
        <div className="instructors">
          <div className="instructor" onClick={this.toggleDonayre}>
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
          <div className="instructor" onClick={this.toggleValdivia}>
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
        {this.state.donayrePopup ? (
          <Instpopup
            toggle={this.toggleDonayre}
            id="0"
            image="/instructors/Donayre.jpg"
            name="Alberto J. Donayre-Torres"
            job="UTEC Full time Professor - Bioengineering Department"
            title="Ph.D., Plant Genetics and Biotechnology"
            experience={[
              "Colorado State University, Department of Biology. Research: Plant Synthetic Biology. Position: Postdoctoral Fellow",
              "Tecnológico de Monterrey (Campus Puebla) México. Department of Engineering and Biotechnology. Permanent Professor in the School of Engineering in Biotechnology.",
            ]}
            publications={[
              "Tessema K. Kassaw, Alberto J. Donayre-Torres, Mauricio S. Antunes, Kevin J. Morey, June I. Medford. Engineering synthetic regulatory circuits in plants. Plant Science. Available online 11 April 2018. https://doi.org/10.1016/j.plantsci.2018.04.005.",
              "Donayre-Torres, Ernesto Esquivel-Soto, María de Lourdes Gutiérrez-Xicoténcatl, Fernando R Esquivel-Guadarrama and Miguel A Gómez-Lim. Production and Purification of Immunologically active Core Protein p24 from HIV-1 fused to Ricin Toxin B subunit in E. coli.  Virology Journal 2009, 6:17. doi:  10.1186/1743-422X-6-17.",
              "Donayre-Torres A., Reynaga C., Gomez Lim M. Expression of Chimeric Genes from GAG (HIV-1) produced in Tomato Plants (Lycopersicon esculentum Mill.) and in Escherichia coli. Revista Fitotecnia Mexicana ISSN: 0187-7380, June 2008.",
            ]}
          />
        ) : null}
        {this.state.valdiviaPopup ? (
          <Instpopup
            toggle={this.toggleValdivia}
            id="0"
            image="/instructors/Julio.jpg"
            name="Julio Valdivia Silva"
            job="UTEC Director - Bioengineering Department & Center BIO"
            title="Ph.D., Focused in Astrobiology and Cancer Research"
            experience={[
              "Founder of the Immunology Research Group, the Peruvian Academy of Molecular Medicine and the Scientific Society of Astrobiology of Peru.",
              "Postdoctoral stays at the Cancer Stem Cell Research Lab - Stanford University CA-USA, Life Science and Astrobiology Division at NASA Ames Research Center Moffett Field CA USA, Singularity University CA, USA, and at the Biomedical Research Institute, UNAM.",
            ]}
          />
        ) : null}
      </div>
    );
  }
}

export default Instructors;
