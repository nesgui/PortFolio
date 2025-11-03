import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import personalConfig from '../personal.config';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={personalConfig.profile.avatarUrl.startsWith('http') || personalConfig.profile.avatarUrl.startsWith('/') ? personalConfig.profile.avatarUrl : `${process.env.PUBLIC_URL}/${personalConfig.profile.avatarUrl}`} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            {personalConfig.profile.socials.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noreferrer">
                {s.icon === 'github' && <GitHubIcon/>}
                {s.icon === 'linkedin' && <LinkedInIcon/>}
              </a>
            ))}
          </div>
          <h1>{personalConfig.profile.name}</h1>
          <p>{personalConfig.profile.title}</p>

          <div className="mobile_social_icons">
            {personalConfig.profile.socials.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noreferrer">
                {s.icon === 'github' && <GitHubIcon/>}
                {s.icon === 'linkedin' && <LinkedInIcon/>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;