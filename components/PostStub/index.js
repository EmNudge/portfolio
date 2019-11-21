import Link from "next/link";
import "./index.scss";

const PostStub = ({path, publishedAt, title, summary, readTime}) => (
  <Link href={path}>
    <a className="post">
      <div className="meta">
        {publishedAt}
        <span className="break">●</span>
        {readTime} min read
      </div>
      <h2>{title}</h2>
      <h3>{summary}</h3>
    </a>
  </Link>
);

export default PostStub;
