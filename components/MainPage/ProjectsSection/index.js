import React from 'react';
import Block from '../Block';
import './index.scss';

const ProjectsSection = () => (
	<Block>
		<div className="icon">
		<div className="main">
			<a href="https://github.com/EmNudge" className="github">
				<img src="static/companies/github.svg" alt="github" />
			</a>
		</div>
			<div className="lessers">
				<a href="https://codepen.io/EmNudge/" className="codepen">
					<img src="static/companies/codepen.svg" alt="codepen" />
				</a>
				<a href="https://codesandbox.io/u/EmNudge/" className="codesandbox">
					<img src="static/companies/codesandbox.svg" alt="codesandbox" />
				</a>
			</div>
		</div>
		<div>
			<h1>Projects</h1>
			<p>
				I am constantly coding. Whether it’s for long term projects, small examples, or purely practice. Larger
				or practical work will be on my{' '}
				<a href="https://github.com/EmNudge" className="normal">
					Github
				</a>, but I will have a ton of examples and experiments on my{' '}
				<a href="https://codepen.io/EmNudge/" className="normal">
					codepen
				</a>{' '}
				and{' '}
				<a href="https://codesandbox.io/u/EmNudge/e" className="normal">
					codesandbox
				</a>.
				<br />
				I will also have some more noteable ones listed on my projects page!
			</p>
		</div>
	</Block>
);

export default ProjectsSection;
