import React from 'react';
import './index.scss';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const copyrightDate = currentYear === 2019 ? 2019 : `2019 - ${currentYear}`;
	const links = [
		{ path: 'mail.svg', name: 'contact', link: 'mailto:contact@kipperman.co' },
		{ path: 'companies/github.svg', name: 'GitHub', link: 'https://github.com/EmNudge' },
		{ path: 'companies/codesandbox.svg', name: 'CodeSandbox', link: 'https://codesandbox.io/u/EmNudge/' },
		{ path: 'companies/codepen.svg', name: 'Codepen', link: 'https://codepen.io/EmNudge/' },
		{ path: 'companies/dev.svg', name: 'Dev.to', link: 'https://dev.to/emnudge' }
	];

	return (
		<footer>
			<div className="links">
				{links.map(({ path, name, link }) => (
					<a key={path} href={link}>
						<img src={'/static/' + path} key={name} alt={name} />
					</a>
				))}
			</div>
			<div className="copyright">© Copyright {copyrightDate} Calvin Kipperman</div>
		</footer>
	);
};

export default Footer;
