import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineData from "../../../data/timeline";
import "./timeline.css";

class Timeline extends Component {
  constructor(props){
    super(props);
  }

  renderTimeline() {
    const text = "dfawe";
    return (
        <VerticalTimeline>
            {timelineData.map((item,key) => {
                return <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: item.content_style_bg, color: item.content_style_color }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date={item.date}
                            iconStyle={{ background: item.icon_style_bg, color: item.icon_style_color }}
                        >
                            <h3 className="vertical-timeline-element-title"> {item.h3} </h3>
                            <h4 className="vertical-timeline-element-subtitle"> {item.h4} </h4>
                            <p>
                                {item.p}
                            </p>
                        </VerticalTimelineElement>;
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
        </div>
    );
  }
}

export default Timeline;
