import React, { Component } from "react";
import Antigen1 from "./research-popups/antigen-1";
import Antigen2 from "./research-popups/antigen-2";
import Antigen3 from "./research-popups/antigen-3";
import Antigen4 from "./research-popups/antigen-4";
import Lectin1 from "./research-popups/lectin-1";
import Lectin2 from "./research-popups/lectin-2";
import Lectin3 from "./research-popups/lectin-3";
import Lectin4 from "./research-popups/lectin-4";

import "./research.css";

class Research extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    discover: false,
    expndef: false,
    antigen: 0,
    lectain: 0,
  };
  toggleSubpopup = () => {
    this.setState({
      antigen: 0,
      lectain: 0,
    });
  };
  toggleAntigen1 = () => {
    this.setState({
      antigen: 1,
    });
  };
  toggleAntigen2 = () => {
    this.setState({
      antigen: 2,
    });
  };
  toggleAntigen3 = () => {
    this.setState({
      antigen: 3,
    });
  };
  toggleAntigen4 = () => {
    this.setState({
      antigen: 4,
    });
  };
  toggleLectin1 = () => {
    this.setState({
      lectain: 1,
    });
  };
  toggleLectin2 = () => {
    this.setState({
      lectain: 2,
    });
  };
  toggleLectin3 = () => {
    this.setState({
      lectain: 3,
    });
  };
  toggleLectin4 = () => {
    this.setState({
      lectain: 4,
    });
  };
  toggleDiscover = () => {
    this.setState({
      discover: !this.state.discover,
      expndef: false,
    });
  };
  toggleExpndef = () => {
    this.setState({
      expndef: !this.state.expndef,
      discover: false,
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
              Research
              <div
                className={
                  this.state.discover
                    ? "res-sect-title selected-sect"
                    : "res-sect-title"
                }
                onClick={this.toggleDiscover}
              >
                Discover
              </div>
              <div
                className={
                  this.state.expndef
                    ? "res-sect-title selected-sect"
                    : "res-sect-title"
                }
                onClick={this.toggleExpndef}
              >
                Explore and Define
              </div>
            </div>
            <div
              className={
                this.state.discover ? "disc-content-sect show" : "noshow"
              }
            >
              <div className="res-sect-text">
                The first step though our design is to identify the problem. For
                that, we have made a complete scheme to make the community part
                of our solution. We design a solid proposal for attacking cold
                chains under a human-centered design (see Integrated Human
                Practices). In that part, we ensure to involve users to health
                specialists (see Community).
              </div>
              <div className="res-sect-text">
                As part of the results from different interviews, we found that
                common problems involve hard-to-reach regions from the country.
                Vaccines arrived with so much delay compared to the capital.
                That is a big issue for both everyday people and health
                professionals. The latters have to carry out all the vaccines in
                cold boxes for a limited time before they get lost, walking for
                long hours or traveling by boat to reach every community. Most
                health professionals and nurses have experienced this kind of
                issue with many vaccines as most of them are thermally labile.
              </div>
              <div className="res-sect-text">
                Moreover, infrastructure professionals commented that managing
                cold chain logistics is a complex topic, even more so in a
                pandemic where everyone needs a vaccine immediately. They have
                stated that vaccines such as Pfizer/BionTech and Moderna have
                caused a considerable impact on the country's cold chain. Apart
                from the significant amount of money spent on ultra-low
                freezers, they have modified many things around it. A big
                challenge continues being maintaining a proper cold chain in
                every region of the country. As part of the geography, lack of
                hospitals and health centers, installing a cold chain is often
                impossible. Finally, many users are apprehensive about vaccines'
                efficiency. A lot of misinformation has spread throughout these
                months; consequently, people are more worried than ever about
                how much efficiency has been reported in the vaccine. To see
                more information around the insights we have achieved with each
                interview, see our Integrated Human Practices section.
              </div>
              <div className="res-sect-text">
                Our community’s insights marked the first step throughout our
                diamond design. Having understood the concerns and problems
                around vaccination and cold chains, we continue researching
                these topics, looking for more technical information. We start
                by doing deep research around SARS-CoV 2. We study mechanisms of
                actions, structures and characteristics.
              </div>
              <div className="res-sect-text">
                Thus, we found that SARS-CoV2 is an RNA(+) virus that belongs to
                the betacoronavirus family. It has a genome similar to previous
                coronaviruses such as SARS-CoV (79.5%) and MERS-CoV (50%) [1] .
                Once the virus has entered cells, genomic RNA is translated by
                the machinery of eukaryotic cells to produce viral proteins.
                Covid-19 genome produces six major proteins similar to other
                coronaviruses. Four of them consist of the spike (S), envelope
                (E), nucleocapsid (N), and membrane proteins (M) [2].
              </div>
              <div className="res-sect-text">
                Spike (S) protein with 1273 aa consists of two domains: the S1
                subunit (14–685 residues), and the S2 subunit (686–1273
                residues). The last one contains regions that are responsible
                for receptor binding and membrane fusion, respectively. In the
                S1 subunit, there is an N-terminal domain (NTD) (14–305
                residues) and a receptor-binding domain (RBD, 319–541 residues).
                In the S2 subunit, there is a fusion peptide (FP) (788–806
                residues), heptapeptide repeat sequence 1 (HR1) (912–984
                residues), HR2 (1163–1213 residues), TM domain (1213–1237
                residues), and a cytoplasm domain (1237–1273 residues) [3].
              </div>
              <div className="res-sect-text">
                SARS-CoV-2 S protein can bind to the endogenous receptor to
                attach, fuse, and enter host cells. RBD is responsible for
                binding firmly to the human angiotensin-converting enzyme 2
                (ACE2) and mediating a key role in viral entry [3]. RBD contains
                220 amino acid residues with nine cysteine residues and two
                N-glycosylation sites.
              </div>
              <div className="sect-img">
                <img
                  src={process.env.PUBLIC_URL + "/team/Marcelo.jpeg"}
                  alt=""
                  width="90%"
                />
              </div>
            </div>
            <div
              className={
                this.state.expndef ? "end-content-sect show" : "noshow"
              }
            >
              <div className="end-content-txt">
                After being flooded with all the information around COVID-19, we
                continue looking for topics that correlate to problems stated in
                the last part. We made a series of iterations along the research
                to finally have our main genetic components.
              </div>
              <div className="selection-division">
                <div className="antigen-selection">
                  <div className="res-selection-title">Antigen Selection</div>
                  <div className="iteration" onClick={this.toggleAntigen1}>
                    1st Iteration
                  </div>
                  <div className="iteration" onClick={this.toggleAntigen2}>
                    2nd Iteration
                  </div>
                  <div className="iteration" onClick={this.toggleAntigen3}>
                    3rd Iteration
                  </div>
                  <div className="iteration" onClick={this.toggleAntigen4}>
                    4th Iteration
                  </div>
                </div>
                <div className="lectin-selection">
                  <div className="res-selection-title">Lectin Selection</div>
                  <div className="iteration" onClick={this.toggleLectin1}>
                    1st Iteration
                  </div>
                  <div className="iteration" onClick={this.toggleLectin2}>
                    2nd Iteration
                  </div>
                  <div className="iteration" onClick={this.toggleLectin3}>
                    3rd Iteration
                  </div>
                  <div className="iteration" onClick={this.toggleLectin4}>
                    4th Iteration
                  </div>
                </div>
              </div>
              <div className="disc-proposals">
                <div className="res-selection-title">Proposals</div>
                <div className="proposals-txt">
                  At this point, we have defined constraints and specifications
                  to the design of our solution. With that, we can select the
                  characteristics of our proposal in terms of:
                </div>
                <div className="proposals-list">
                  <ol className="poposals-list-ol">
                    <li className="proposals-list-li">
                      <div>1.</div>
                      <div>
                        <b>Vaccine type selection</b>: We have decided that our
                        protein should be a subunit vaccine because they target
                        specific, well-defined neutralizing epitopes with
                        improved immunogenicity [6], cannot cause disease state,
                        and the purified antigenic component has fewer chances
                        of side effects.
                      </div>
                    </li>
                    <li className="proposals-list-li">
                      <div>2.</div>
                      <div>
                        <b>Antigen selection</b>: Our subunitary vaccine against
                        SARS-Cov2 must contain a virus domain to generate a
                        human immune response. So we had to get structural
                        information from the virus. Of all covid-19 antigens,
                        spike (S) protein can bind to the endogenous receptor to
                        attach, fusion, and enter into host cells. Of this
                        protein, we choose the RBD region due to its properties
                        reported before.
                      </div>
                    </li>
                    <li className="proposals-list-li">
                      <div>3.</div>
                      <div>
                        <b>Host selection</b>: We want to synthesize low-cost
                        recombinant protein and choose an organism with easy
                        culture and high yield. Escherichia coli fulfills those
                        requirements. This organism has fast growth kinetics
                        reaching in some hours the stationary phase. E. coli is
                        a host that can be used in high cell density culture to
                        increase protein production. The culture of E. coli and
                        transformation are fast and inexpensive to achieve [55].{" "}
                      </div>
                    </li>
                    <li className="proposals-list-li">
                      <div>4.</div>
                      <div>
                        <b>Carrier protein</b>: From the list of adjuvants, we
                        chose ricin chain B (RTB) because of its dual property
                        as adjuvant and thermotolerant carrier. RTB has shown
                        broad evidence as an oral adjuvant in different vaccine
                        candidates and its potential thermal tolerance
                        properties because it belongs to the lectin protein
                        family.
                      </div>
                    </li>
                  </ol>
                </div>
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

export default Research;
