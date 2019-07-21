import Layout from "../components/layouts/Main";
import Searchbox from "../components/Searchbox";
import {projects, tags} from "../projects/index";
import ProjectBanner from "../components/ProjectBanner";

const Projects = () => {
  const [searchTags, setSearchTags] = React.useState([]);

  const [rerenderForcer, setRerenderForcer] = React.useState(1);

  const addTag = tag => {
    if (searchTags.includes(tag)) return;
    setSearchTags([...searchTags, tag]);
  };

  const getFilteredProjects = () => {
    if (!searchTags.length) return projects;

    return projects.filter(project =>
      searchTags.every(tag => project.tags.includes(tag))
    );
  };

  const handleChange = tag => {
    setRerenderForcer(rerenderForcer * -1);
    setSearchTags(tag);
  };

  return (
    <Layout title="Projects">
      <Searchbox tags={tags} addedTags={searchTags} onChange={handleChange} />
      <div className="projects-container" key={rerenderForcer}>
        {getFilteredProjects().map((project, index) => (
          <ProjectBanner
            animationDelay={`.${index * 2}s`}
            onTagClick={addTag}
            key={project.title}
            selectedTags={searchTags}
            {...project}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
