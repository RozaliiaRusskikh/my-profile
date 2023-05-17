import './index.scss';

function ProjectCard({ image, title}) {
  return (
    <article className="card">
      <img className="card__image" src={image} alt={title} />
      <h3 className="card__title">{title}</h3>
    </article>
  );
}
export default ProjectCard;
