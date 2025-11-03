import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import personalConfig from '../personal.config';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Parcours</h1>
        <VerticalTimeline>
          {personalConfig.experiences.map((exp, idx) => (
            <VerticalTimelineElement
              key={idx}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date={exp.date}
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{exp.title}</h3>
              {exp.location && (
                <h4 className="vertical-timeline-element-subtitle">{exp.location}</h4>
              )}
              <p>
                {exp.bullets.join(', ')}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;