import {useRouter} from "next/router";
import Header from "../../Header";
import Head from "../../Head";
import posts from "../../../data/posts";
import "./index.scss";

const Layout = ({title, children}) => {
  const router = useRouter();
  const {publishedAt, readTime} = posts.find(post => post.title === title);

  return (
    <div className="blog-page">
      <Head title={title} />
      <Header currentRoute={router.route} />

      <article>
        <div className="title">
          <h1>{title}</h1>
          <div className="meta">
            {publishedAt}
            <span className="break">●</span>
            {readTime} min read
          </div>
        </div>

        <main>{children}</main>
        <hr />
        <footer>
          Questions? Comments? I don't have a built in comments system for a
          number of reasons, but feel free to shoot me an email at&nbsp;
          <a href="mailto:contact@kipperman.co">contact@kipperman.co</a>!
        </footer>
      </article>
    </div>
  );
};

export default Layout;
