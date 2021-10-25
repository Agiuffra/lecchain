import React, { Component } from "react";
import Partpop from "./popups/part";

import "./parts.css";

class BioParts extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    part1: false,
    part2: false,
    part3: false,
    part4: false,
    part5: false,
    part6: false,
    part7: false,
    part8: false,
  };
  togglePart1 = () => {
    this.setState({
      part1: !this.state.part1,
    });
    console.log(this.state);
  };
  togglePart2 = () => {
    this.setState({
      part2: !this.state.part2,
    });
  };
  togglePart3 = () => {
    this.setState({
      part3: !this.state.part3,
    });
  };
  togglePart4 = () => {
    this.setState({
      part4: !this.state.part4,
    });
  };
  togglePart5 = () => {
    this.setState({
      part5: !this.state.part5,
    });
  };
  togglePart6 = () => {
    this.setState({
      part6: !this.state.part6,
    });
  };
  togglePart7 = () => {
    this.setState({
      part7: !this.state.part7,
    });
  };
  togglePart8 = () => {
    this.setState({
      part8: !this.state.part8,
    });
  };
  render() {
    return (
      <div className="eng-bioparts">
        <div className="bioparts-title">Parts</div>
        <div className="bioparts-sect">
          <div className="sect-title">Basic Parts</div>
          <div className="sect-table">
            <table className="table-lecchain">
              <tr className="table-header">
                <th className="header-1">Part name</th>
                <th className="header-2">Type</th>
                <th className="header-3">Description</th>
                <th className="header-4"></th>
                <th className="header-5">Length</th>
              </tr>
              <tr className="table-sect">
                <td className="sect-1">
                  <div onClick={this.togglePart1}>iDLBB_002251</div>
                </td>
                <td className="sect-2">CDS</td>
                <td className="sect-3">RTB</td>
                <td className="sect-4">New</td>
                <td className="sect-5">795 bp</td>
              </tr>
              <tr className="table-sect">
                <td className="sect-1" onClick={this.togglePart2}>
                  iDLBB_002252
                </td>
                <td className="sect-2">CDS</td>
                <td className="sect-3">RBD</td>
                <td className="sect-4">Existing</td>
                <td className="sect-5">669 bp</td>
              </tr>
              <tr className="table-sect">
                <td className="sect-1" onClick={this.togglePart3}>
                  iDLBB_002253
                </td>
                <td className="sect-2">CDS</td>
                <td className="sect-3">pfuMBP</td>
                <td className="sect-4">New</td>
                <td className="sect-5">1149 bp</td>
              </tr>
              <tr className="table-sect">
                <td className="sect-1" onClick={this.togglePart4}>
                  iDLBB_002254
                </td>
                <td className="sect-2">CDS</td>
                <td className="sect-3">GS linker</td>
                <td className="sect-4">Existing</td>
                <td className="sect-5">36 bp</td>
              </tr>
              <tr className="table-sect">
                <td className="sect-1" onClick={this.togglePart5}>
                  iDLBB_002255
                </td>
                <td className="sect-2">Promoter</td>
                <td className="sect-3">T7</td>
                <td className="sect-4">Existing</td>
                <td className="sect-5">46 bp</td>
              </tr>
              <tr className="table-sect">
                <td className="sect-1" onClick={this.togglePart6}>
                  iDLBB_002256
                </td>
                <td className="sect-2">Terminator</td>
                <td className="sect-3">T7</td>
                <td className="sect-4">Existing</td>
                <td className="sect-5">18 bp</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="bioparts-sect">
          <div className="sect-title">Composite Parts</div>
          <div className="sect-table">
            <table className="table-lecchain">
              <tr className="table-header">
                <th className="header-1">Part name</th>
                <th className="header-2">Type</th>
                <th className="header-3">Description</th>
                <th className="header-4"></th>
                <th className="header-5">Length</th>
              </tr>
              <tr className="table-sect">
                <td className="sect-1" onClick={this.togglePart7}>
                  iDLBB_002257
                </td>
                <td className="sect-2">Composite</td>
                <td className="sect-3">RTB-GS-RBD</td>
                <td className="sect-4">New</td>
                <td className="sect-5">1540 bp</td>
              </tr>
              <tr className="table-sect">
                <td className="sect-1" onClick={this.togglePart8}>
                  iDLBB_002258
                </td>
                <td className="sect-2">Composite</td>
                <td className="sect-3">pfuMBP-GS-RBD</td>
                <td className="sect-4">New</td>
                <td className="sect-5">1894 bp</td>
              </tr>
            </table>
          </div>
          {this.state.part1 ? (
            <Partpop
              toggle={this.togglePart1}
              name="iDLBB_002251"
              desc="RTB is the chain B of Ricin protein"
              appl="Chain B has non-toxic properties; whereas chain A is the part that exerts the toxic effect, chain B just works as the entry for A."
              bio="Ricinus Communis"
              stand="RFC10 and TypeIIS"
              img="null"
            />
          ) : null}
          {this.state.part2 ? (
            <Partpop
              toggle={this.togglePart2}
              name="iDLBB_002252"
              desc="Maltose binding protein (MBP)"
              appl="Thermostable carrier"
              bio="Pyrococcus furiosus"
              stand="RFC10 and TypeIIS"
              img="null"
            />
          ) : null}
          {this.state.part3 ? (
            <Partpop
              toggle={this.togglePart3}
              name="iDLBB_002253"
              desc="Receptor-binding domain (RBD) peptide of the S1 protein from the SARS-CoV-2 virus."
              appl="Has shown a stimulation of the production of  high neutralizing monoclonal antibody titers in serum and is related for enhancing vaccine immunogenicity."
              bio="SARS-CoV-2 virus"
              stand="RFC10 and TypeIIS"
              img="null"
            />
          ) : null}
          {this.state.part4 ? (
            <Partpop
              toggle={this.togglePart4}
              name="iDLBB_002254"
              desc="GS linker."
              appl="Join two peptides."
              bio="-"
              stand="RFC10 and TypeIIS"
              img="null"
            />
          ) : null}
          {this.state.part5 ? (
            <Partpop
              toggle={this.togglePart5}
              name="iDLBB_002255"
              desc="T7 promoter."
              appl="Recognized by T7 polymerase to start transcription."
              bio="Bacteriophage T7"
              stand="RFC10 and TypeIIS"
              img="null"
            />
          ) : null}
          {this.state.part6 ? (
            <Partpop
              toggle={this.togglePart6}
              name="iDLBB_002256"
              desc="T7 promoter."
              appl="Allows completion of transcription."
              bio="Bacteriophage T7"
              stand="RFC10 and TypeIIS"
              img="null"
            />
          ) : null}
          {this.state.part7 ? (
            <Partpop
              toggle={this.togglePart7}
              name="iDLBB_002257"
              desc="RTB-GS-RBD."
              appl="-"
              bio="-"
              stand="RFC10 and TypeIIS"
              img="null"
            />
          ) : null}
          {this.state.part8 ? (
            <Partpop
              toggle={this.togglePart8}
              name="iDLBB_002258"
              desc="pfuMBP-GS-RBD."
              appl="-"
              bio="-"
              stand="RFC10 and TypeIIS"
              img="null"
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default BioParts;
