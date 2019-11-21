import "./index.scss";

const PostStub = ({ author, title, url, description, readAt, createdAt }) => (
  <a href={url} className="recent-read">
    <div className="meta">
      {author}
      <span className="break">●</span>
      created at {createdAt}
      <span className="break">●</span>
      read at {readAt}
    </div>
    <h2>{title}</h2>
    <h3>{description}</h3>
  </a>
);

export default PostStub;
