import { useRouter } from "next/router";
import Header from "../../Header";
import Head from "../../Head";
import Footer from "../../Footer";
import posts from "../../../data/posts";
import "./index.scss";

const Layout = ({ title, children }) => {
  const router = useRouter();
  const { publishedAt, readTime } = posts.find(post => post.title === title);

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
      </article>
      
      <Footer />
    </div>
  );
};

export default Layout;
