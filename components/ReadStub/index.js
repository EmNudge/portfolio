import Link from "next/Link";
import "./index.scss";

const PostStub = ({ author, title, url, description, readAt, createdAt }) => (
  <Link href={url}>
    <a className="post">
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
  </Link>
);

export default PostStub;
