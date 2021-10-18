import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./timeline.css";

class Timeline extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className="lecchain-timeline">

            <VerticalTimeline
                layout="1-column-left"
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#9D9999', color: '#9D9999' }}
                >
                    <h3 className="vertical-timeline-element-title">2019</h3>
                    <h4 className="vertical-timeline-element-subtitle">December 31st</h4>
                    <p>
                        China anuncia el brote de neumonías de 
                        etiologías desconocidas en la provincia 
                        de Wuhan, con solo 27 casos.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#9D9999', color: '#9D9999' }}
                >
                    <h3 className="vertical-timeline-element-title">2020</h3>
                    <h4 className="vertical-timeline-element-subtitle">January 9th</h4>
                    <p>
                        Se declara la presencia de un nuevo 
                        ‘coronavirus’ (todavía no se llamaba 
                        COVID19).
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#9D9999', color: '#9D9999' }}
                >
                    <h3 className="vertical-timeline-element-title">2020</h3>
                    <h4 className="vertical-timeline-element-subtitle">January 13th</h4>
                    <p>
                        Primer caso fuera de China, registrado en 
                        Tailanda.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#9D9999', color: '#9D9999' }}
                >
                    <h3 className="vertical-timeline-element-title">2020</h3>
                    <h4 className="vertical-timeline-element-subtitle">March 11th</h4>
                    <p>
                        La OMS declara al COVID19 como pandemia. Se 
                        declara Emergencia Sanitaria Nacional por 90 
                        días calendarios en Perú.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#9D9999', color: '#9D9999' }}
                >
                    <h3 className="vertical-timeline-element-title">2020</h3>
                    <h4 className="vertical-timeline-element-subtitle">March 11th</h4>
                    <p>
                        La OMS declara al COVID19 como pandemia. Se 
                        declara Emergencia Sanitaria Nacional por 90 
                        días.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#9D9999', color: '#9D9999' }}
                >
                    <h3 className="vertical-timeline-element-title">2020</h3>
                    <h4 className="vertical-timeline-element-subtitle">April 8th</h4>
                    <p>
                        Por lo menos 115 candidatas a vacunas son 
                        analizadas en el mundo.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
  }
}

export default Timeline;
