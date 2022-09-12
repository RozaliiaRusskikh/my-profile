import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import Logo from '/Users/roza/my-profile/src/assets/images/logo-roza.png';
import LogoSubtitle from '/Users/roza/my-profile/src/assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="rozaliia_russkikh" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
