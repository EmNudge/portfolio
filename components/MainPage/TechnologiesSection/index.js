import React from 'react';
import Category from './Category';
import { frontend, langs, database } from '../../../data/technologies';
import Block from '../Block'

const TechnologiesSection = () => {
	return (
		<Block>
			<div className="content">
				<h1>Technologies</h1>
				<Category title="Frontend Frameworks" tech={frontend} />
				<Category title="Languages" tech={langs} />
				<Category title="Database Tech" tech={database} />
			</div>
		</Block>
	);
};

export default TechnologiesSection;
