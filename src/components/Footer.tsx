import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import personalConfig from '../personal.config';

function Footer() {
  return (
    <footer>
      <div>
        {personalConfig.profile.socials.map((s, i) => (
          <a key={i} href={s.url} target="_blank" rel="noreferrer">
            {s.icon === 'github' && <GitHubIcon/>}
            {s.icon === 'linkedin' && <LinkedInIcon/>}
          </a>
        ))}
      </div>
      <p>{personalConfig.footerText || 'Portfolio personnel'}</p>
    </footer>
  );
}

export default Footer;