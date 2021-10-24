import React, { Component } from "react";

import "./general.css";

class Lectin2 extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="subpopup-box">
        <div className="sub-box">
          <div className="close-icon" onClick={this.handleClick}>
            X
          </div>
          <div className="subpopup-content">
            <div className="subpopup-content-title">
              <b>Explore</b>: Can MBP be our candidate?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                Maltose binding protein (MBP) is a thermostable carrier found in
                many microorganisms such as mesophilic and thermophilic
                bacteria, and archaea. For example MBP from thermococcus
                litoralis (Tli MBP), Pyrococcus furiosus (pfuMBP), and E. coli
                (EcoMBP). MBP function in the bacteria metabolism serves as a
                receptor for sugar transport, more specifically in the
                transportation of maltose and maltodextrins, and chemotaxis
                [35]. Additionally, this protein has proven to be excellent
                folding chaperones, highly soluble, and an effective solubility
                enhancer due to its tertiary folding [39].
              </div>
              <div className="subpopup-content-text">
                Its most excellent stability is generated due to many factors:
                (i) the presence of many salt bridges that are known for
                promoting thermostability, (ii) the presence of proline residues
                in key positions that enhance the thermostability, (iii) the
                presence of tightly packed networks of isoleucine residues and
                other hydrophobic residues in the core of the protein that is
                the most determinant factor of the protein’s high
                thermostability [40].
              </div>
              <div className="subpopup-content-text">
                Some studies have reported the use of MBPs from different
                organisms as a carrier to evaluate the thermostability
                protection offered by each one. pfuMBP and Tli MBP protect the
                passenger protein at higher temperatures than the others.
              </div>
              <div className="subpopup-content-img">aquí va una tabla</div>
            </div>
            <div className="subpopup-content-title">
              <b>Define</b>: Is MBP the best for our solution?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                pfuMBP is an excellent thermotolerant carrier. It has been
                reported in many investigations. However, evidence related to
                its fusion against antigens is still lacking. Moreover, as we
                stated before, subunit vaccines needed an adjuvant joint to
                enhance their immunogenicity. Hence, as MBP is just a
                thermo-carrier, an additional adjuvant will need to join the
                protein (MBP) and the antigen (RBD) to enhance vaccine
                immunogenicity.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lectin2;
