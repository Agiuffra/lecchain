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
                Maltose binding protein (<b>MBP</b>) is a{" "}
                <b>thermostable carrier</b>
                found in many microorganisms such as mesophilic and thermophilic
                bacteria, and archaea. For example MBP from thermococcus
                litoralis (Tli MBP), Pyrococcus furiosus (pfuMBP), and E. coli
                (EcoMBP). MBP function in the bacteria metabolism{" "}
                <b>
                  serves as a receptor for sugar transport, more specifically in
                  the transportation of maltose and maltodextrins, and
                  chemotaxis
                </b>
                [35]. Additionally, this protein has proven to be excellent
                folding chaperones, highly soluble, and an effective solubility
                enhancer due to its tertiary folding [39].
              </div>
              <div className="subpopup-content-text">
                Its most excellent stability is generated due to many factors:
                (i) the{" "}
                <b>
                  presence of many salt bridges that are known for promoting
                  thermostability
                </b>
                , (ii) the presence of <b>proline residues</b> in key positions
                that <b>enhance the thermostability</b>, (iii) the presence of
                <b>tightly packed networks of isoleucine residues</b> and other
                hydrophobic residues in the core of the protein that is the most
                determinant factor of the <b>protein’s high thermostability</b>{" "}
                [40].
              </div>
              <div className="subpopup-content-text">
                Some studies have reported the use of{" "}
                <b>MBPs from different organisms as a carrier</b> to evaluate
                the thermostability protection offered by each one. pfuMBP and
                Tli MBP protect the passenger protein at higher temperatures
                than the others.
              </div>
              <div className="subpopup-content-img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/engineering/popups/table9.jpeg"
                  }
                  alt=""
                  width="90%"
                />
              </div>
            </div>
            <div className="subpopup-content-title">
              <b>Define</b>: Is MBP the best for our solution?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                <b>pfuMBP</b> is an excellent thermotolerant carrier. It has
                been
                <b>reported in many investigations</b>. However, evidence
                related to its <b>fusion against antigens is still lacking</b>.
                Moreover, as we stated before,{" "}
                <b>subunit vaccines needed an adjuvant</b> joint to{" "}
                <b>enhance their immunogenicity</b>. Hence, as{" "}
                <b>MBP is just a thermo-carrier</b>, an{" "}
                <b>additional adjuvant</b> will need to{" "}
                <b>join the protein (MBP)</b>
                and the antigen (RBD) to enhance vaccine immunogenicity.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lectin2;
