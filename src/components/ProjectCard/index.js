import "./index.scss";

function ProjectCard({ image, title, link }) {
  return (
    <div className="flip-card">
      <div className="flip-card__inner">
        <div className="flip-card__front">
          <img className="flip-card__image" src={image} alt={title} />
          <div className="flip-card__container">
            <p className="flip-card__title">{title}</p>
          </div>
        </div>
        <div className="flip-card__back">
          <p className="flip-card__link">{link}</p>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;