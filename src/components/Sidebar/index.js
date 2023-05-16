import './index.scss';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo-roza.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faEnvelope,
  faPhone,
  faSheetPlastic,
  faBars,
  faClose,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Resume from '../../assets/resume.pdf';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="rozaliia_russkikh" />
      </Link>

      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#8d8d8d" />
        </NavLink>

        <NavLink
          exact="true"
          onClick={() => setShowNav(false)}
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#8d8d8d" />
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faPhone} color="#8d8d8d" />
        </NavLink>

        <NavLink
          exact="true"
          onClick={() => setShowNav(false)}
          activeclassname="active"
          className="my-work-link"
          to="/my-work"
        >
          <FontAwesomeIcon icon={faEye} color="#8d8d8d" />
        </NavLink>

        <a
          className="resume-link"
          href={Resume}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSheetPlastic} color="#8d8d8d" />
        </a>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#d2042d"
          size="3x"
          className="close-icon"
        />
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
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#D2042D"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
};

export default Sidebar;
