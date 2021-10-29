import React, { Component } from "react";

import "./general.css";

class Lectin4 extends Component {
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
              <b>Explore</b>: Which lectin?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                Ricin (ricinus communis) is a plant toxin protein and has two
                major domains linked by a disulfide bond, each of which has a
                galactose binding site.{" "}
                <b>
                  Ricin subunit A (RTA) is the toxic component of the
                  heterodimer and causes ribosome inactivation
                </b>
                . Ricin subunit B (non-toxic) is a promising adjuvant for the
                development of edible vaccines [47] because of its specifically
                and{" "}
                <b>
                  reversibly binding to carbohydrate moieties on cell surfaces
                </b>
                without biochemical modifications [47]. This ability,
                particularly the{" "}
                <b>M cells on Peyer's patches of mucosal surfaces</b>
                through microencapsulation strategies for mucosal immunization,
                marked a high interest for using RTB in vaccines [48].
              </div>
              <div className="subpopup-content-text">
                In contrast to pentameric cholera toxin B (CTB) and shigella
                toxin B (STB) subunits, common vaccines adjuvants and lectins,
                monomeric <b>RTB is isolated from plants</b>, possesses
                different membrane receptors, has no known size limitation for
                linked antigens, and has been produced in E. coli. Moreover,{" "}
                <b>
                  RTB binds to glycolipids and glycoproteins present on almost
                  every cell type
                </b>{" "}
                [49]. Also, it has a broader receptor-binding specificity than
                CTB protein or E. coli heat-labile toxin B [50]. Finally, RTB is
                a plant lectin, and as mentioned above, these proteins have
                shown thermotolerance properties. RTB becomes a potential
                thermotolerant adjuvant candidate for vaccines.
              </div>
              <div className="subpopup-content-text">
                Experiments involving the{" "}
                <b>
                  immunization of animals with different antigens fused to the
                  RTB
                </b>{" "}
                have proven its efficacy as a strong mucosal adjuvant, as low
                doses of it enhance the immune response to fusion proteins.
              </div>
              <div className="subpopup-content-img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/engineering/popups/table11.jpeg"
                  }
                  alt=""
                  width="90%"
                />
              </div>
            </div>
            <div className="subpopup-content-title">
              <b>Define</b>: Is RTB the best candidate?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                <b>RTB</b> has shown promising{" "}
                <b>evidence as an oral adjuvant</b>, and its possible{" "}
                <b>thermal tolerance</b> due to <b>plant lectin</b> properties
                make RTB the perfect candidate for our product.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lectin4;
