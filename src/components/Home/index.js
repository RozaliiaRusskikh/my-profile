import './index.scss';
import Logo from './Logo';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['R', 'o', 'z', 'a', ','];

  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _11`}>e</span>
            <span className={`${letterClass} _12`}>y</span>
            <span className={`${letterClass} _13`}>,&nbsp;</span>
            <span className="wave">
              <FontAwesomeIcon icon={faHand} color="#8d8d8d" />
            </span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'m&nbsp;</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />
            <br />
          </h1>
          <h2>Full Stack Engineer with a passion for quality</h2>
          <a
            className="flat-button"
            target="_blank"
            rel="noreferrer"
            href="https://my-learning-space-app.netlify.app/"
          >
            MY LEARNING SPACE
          </a>
        </div>
        <Logo />
      </div>
    </>
  );
};
export default Home;
