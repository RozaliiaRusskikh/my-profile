import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import ProjectCard from '../ProjectCard';
import travelApp from '../../assets/images/my-travel-app.png';

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
    <section className="my-work">
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'w', 'o', 'r', 'k']}
              idx={15}
            />
          </h1>
        </div>
        <ProjectCard
          image={travelApp}
          title="My Travel Book"
          quote="https://github.com/RozaliiaRusskikh/my-travel-book"
        />
      </div>
    </section>
  );
};

export default About;
