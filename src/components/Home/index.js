import { Link } from 'react-router-dom';
import './index.scss';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['R', 'o', 'z', 'a', 'l', 'i', 'i', 'a'];
  const jobArray = ['J', 'u', 'n', 'i', 'o', 'r', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            {' '}
            Hey, <FontAwesomeIcon icon={faHand} color="#8d8d8d" />
            <br /> I'm Rozaliia
          </h1>
          <h2>QA Engineer / Junior Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
    </>
  );
};
export default Home;
