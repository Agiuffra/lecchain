import React, { Component } from "react";

import "./general.css";

class Antigen4 extends Component {
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
              <b>Explore</b>: Which antigen is the best?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                Our subunitary vaccine against SARS-Cov-2 must contain a domain
                of virus to generate a human immune response. So we had to get
                structural information from the virus. Of all covid-19 antigens,
                spike (S) protein can bind to the endogenous receptor to attach,
                fusion, and enter into host cells.
              </div>
              <div className="subpopup-content-text">
                We found some properties of <b>SARS-CoV2 RBD</b>:
                <ul>
                  <li className="subpopup-li">
                    <div>-</div>
                    RBD is an antigen located in the S1 subunit in S protein.
                    because it <b>can bind strongly</b> to the human
                    angiotensin-converting enzyme 2 (<b>ACE2</b>) to{" "}
                    <b>mediate a key role in viral entry</b> [2], [26].
                  </li>
                  <li className="subpopup-li">
                    <div>-</div>
                    RBD <b>generates neutralizing antibodies</b> (NAb) that bind
                    directly to the RBD and compete with the cellular receptor,
                    ACE2, resulting in neutralization of viral infection and
                    clearance of the virus [27], [28]. Even in infected
                    patients,{" "}
                    <b>
                      anti-SARS-CoV-2 RBD antibodies can bind distinct domains
                      on the RBD and neutralize SARS-CoV-2
                    </b>{" "}
                    [29]. It was identified that neutralizing RBD antibodies
                    like S2H97 could bind to several SARS-CoV2 strains [30].
                  </li>
                  <li className="subpopup-li">
                    <div>-</div>
                    It is reported that{" "}
                    <b>RBD was expressed in Escherichia coli</b>. By applying
                    circular dichroism, fluorescence and Fourier-transform
                    infrared spectroscopy techniques,{" "}
                    <b>conformational structure was almost unaltered</b>. Even
                    RBD produced in E coli did not have glycosylation, its
                    secondary and tertiary structure was maintained and capable
                    of strongly binding human ACE2. [2], [26].
                  </li>
                </ul>
              </div>
              <div className="subpopup-content-img">
                {/* aquí va una imagen */}
              </div>
              <div className="subpopup-content-img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/engineering/popups/table7.jpeg"
                  }
                  alt=""
                  width="90%"
                />
              </div>
              <div className="subpopup-content-text">
                Some current vaccines for COVID-19 that are under development
                use RBD region as the antigen of the virus.
              </div>
            </div>
            <div className="subpopup-content-title">
              <b>Define</b>: Is RBD the best one?
            </div>
            <div className="subpopup-content-cnt">
              <div className="subpopup-content-text">
                RBD is a good candidate for the antigen due to its simple
                structure capable of being expressed in a recombinant bacterial
                system. It has shown stimulation of the production of high
                neutralizing monoclonal antibody titers in serum and is related
                to enhancing vaccine immunogenicity.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Antigen4;
