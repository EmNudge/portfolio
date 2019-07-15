import "./index.scss";

const ProjectBanner = ({title, url, description, tags, image, onTagClick}) => (
  <div className="project-banner">
    <img src={image} alt={`${title} image`} />
    <div className="main">
      <h1>{title}</h1>
      <a className="normal" href={url}>
        {url}
      </a>
      <p>{description}</p>
    </div>
    <div className="tags">
      {tags.map(tag => (
        <span onClick={() => onTagClick(tag)} key={tag}>
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectBanner;
