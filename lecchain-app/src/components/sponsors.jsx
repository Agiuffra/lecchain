import React, { Component } from "react";
import sponsorData from "../data/sponsors";
import _ from "lodash";
import "./sponsors.css";

class Sponsors extends Component {
    renderSponsors() {
        const sponsorList = [];
        const sponsorSlide = [];
        for(let i = 0; i < sponsorData.length; i++) {
            if(i && i%4==0){
                sponsorList.push(<div className="line_content"> {_.cloneDeep(sponsorSlide)} </div>);
                sponsorSlide.length = 0;
            }
            sponsorSlide.push(<div><img src={sponsorData[i].img} /></div>);
        }
        sponsorList.push(<div className="line_content"> {sponsorSlide} </div>);
        return sponsorList;
    }

  render() {
    const renderSponsors = this.renderSponsors();
    return (
      <div className="sponsors">
          <div className="title">
               <h1>Sponsors</h1>
          </div>
          <div className="content">
                {renderSponsors}
          </div>
      </div>
    );
  }
}

export default Sponsors;
