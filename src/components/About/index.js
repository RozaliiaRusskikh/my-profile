import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone"></div>
      <h1>
        <AnimatedLetters
          strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
          idx={15}
        />
      </h1>
      <p>
        I am enthusiastic, fascinated by computer technology, focused and
        motivated Junior Developer with experience building React websites
        looking for an opportunity to grow front-end development skills.
      </p>
      <p>
        Attentive to details, I also have experience in Software Testing (manual
        and automation).
      </p>
      <p>
        I love learning new things and happy to put my learning into practice. I
        don’t shy away from big challenges.
      </p>
    </div>
  );
};

export default About;
