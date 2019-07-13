import Link from 'next/head';
import './index.scss';

const Post = ({ link, metaData: {publishedAt, title, summary} }) => (
  <Link href={link}>
    <div className="post">
      <div className="meta">{publishedAt} * {6} min read</div>
      <h2>{title}</h2>
      <h3>{summary}</h3>
    </div>
  </Link>
)

export default Post;