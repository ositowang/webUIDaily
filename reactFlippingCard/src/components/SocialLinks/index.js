import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter,
  faFacebook,
  faDribbble,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faTwitter, faFacebook, faDribbble, faLinkedin);
const SocialLinks = (props) => {
  const profileLinks = [
    { name: 'twitter', icon: 'twitter' },
    { name: 'linkedin', icon: 'linkedin' },
    { name: 'dribbble', icon: 'dribbble' },
    { name: 'facebook', icon: 'facebook' },
  ];

  const linksList = profileLinks.map((link, index) => (
    <li key={index}>
      <a href="https://github.com/ositowang">
        <FontAwesomeIcon icon={['fab', link.icon]} size="lg" />
      </a>
    </li>
  ));

  return (
    <div className="card-social-links">
      <ul className="social-links">{linksList}</ul>
    </div>
  );
};

export default SocialLinks;
