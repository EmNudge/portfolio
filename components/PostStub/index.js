import Link from 'next/Link';
import './index.scss';

const PostStub = ({ path, publishedAt, title, summary }) => (
  <Link href={path}>
    <a className="post">
      <div className="meta">
        {publishedAt}
        <span className="break">●</span>
        {6} min read
      </div>
      <h2>{title}</h2>
      <h3>{summary}</h3>
    </a>
  </Link>
)

export default PostStub;