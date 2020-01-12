import Layout from '../components/layouts/Main';
import Searchbox from '../components/Searchbox';
import { projects, tags } from '../data/projects';
import ProjectsContainer from '../components/ProjectsContainer';

const Projects = () => {
	const [searchTags, setSearchTags] = React.useState([]);

	const [rerenderForcer, setRerenderForcer] = React.useState(1);

	const addTag = (tag) => {
		if (searchTags.includes(tag)) return;
		setSearchTags([...searchTags, tag]);
	};

	const getFilteredProjects = () => {
		if (!searchTags.length) return projects;

		return projects.filter((project) => searchTags.every((tag) => project.tags.includes(tag)));
	};

	const handleChange = (tag) => {
		setRerenderForcer(rerenderForcer * -1);
		setSearchTags(tag);
	};

	return (
		<Layout title="Projects">
			<Searchbox tags={tags} addedTags={searchTags} onChange={handleChange} />

			<ProjectsContainer
				key={rerenderForcer}
				projects={getFilteredProjects()}
				selectedTags={searchTags}
				onTagClick={addTag}
			/>
		</Layout>
	);
};

export default Projects;
