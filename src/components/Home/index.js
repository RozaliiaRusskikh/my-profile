import { Link } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            {' '}
            <FontAwesomeIcon icon="fa-regular fa-hand-wave" />
            Hey, <FontAwesomeIcon icon={faHand} color="#8d8d8d" />
            <br /> I'm Rozaliia
          </h1>
          <h2>QA Engineer / Junior Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
