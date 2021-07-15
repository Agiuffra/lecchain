import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import teamData from "../data/people";
import "./team_banner.css";
import _ from "lodash";

class TeamMember extends Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <div className="team-member">
            <img src={this.props.img}></img>
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
        </div>
      );
    }
}

class TeamBanner extends Component {

  renderMembers() {
        const memberList = [];
        const memberSlide = [];
        for(let i = 0; i < teamData.length; i++) {
            if(i && i%3==0){
                memberList.push(<div className="content"> {_.cloneDeep(memberSlide)} </div>);
                memberSlide.length = 0;
            }
            memberSlide.push(<TeamMember name={teamData[i].name} 
                                         description={teamData[i].description} 
                                         img={teamData[i].img}
                            />);
        }
        memberList.push(<div className="content"> {memberSlide} </div>);
        return memberList;
  }

  render() {
    const renderMembers = this.renderMembers();
    return (
      <div className="team-banner">
          <div className="title">
            <h1>Team</h1>
          </div>
          <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay={true}
            infiniteLoop={true}>
                {renderMembers}
          </Carousel>
      </div>
    );
  }
}

export default TeamBanner;
