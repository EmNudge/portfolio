import React from 'react';
import Console from '../../../public/static/console.svg';
import Block from '../Block'
import './index.scss'

const DevelopingSection = () => {
	const info = {
		name: 'Calvin Kipperman',
		position: 'Fullstack Web Developer',
		langs: ['Javascript', 'Typescript', 'Rust'],
		software: ['Adobe Suite', 'G Suite'],
		passions: ['coding', 'acting']
	};
	
	return (
		<Block>
			<div className="console">
				<div className="svg">
					<Console />
				</div>
				<p>Calvins-Website:~ guest$ info</p>
				<table>
					<tbody>
						<tr>
							<td>KEY</td>
							<td>VALUE</td>
						</tr>
						{Object.keys(info).map((key) => (
							<tr key={key}>
								<td>{key}</td>
								<td>{JSON.stringify(info[key])}</td>
							</tr>
						))}
						<tr>
							<td>hobbies</td>
							<td>this.passions</td>
						</tr>
					</tbody>
				</table>
				<p>
					Calvins-Website:~ guest$ info <span className="cursor" />
				</p>
			</div>
			<div className="developing">
				<h1>Developing</h1>
				<p>My name is Calvin Kipperman. I am a fullstack web developer with a strong UI background.</p>
				<p>
					I develop complex and beautiful web and native applications with React, React Native, Vue, and
					Vanilla JS.
				</p>
			</div>
		</Block>
	);
};

export default DevelopingSection;
