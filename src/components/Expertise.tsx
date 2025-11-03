import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import personalConfig from '../personal.config';

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Compétences</h1>
            <div className="skills-grid">
                {personalConfig.skills.map((section, idx) => (
                    <div key={idx} className="skill">
                        {section.icon === 'react' && <FontAwesomeIcon icon={faReact} size="3x"/>}
                        {section.icon === 'docker' && <FontAwesomeIcon icon={faDocker} size="3x"/>}
                        {section.icon === 'python' && <FontAwesomeIcon icon={faPython} size="3x"/>}
                        {section.icon === 'database' && <FontAwesomeIcon icon={faDatabase} size="3x"/>}
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {section.techStack.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;