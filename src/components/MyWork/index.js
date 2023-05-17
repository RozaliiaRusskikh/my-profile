import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import ProjectCard from '../ProjectCard';
import travelApp from '../../assets/images/my-travel-app.png';
import movieApp from '../../assets/images/movie.png';
import wizardApp from '../../assets/images/wizard.png';
import spaceApp from '../../assets/images/my-learning-space.png';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  let travelBookLink = 'https://my-travel-memory-book.netlify.app/';
  let learningSpaceLink = 'https://my-learning-space-app.netlify.app';
  let movieLink = 'https://smart-movie-engine.netlify.app';
  let wizardLink = 'https://hogwarts-houses.netlify.app';

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
          <ProjectCard image={travelApp} title="My Travel Book" />
        </a>
        <a
          className="card-link"
          target="_blank"
          rel="noreferrer"
          href={movieLink}
        >
          <ProjectCard image={movieApp} title="Smart Movie Engine" />
        </a>
        <a
          className="card-link"
          target="_blank"
          rel="noreferrer"
          href={learningSpaceLink}
        >
          <ProjectCard image={spaceApp} title="My Learning Space" />
        </a>
        <a
          className="card-link"
          target="_blank"
          rel="noreferrer"
          href={wizardLink}
        >
          <ProjectCard image={wizardApp} title="Find your wizard family" />
        </a>
      </div>
    </div>
  );
};

export default About;
