import React, { Component } from "react";
import Antigen1 from "./research-popups/antigen-1";
import Antigen2 from "./research-popups/antigen-2";
import Antigen3 from "./research-popups/antigen-3";
import Antigen4 from "./research-popups/antigen-4";
import Lectin1 from "./research-popups/lectin-1";
import Lectin2 from "./research-popups/lectin-2";
import Lectin3 from "./research-popups/lectin-3";
import Lectin4 from "./research-popups/lectin-4";

import "./optimization.css";

class Optimization extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    develop: false,
    deliver: false,
    final: false,
  };
  toggleDevelop = () => {
    this.setState({
      develop: !this.state.develop,
      deliver: false,
      final: false,
    });
  };
  toggleDeliver = () => {
    this.setState({
      deliver: !this.state.deliver,
      develop: false,
      final: false,
    });
  };
  toggleFinal = () => {
    this.setState({
      final: !this.state.final,
      develop: false,
      deliver: false,
    });
  };
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="popup-box">
        <div className="box">
          <div className="close-icon" onClick={this.handleClick}>
            X
          </div>
          <div className="box-content">
            <div className="res-content-title">
              Optimization
              <div
                className={
                  this.state.develop
                    ? "res-sect-title selected-sect"
                    : "res-sect-title"
                }
                onClick={this.toggleDevelop}
              >
                Develop Test
              </div>
              <div
                className={
                  this.state.deliver
                    ? "res-sect-title selected-sect"
                    : "res-sect-title"
                }
                onClick={this.toggleDeliver}
              >
                Deliver Test
              </div>
              <div
                className={
                  this.state.final
                    ? "res-sect-title selected-sect"
                    : "res-sect-title"
                }
                onClick={this.toggleFinal}
              >
                Final Solution
              </div>
            </div>
            <div
              className={
                this.state.develop ? "disc-content-sect show" : "noshow"
              }
            >
              <div className="res-sect-text">
                How will our chimeric antigen be?
              </div>
              <div className="res-sect-text">
                The first thing that we have to look for is how we will join
                both proteins (RTB and RBD). It is known that linkers have been
                helpful for the creation of stable protein-protein complexes.
                One example is the fusion of the Influenza virus hemagglutinin
                peptide with the MHC Class II I-Ad [56]. When the connected
                domains require a certain degree of movement or interaction, a
                flexible linker is usually used between the sequences. These
                linkers are generally composed of small, non-polar (e.g., Gly)
                or polar (e.g., Ser or Thr) amino acids [57]. The small size of
                these amino acids provides flexibility and allows for mobility
                of the connecting functional domains.
              </div>
              <div className="res-sect-text">
                The most commonly used flexible linkers have sequences
                consisting primarily of stretches of Gly and Ser residues (“GS''
                linker). An example of the most widely used flexible linker has
                the sequence of (Gly-Gly-Gly-Gly-Ser)3 that has also been
                applied previously on vaccine design [58]. Gly-Pro-Gly-Pro-Gly
                is another linker used in vaccine design like a multi-epitope
                vaccine against SARS-COV2 and brucellosis [59], [60].
              </div>
              <div className="res-sect-text">
                The vaccine candidate is an RTB fused to RBD protein with an
                expected molecular size of 54 kDa. To analyze the best
                configuration, we chose twelve models composed of RTB, RDB, and
                a histidine tag. The designs are shown in the following table.
                Each design was tested with (GGGGS)3 and GPGPG linkers and a
                non-linker configuration. A linker was inserted between RTB and
                RBD domains.
              </div>
              <div className="sect-img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/engineering/popups/table12.jpeg"
                  }
                  alt=""
                  width="90%"
                />
              </div>
              <div className="res-selection-title">Protein Modeling</div>
              <div className="res-sect-text">
                Twelve homology models were made using MODELLER software [61].
                Homology modeling with 100 iterations was programmed for each
                trial. DopeScore (Discrete Optimized Protein Energy) values were
                calculated from each model. For each simulation, we chose the
                model with the lowest DopeScore from the different models. The
                following table shows DopeScore values from each model.
              </div>
              <div className="sect-img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/engineering/popups/table13.jpeg"
                  }
                  alt=""
                  width="90%"
                />
              </div>
              <div className="res-sect-text">
                We will evaluate High-DopeScore models with the Molprobity
                webserver [62] to measure torsion angles per residue and
                evaluate the stereochemical quality. Furthermore, a refinement
                method of the structure was carried out to improve the
                orientations of the residues using the GALAXY web server [63].
                Molprobity server calculated a Ramachandran score close to 98%.
                Root Mean Square Deviation (RMSD) was used to compare each
                candidate model with RBD (6M0J) and RTB (S40366) structures
                using Pymol. Table below shows RMSD values that compares model
                with RBD and RTB structures.
              </div>
              <div className="sect-img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/engineering/popups/table14.jpeg"
                  }
                  alt=""
                  width="90%"
                />
              </div>
              <div className="res-sect-text">
                Each model has a PDB file opened in the PyMol software to
                visualize the protein structure. In the following image, there
                are examples of the different conformations of the protein
                design.
              </div>
              <div className="sect-img">
                {/* <img
                  src={process.env.PUBLIC_URL + "/team/Marcelo.jpeg"}
                  alt=""
                  width="90%"
                /> */}
              </div>
            </div>
            <div
              className={
                this.state.deliver ? "end-content-sect show" : "noshow"
              }
            >
              <div className="res-sect-text">
                Can we test in silico our chimeric antigen?
              </div>
              <div className="res-sect-text">
                From the RMSD Table, “RTB::RBD::HistidineTag” was with lower
                RMSD scores compared with RTB and RBD structures. The next
                figures show the three-dimensional structure and Ramachandran
                plot of RTB_RBD_HistidineTag.
              </div>
              <div className="sect-img">
                {/* <img
                  src={process.env.PUBLIC_URL + "/team/Marcelo.jpeg"}
                  alt=""
                  width="90%"
                /> */}
              </div>
              <div className="res-sect-text">
                (GGGS)x3 linker shows the best in silico results for linking our
                chimeric antigen RTB::RBD::HistidineTag. That linker is flexible
                and allows domains to be separated. Now, that model was used to
                evaluate immunogenicity, antigenicity and thermal properties
                using bioinformatic tools
              </div>
              <div className="res-selection-title">
                Immunogenic and antigenicity evaluation of the vaccine model
              </div>
              <div className="res-sect-text">
                The term immunogenicity alludes to the capacity of a substance
                to induce a cellular and humoral immune response. In contrast,
                antigenicity can be notably recognized by the antibodies
                produced due to the immune response to the given substance[64].
                Also, it is known that HTLs help in the activation of B cells
                and cytotoxic T cells. Therefore, predicting these HTL epitopes
                as peptides that bind MHC II molecules is key to rational
                vaccine design [65]. This section evaluates immunogenicity,
                antigenicity, and thermal tolerance with bioinformatics tools of
                the vaccine candidate model RTB::RBD::HistidineTag.
              </div>
              <div className="res-sect-text">
                The immune response was evaluated using NetCTL 1.2 server to
                predict cytotoxic T lymphocytes (CTLs) epitopes in protein
                sequences [66]. To identify epitopes that bind to Helper
                T-lymphocytes (HTLs), we used the NetMHCII pan 3.2 servers [67].
                Finally, the ElliPro tool from the IEDB server to identify B
                cell epitopes [68]. These immune response cells and cytokines
                were chosen because they are involved in the development of
                disease. It is reported the majority of patients hospitalized by
                COVID-19 seem to mount both CD8+ and CD4+ T cell responses in
                serum [69]. All the servers were used with their default
                parameters as in other investigations to produce multi-epitope
                vaccines [60]. Those peptides that have a score above 0.75 for
                the epitope prediction were only considered. It is necessary to
                mention that the VaxiJen 2.0 server [70] was utilized to predict
                the protective antigen score of the epitopes.
              </div>
              <div className="res-sect-text">
                A total of 20 linear epitopes of recognition sites were found in
                the vaccine construct. Fifteen of these were CTL cell epitopes,
                3 were HTL epitopes, and 2 were B cell epitopes. The presence of
                these epitopes proved that the construction of the vaccine could
                generate an immune response from these cells. The recognized
                peptides by the different epitopes are shown in Figure 3. The
                epitopes were chosen based on their promiscuousness,
                antigenicity, and immunogenicity and are listed in Table 1
                respectively.
              </div>
              <div className="sect-img">
                {/* <img
                  src={process.env.PUBLIC_URL + "/team/Marcelo.jpeg"}
                  alt=""
                  width="90%"
                /> */}
              </div>
              <div className="res-sect-text">
                The next table shows the peptide, the residue, the relative
                affinity, the prediction score, and the overall prediction for
                the protective antigen. Epitopes agree with those found in a
                comparative study of epitopes between (2019-nCoV) and SARS
                coronavirus (SARS-CoV) [71].
              </div>
              <div className="sect-img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/engineering/popups/table14.jpeg"
                  }
                  alt=""
                  width="90%"
                />
              </div>
              <div className="res-selection-title">Thermal Stability</div>
              <div className="res-sect-text">
                With the ScooP software [72] and its predictor tools, thermal
                stability curves of both studied proteins are obtained and shown
                in the next figure.
              </div>
              <div className="sect-img">
                {/* <img
                  src={process.env.PUBLIC_URL + "/team/Marcelo.jpeg"}
                  alt=""
                  width="90%"
                /> */}
              </div>
              <div className="res-sect-text">
                With the data obtained with the ScooP structure prediction and
                the visualization in Figure 4. We can determine the melting
                temperature (Tm), the specific calorific capacity (Cp),and the
                standard folding free energy(Gr)in the table below [72]:
              </div>
              <div className="sect-img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/engineering/popups/table16.jpeg"
                  }
                  alt=""
                  width="90%"
                />
              </div>
              <div className="res-sect-text">
                This data suggests a higher Tm in the construct than in RBD,
                also the construct can receive more energy per mol showing that
                its temperature increase would be lower than the RBDs increase.
                The free folding energy of the construct is lower than the RBD,
                suggesting that despite the reactions being thermodynamically
                favorable to the construct and the RBD, the activation energy
                should be higher in the construct due to its melting temperature
                being higher than the RBS’s melting temperature and higher
                specific calorific capacity.
              </div>
              <div className="res-sect-text">
                Define: We applied bioinformatic analysis to our final
                three-dimensional structure (RTB::RBD::HistidineTag) of the
                vaccine proposal. Immune responses were predicted in at least 20
                epitopes of this study for T and B cells. This means that its
                adjuvant properties should be studied in vitro and afterward in
                vivo. Likewise, its binding energy was probed with the help of
                the in silico assays of antigenicity between the vaccine
                construction and the receptors, where it was higher than in RBD.
                The lectin used in the study has potential adjuvant properties.
                The melting temperature and the specific calorific capacity of
                the protein, according to ScooP, are higher in the vaccine
                candidate structure than in the RBD protein. This suggests that
                the lectins used for the construct are responsible for these
                property changes and therefore its increased thermostability.
                Further research is advised on this subject. This protein’s
                production in a laboratory could contribute to the development
                of a thermostable vaccine candidate. So in this way, more
                countries of low incomes could have access to vaccines with a
                lower logistical burden.
              </div>
            </div>
            <div
              className={this.state.final ? "disc-content-sect show" : "noshow"}
            >
              <div className="res-sect-text">
                Our project aims to design a protein that works as a
                thermotolerant subunitary vaccine against SARS-CoV2. Our
                chassis, Escherichia coli BL21(DE3), will be capable of
                synthesizing recombinant protein, as we call Lecchain. It could
                support high temperatures and trigger immune responses against
                SARS-Cov2 without the need for a cold chain. Our design contains
                RBD antigen fused to protein with thermotolerant and at the same
                time with adjuvant properties. Both domains are joined with
                (GGGGS)x3 linker. We will obtain genetic parts of our protein
                with gene synthesis service, and We will use biobrick methods
                for DNA manipulation. We will take native strong promoter T7lac,
                ribosome binding site, and terminator T7 sequence from the pET28
                expression vector to control recombinant protein production. We
                have prepared experiments to evaluate the structural integrity
                of our candidate vaccine and thermotolerance. We expected the
                experiments to lower degradation rates after lyophilization and
                heat treatment.
              </div>
            </div>
          </div>
        </div>
        {this.state.antigen === 1 ? (
          <Antigen1 toggle={this.toggleSubpopup} />
        ) : null}
        {this.state.antigen === 2 ? (
          <Antigen2 toggle={this.toggleSubpopup} />
        ) : null}
        {this.state.antigen === 3 ? (
          <Antigen3 toggle={this.toggleSubpopup} />
        ) : null}
        {this.state.antigen === 4 ? (
          <Antigen4 toggle={this.toggleSubpopup} />
        ) : null}
        {this.state.lectain === 1 ? (
          <Lectin1 toggle={this.toggleSubpopup} />
        ) : null}
        {this.state.lectain === 2 ? (
          <Lectin2 toggle={this.toggleSubpopup} />
        ) : null}
        {this.state.lectain === 3 ? (
          <Lectin3 toggle={this.toggleSubpopup} />
        ) : null}
        {this.state.lectain === 4 ? (
          <Lectin4 toggle={this.toggleSubpopup} />
        ) : null}
      </div>
    );
  }
}

export default Optimization;
