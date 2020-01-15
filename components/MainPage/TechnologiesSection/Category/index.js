import React from 'react';
import './index.scss';

const Category = ({ title, tech }) => (
	<div className="category">
		<h2>{title}</h2>
		<div className="icons">
			{tech.map((icon) => (
				<a href={icon.link} key={icon.name}>
					<img src={'/static/' + icon.path} alt={icon.name} />
				</a>
			))}
		</div>
	</div>
);

export default Category;
