import React from "react";
import '../assets/styles/Project.scss';
import personalConfig from '../personal.config';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projets</h1>
        <div className="projects-grid">
            {personalConfig.projects.map((p, i) => {
                const imgSrc = p.image.startsWith('http')
                    ? p.image
                    : `${process.env.PUBLIC_URL}${p.image.startsWith('/') ? p.image : `/${p.image}`}?v=1`;
                return (
                    <div key={i} className="project">
                        <a href={p.href} target="_blank" rel="noreferrer">
                            <img src={imgSrc} className="zoom" alt={p.title} width="100%" loading="lazy"/>
                        </a>
                        <a href={p.href} target="_blank" rel="noreferrer"><h2>{p.title}</h2></a>
                        <p>{p.description}</p>
                    </div>
                );
            })}
        </div>
    </div>
    );
}

export default Project;