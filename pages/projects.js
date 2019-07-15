import Layout from "../components/layouts/Main";
import Searchbox from "../components/Searchbox";
import projectsData from "../projects/index";
import ProjectBanner from "../components/ProjectBanner";

const {projects: projectMetas, tags} = projectsData;

const Projects = () => {
  const [searchTags, setSearchTags] = React.useState([]);
  console.log({projectMetas});

  return (
    <Layout title="Projects">
      <Searchbox
        tags={tags}
        addedTags={searchTags}
        onChange={tags => setSearchTags(tags)}
      />
      <div className="projects-container">
        {projectMetas.map(project => (
          <ProjectBanner key={project.title} {...project} />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
