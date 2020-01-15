import React from 'react';
import ProjectBanner from './ProjectBanner';
import './index.scss';

const ProjectsContainer = ({ onTagClick, selectedTags, projects }) => {
	return (
		<div className="projects-container">
			{!projects.length && (
				<div className="no-projects">
					<h2>No Projects :(</h2>
					<p>try removing a tag or two.</p>
				</div>
      )}
      
			{projects.map((project, index) => (
				<ProjectBanner
					animationDelay={`.${index * 2}s`}
					onTagClick={onTagClick}
					key={project.title}
					selectedTags={selectedTags}
					{...project}
				/>
			))}
		</div>
	);
};

export default ProjectsContainer;
