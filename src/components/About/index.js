import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  faJs,
  faGitAlt,
  faHtml5,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          <FontAwesomeIcon icon={faCheck} color="#ffff" />
          &nbsp; I am enthusiastic, fascinated by computer technology, focused
          and motivated Web Developer with experience building websites looking
          for an opportunity to grow front-end and back-end development skills.
        </p>
        <p>
          <FontAwesomeIcon icon={faCheck} color="#ffff" />
          &nbsp; Attentive to details, I also have experience in Software
          Testing (manual and automation) and a consuming passion for quality.
        </p>
        <p>
          <FontAwesomeIcon icon={faCheck} color="#ffff" />
          &nbsp; I love learning new things and happy to put my learning into
          practice. I don’t shy away from big challenges - they inspire and
          motivate me.
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faGitAlt} color="#EC5800" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJs} color="#28A4D9" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faSass} color="#EC5800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
