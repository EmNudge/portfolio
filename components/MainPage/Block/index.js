import React from 'react';
import './index.scss';

const Block = ({ children, jumbotron, className, align }) => {
	const classNames = ['block'];
	if (className) classNames.push(className);
	if (align) classNames.push(`align-${align}`);

	const Render = () => <div className={classNames.join(' ')}>{children}</div>;

	if (jumbotron) {
		return (
			<div className="jumbotron">
				<Render />
			</div>
		);
  }
  
	return <Render />;
};

export default Block;
