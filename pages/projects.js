import Layout from "../components/Layout";
import "./projects.scss";

const Projects = () => (
  <Layout title="Projects">
    <div className="search-container">
      <label htmlFor="search-box">Search</label>
      <input id="search-box" type="text" placeholder="Start typing..." />
    </div>
  </Layout>
);

export default Projects;
