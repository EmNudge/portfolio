import React from 'react';
import Block from '../Block';
import './index.scss';

const ArticlesSection = () => (
	<Block jumbotron={true}>
		<div>
			<h1>Articles</h1>
			<p>
				While I will ocassionally post articles to my website over{' '}
				<a className="normal" href="/blog">
					here
				</a>, they are usually rather general in scope.
			</p>
			<p>
				For coding-specific articles, I post to{' '}
				<a className="normal" href="https://dev.to/emnudge">
					dev.to
				</a>{' '}
				as they tend to get a lot more attention, which is something I prefer when trying to teach coding.
			</p>
		</div>
		<div className="icon">
			<a href="https://dev.to/emnudge" className="paper">
				<img src="static/paper.svg" alt="dev.to paper" />
			</a>
		</div>
	</Block>
);

export default ArticlesSection;
