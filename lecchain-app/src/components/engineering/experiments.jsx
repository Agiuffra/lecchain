import React, { Component } from "react";

import "./experiments.css";

class Experiments extends Component {
  render() {
    return (
      <div className="proj-exp">
        <div className="exp-title">Test</div>
        <div className="exp-desgn">
          <div className="desgn-title">Experiments</div>
          <div className="desgn-cont">
            <div className="desgn-txt">
              <div>
                The chimeric antigen <b>RTB - RBD</b>, <b>Lecchain</b>, will be
                evaluated and compared through an experimental design its
                thermostable properties with the <b>pfuMBP - RBD construct</b>
                (positive control). This is because, as mentioned before,{" "}
                <b>pfuMBP is a well-known thermotolerant protein</b> that has
                shown to <b>increase thermal properties of many peptides</b>.
                Thus, a{" "}
                <b>
                  comparison between the effects of both proteins to enhance
                  thermotolerance of RBD will guide the experiments
                </b>
                .
              </div>
              <div>
                In order to evaluate and demonstrate these thermal stability
                properties the following experimental design is proposed. This
                experiment is composed of three groups;{" "}
                <b>
                  a lyophilized and non-lyophilized RTB-RBD construct, a
                  lyophilized and non-lyophilized PfuMBP-RBD construct and a
                  control group
                </b>
                consisting of independent samples of <b>RBD, RTB and PfuMBP</b>.
                All these groups will pass a{" "}
                <b>thermostability assay and a SDS Page evaluation</b> to
                determine their integrity. Finally, a{" "}
                <b>tertiary protein structure immunoassay</b> will be done in
                order to{" "}
                <b>
                  evaluate immunological activity of RBD after being exposed to
                  different temperatures
                </b>
                .
              </div>
            </div>
            <div className="desgn-img">
              {/* <img
                src={process.env.PUBLIC_URL + "/engineering/design.png"}
                alt=""
                width="45%"
              /> */}
            </div>
          </div>
        </div>
        <div className="exp-metho">
          <div className="metho-title">Methodology</div>
          <div className="metho-cont">
            <div className="metho-txt">
              <div>
                <b>Main goal</b>: To design and implement a candidate
                thermotolerance vaccine against SARS-CoV 2 based on Ricin Toxin
                B (RTB) fused SARS-CoV2 RBD antigen.
              </div>
              <div>
                For amplifying, all the constructs will be synthesized and
                inserted into <b>pGEM®-T Easy Vector</b>, the control groups{" "}
                <b>
                  RTB and MBP will be inserted between NcoI/SalI restriction
                  sites and RBD, RTB/RBD and MBP/RBD between NcoI/SacI
                </b>
                . The same restriction enzymes will be used to insert the
                constructs in the pET-28b vector.
              </div>
              <div>
                Recombinant <b>pET28a plasmids</b> will be transformed into E.
                coli BL21(DE3) following the{" "}
                <b>Kit One Shot® BL21(DE3) de INVITROGEN</b>. Protein will be
                purified using HisGraviTrap kit from Qiagen™under denaturing
                conditions and samples will pass through{" "}
                <b>Nickel-sepharose columns</b> and wash with{" "}
                <b>imidazole in order to isolate His-tagged proteins</b>. The
                purified proteins will be confirmed by SDS-PAGE analysis.
              </div>
              <div>
                Find more information in the Protocols document in the{" "}
                <b>Document Section</b>.
              </div>
            </div>
            <div className="metho-img">
              <img
                src={process.env.PUBLIC_URL + "/engineering/methodology.png"}
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>
        <div className="exp-proto">
          <div className="proto-title">Analytical Assays</div>
          <div className="proto-cont">
            <div className="proto-sect">
              <div className="proto-sect-contnt">
                <div className="proto-sect-txt">
                  <div className="proto-sect-title">Thermostability Assay</div>
                  <div>
                    The thermostability test is one of the most important
                    processes because from this experiment it will be possible
                    to determine if the vaccine can be maintained at higher
                    temperatures. It will be divided into two main steps: the
                    heat exposure of the samples, and the detection of protein
                    degradation using SDS-PAGE. The first experiment consists of
                    putting the freeze-dried RTB-RBD and pfuMBP-RBD fused
                    protein at different temperatures. The second experiment
                    will be performed with the same proteins and groups.
                  </div>
                  <div>
                    The first step is to obtain the lyophilized proteins of each
                    of the previously described groups. Then, each of the
                    samples will be placed at three different temperatures for
                    an amount of time. As can be seen in the next figure, the
                    recombinant proteins will be exposed at 4, 25 and 40 °C.
                  </div>
                  <div>
                    The samples that will be exposed to the different
                    temperatures will then undergo SDS-PAGE analysis to
                    determine whether the proteins are degraded or maintain
                    their initial molecular weight. It is worth mentioning that
                    the lyophilized protein group should be reconstituted with
                    water at its initial concentration.
                  </div>
                </div>
                <div className="proto-sect-img">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/engineering/termo_assay.png"
                    }
                    alt=""
                    width="90%"
                  />
                </div>
              </div>
            </div>
            <div className="proto-sect">
              <div className="proto-sect-contnt">
                {/* <div className="proto-sect-img">
                  {/* <img
                    src={process.env.PUBLIC_URL + "/engineering/design.png"}
                    alt=""
                    width="45%"
                  /> 
                </div> */}
                <div className="proto-sect-txt">
                  <div className="proto-sect-title">
                    Tertiary protein structure immunoassay
                  </div>
                  <div>
                    In order to identify the structural integrity of RBD
                    antigen, a solid-phase sandwich Enzyme-Linked Immunosorbent
                    Assay (ELISA) will be performed. ELISA will be used to
                    measure the amount of antigen bound to an anti-RBD antibody.
                    The first step consists of preparing a standard solution and
                    dilution series using a standard recombinant RBD protein.
                    Also, a Streptavidin-HRP solution must be prepared.
                  </div>
                  <div>
                    The second step consists of binding antigen. Standard and
                    sample solutions are added into wells coated with SARS-CoV-2
                    RBD antibody. The biotin conjugates (biotin join to anti
                    SARS-CoV-2 RBD antibody), straptavidin-HRP solution, TMB
                    substrate and stop solution are added consecutively after
                    being washed with wash buffer solution in each step. After
                    the addition of the TMB substrate, the solution stored in
                    wells turns to yellow color as long as antigen is detected
                    by antibodies.
                  </div>
                  <div>
                    For the standard solution, an ELISA device is used to
                    measure the absorbance at 450 nm with the aim to prepare a
                    standard curve that correlationates antigen concentration
                    with absorbance of samples at 450 nm. Standard curve will be
                    employed as reference to measure antigen concentration bound
                    to antibody.
                  </div>
                  <div>
                    Find more information on the PROJECT IGEM DESIGN LEAGUE 2021
                    document in the Document Section.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experiments;
