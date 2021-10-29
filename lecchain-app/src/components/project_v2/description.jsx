import React, { Component } from "react";

import "./description.css";

class Description extends Component {
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
      <div className="proj-desc">
        <div className="desc-title">Project Description</div>
        <div className="desc-txt">
          The current outbreak of the <b>novel coronavirus SARS-CoV-2</b> has
          paid a high toll in terms of human cost, reaching now almost{" "}
          <b>225.244.735 confirmed cases</b> and more than{" "}
          <b>4.639.280 global deaths</b> [1]. Many vaccine candidates have been
          approved and countries are already vaccinating people daily, having
          administered approximately{" "}
          <b>
            5.73 billion doses in total at which 42.1% have received at least
            one dose
          </b>{" "}
          [2]. However, analyzing results of vaccine performance encourages
          efforts to improve novel vaccine formulations. Moreover,{" "}
          <b>complex logistics, distribution, and storage</b> that these
          vaccines need and the poor health systems of some countries are huge
          barriers to achieve immunization [3]. <b>COVID-19 vaccines</b> that
          have demonstrated <b>better efficacy results</b> needs lower
          temperatures for their preservation, this is the case of
          Pfizer/BioNTech which needs a <b>storage temperature of -70°C</b>, or
          Moderna that needs <b>-20°C</b>, each one with an efficacy of 95% and
          94.1% respectively [4]. Although the{" "}
          <b>
            distribution and storage of vaccines in low-income countries are
            difficult and expensive
          </b>{" "}
          [5]. In fact, it is reported that <b>80% of the vaccination cost</b>{" "}
          is due to the <b>cold chain</b> [6].
        </div>
        <div className="desc-img">
          <img
            src={process.env.PUBLIC_URL + "/humanpract/coldchain.png"}
            alt=""
            width="500px"
            className="desc-img-img"
            onClick={this.toggleImage}
          />
          <div className={this.state.im0 ? "desc-img-txt" : "none"}>
            Vaccines need to pass complex cold chains from the factory, national
            and regional storage facilities until reaching remote sites of
            immunization. All this path involve lot of time and resources making
            impossible to maintain mRNA vaccines.
          </div>
        </div>
        <div className="desc-txt">
          To address this problem, a{" "}
          <b>subunit, oral and thermostable vaccine </b> for <b>COVID-19</b>{" "}
          called <b>Lecchain</b> is proposed. The antigen is expressed in
          Escherichia Coli BL21 and composed of the{" "}
          <b>receptor-binding domain (RBD)</b> peptide of the S1 protein from
          the SARS-CoV-2 virus fused to the{" "}
          <b>plant lectin Ricin Toxin B (RTB)</b>, this chimeric protein was
          designed to improve thermal stability of the RBD antigen due to the
          properties of plant lectins. Unlike current commercial vaccines,{" "}
          <b>Lecchain</b> is a vaccine candidate{" "}
          <b>
            intended to be delivered in absence of cold chains, tolerating high
            temperatures and manufactured in recombinant expression systems
          </b>{" "}
          scalable in <b>inexpensive bioreactors</b>, generating minimal waste.
        </div>
        <div className="desc-txt">
          Our expression module consists in joining the <b>RTB antigen</b> and
          the <b>lectin RTB</b> by a <b>linker GPGPGS</b>. This cassette has the
          proper <b>restriction sites</b> for the subcloning of our system in
          the cloning and expression vectors. Additionally, it contains{" "}
          <b>restriction sites</b> at the <b>3’ and 5’ ends of the RBD</b> for{" "}
          <b>allowing the exchange of this part by other antigens</b>, making
          Lecchain a modular system for targeting other diseases. The
          recombinant chimeric protein (RTB::RBD) will go through{" "}
          <b>thermal-stability assays</b> and a final <b>immunological assay</b>{" "}
          based on an <b>Elisa</b> for{" "}
          <b>evaluating the proper tertiary structure integrity of the RBD</b>.
        </div>
        <div className="desc-txt">
          Novel advances have shown that{" "}
          <b>
            synthetic biology enables the design and production of recombinant
            systems
          </b>
          . This field represents an <b>innovative</b> and <b>cheaper tool</b>{" "}
          for <b>redesigning organisms to modify</b> or{" "}
          <b>enhance its functions</b>, and it has caught the attention of many
          researchers. In fact, there are outnumbered applications in which
          synthetic biology has offered a novel and effective solution. Lately,
          recombinant systems have been employed to{" "}
          <b>develop and produce genetically engineered proteins</b> since they
          offer <b>many advantages</b> against chemical methods.
        </div>
        <div className="desc-txt">
          To be more precise, <b>Escherichia coli systems</b> stand among others
          as they are <b>easier and cheaper to maintain in time</b>. They also
          have shown their capability to synthesize large quantities of material
          making it cost-effective and sustainable. For this reason, producing a
          <b>vaccine candidate using a recombinant expression system</b> is an
          innovative and advantageous choice.
        </div>
        <div className="desc-ref">
          <div className="ref-title">References</div>
          <div className="ref-ref">
            [1] E. Dong, H. Du, and L. Gardner, “An interactive web-based
            dashboard to track COVID-19 in real time,” The Lancet Infectious
            Diseases, vol. 20, no. 5, pp. 533–534, May 2020, doi:
            10.1016/s1473-3099(20)30120-1. [Online]. Available:{" "}
            <a href="https://pubmed.ncbi.nlm.nih.gov/32087114/">
              https://pubmed.ncbi.nlm.nih.gov/32087114/
            </a>
            . [Accessed: 19-Oct-2021]
          </div>
          <div className="ref-ref">
            [2] H. Ritchie et al., “Coronavirus Pandemic (COVID-19),” Our World
            in Data, 05-Mar-2020. [Online]. Available:{" "}
            <a href="https://ourworldindata.org/coronavirus">
              https://ourworldindata.org/coronavirus
            </a>
            . [Accessed: 19-Oct-2021]
          </div>
          <div className="ref-ref">
            [3] J. Smith, M. Lipsitch, and J. W. Almond, “Vaccine production,
            distribution, access, and uptake,” The Lancet, vol. 378, no. 9789,
            pp. 428–438, Jul. 2011, doi: 10.1016/s0140-6736(11)60478-9.
            [Online]. Available:{" "}
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3164579/">
              https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3164579/
            </a>
            . [Accessed: 19-Oct-2021]
          </div>
          <div className="ref-ref">
            [4] F. P. Polack et al., “Safety and Efficacy of the BNT162b2 mRNA
            Covid-19 Vaccine,” New England Journal of Medicine, vol. 383, no.
            27, pp. 2603–2615, Dec. 2020, doi: 10.1056/nejmoa2034577. [Online].
            Available:{" "}
            <a href="https://www.nejm.org/doi/full/10.1056/nejmoa2034577">
              https://www.nejm.org/doi/full/10.1056/nejmoa2034577
            </a>
            . [Accessed: 19-Oct-2021]
          </div>
          <div className="ref-ref">
            [5] M. V. Murhekar et al., “Frequent exposure to suboptimal
            temperatures in vaccine cold-chain system in India: results of
            temperature monitoring in 10 states,” Bulletin of the World Health
            Organization, vol. 91, no. 12, pp. 906–913, Sep. 2013, doi:
            10.2471/blt.13.119974. [Online]. Available:{" "}
            <a href="https://pubmed.ncbi.nlm.nih.gov/24347729/">
              https://pubmed.ncbi.nlm.nih.gov/24347729/
            </a>
            . [Accessed: 19-Oct-2021]
          </div>
          <div className="ref-ref">
            [6] D. M. Matthias, J. Robertson, M. M. Garrison, S. Newland, and C.
            Nelson, “Freezing temperatures in the vaccine cold chain: A
            systematic literature review,” Vaccine, vol. 25, no. 20, pp.
            3980–3986, May 2007, doi: 10.1016/j.vaccine.2007.02.052. [Online].
            Available:{" "}
            <a href="https://pubmed.ncbi.nlm.nih.gov/17382434/">
              https://pubmed.ncbi.nlm.nih.gov/17382434/
            </a>
            . [Accessed: 19-Oct-2021]
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
