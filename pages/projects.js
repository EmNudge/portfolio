import Layout from "../components/layouts/Main";
import Searchbox from "../components/Searchbox";
import {projects, tags} from "../projects/index";
import ProjectBanner from "../components/ProjectBanner";

const Projects = () => {
  const [searchTags, setSearchTags] = React.useState([]);

  const addTag = tag => {
    if (searchTags.includes(tag)) return;
    setSearchTags([...searchTags, tag]);
  };

  const getFilteredProjects = () => {
    if (!searchTags.length) return projects;

    return projects.filter(project =>
      project.tags.some(tag => searchTags.some(searchTag => searchTag === tag))
    );
  };

  return (
    <Layout title="Projects">
      <Searchbox
        tags={tags}
        addedTags={searchTags}
        onChange={tags => setSearchTags(tags)}
      />
      <div className="projects-container">
        {getFilteredProjects().map(project => (
          <ProjectBanner onTagClick={addTag} key={project.title} {...project} />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
