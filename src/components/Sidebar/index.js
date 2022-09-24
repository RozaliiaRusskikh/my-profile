import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import Logo from '/Users/roza/my-profile/src/assets/images/logo-roza.png';
import LogoSubtitle from '/Users/roza/my-profile/src/assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="rozaliia_russkikh" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#8d8d8d" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#8d8d8d" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faPhone} color="#8d8d8d" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/rozaliya-russkikh/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#8d8d8d" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/RozaliiaRusskikh"
          >
            <FontAwesomeIcon icon={faGithub} color="#8d8d8d" />
          </a>
        </li>
        <li>
          <a href="mailto:rrrusskikh@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} color="#8d8d8d" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
