import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import ProjectCard from '../ProjectCard';
import travelApp from '../../assets/images/my-travel-app.png';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  let travelBookLink = 'https://github.com/RozaliiaRusskikh/my-travel-book';

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
    <div className="container my-work-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'w', 'o', 'r', 'k']}
            idx={15}
          />
        </h1>
      </div>
      <div className="cards">
        <a
          className="card-link"
          target="_blank"
          rel="noreferrer"
          href={travelBookLink}
        >
          <ProjectCard
            image={travelApp}
            title="My Travel Book"
          />
        </a>
      </div>
    </div>
  );
};

export default About;
