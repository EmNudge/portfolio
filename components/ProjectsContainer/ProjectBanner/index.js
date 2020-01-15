import "./index.scss";

const ProjectBanner = ({
  title,
  url,
  description,
  tags,
  onTagClick,
  animationDelay,
  selectedTags,
  background
}) => (
  <div className="project-banner" style={{animationDelay}}>
    <div className="bg-card" style={{background}} />
    <div className="main">
      <h1>{title}</h1>
      <a className="normal" href={url}>
        {url}
      </a>
      <p>{description}</p>
    </div>
    <div className="tags">
      {tags.map(tag => (
        <span
          onClick={() => onTagClick(tag)}
          key={tag}
          className={selectedTags.includes(tag) ? "selected" : ""}>
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectBanner;
