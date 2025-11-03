import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Certifications.scss';
import personalConfig from '../personal.config';

function Certifications() {
  if (!personalConfig.certifications || personalConfig.certifications.length === 0) return null;

  return (
    <div className="container" id="certifications">
      <div className="certs-container">
        <h1>Certifications</h1>
        <div className="certs-grid">
          {personalConfig.certifications.map((c, i) => (
            <div key={i} className="cert">
              <FontAwesomeIcon icon={faCertificate} size="2x" className="cert-icon" />
              <div className="cert-text">
                <h3>{c.title}</h3>
                <p>{c.issuer}{c.date ? ` • ${c.date}` : ''}</p>
                {c.credentialUrl && (
                  <a href={c.credentialUrl} target="_blank" rel="noreferrer">Voir le certificat</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;

