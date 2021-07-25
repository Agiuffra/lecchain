import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./timeline.css";

class Timeline extends Component {
  constructor(props){
    super(props);
  }

  renderTimeline() {
    const text = "dfawe";
    return (
        <VerticalTimeline>
            {text.split("|").map((i,key) => {
                return <p>{i}</p>;
            })}
        </VerticalTimeline>
    );
  }

  render() {
    const renderTimeline = this.renderTimeline();
    return (
        <div className="lecchain-timeline">
            <h1>Timeline</h1>
            {renderTimeline}

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{ background: 'rgb(33, 0, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
  }
}

export default Timeline;
