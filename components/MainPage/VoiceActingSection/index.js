import React from 'react';
import Waveform from '../../../public/static/waveform.svg';
import Block from '../Block';
import './index.scss';

const VoiceActingSection = () => (
	<Block jumbotron={true}>
		<div className="voice-acting">
			<h1>Voice Acting</h1>
			<p>
				Aside from developing, I do voice work for videogames, animations, and commercials. No, seriously, I
				have an{' '}
				<a className="normal" href="https://www.imdb.com/name/nm10664016/">
					IMDb page
				</a>
				.
			</p>
			<p>
				If you want to read more about that, you can head over to my voice work website,{' '}
				<a className="normal" href="https://emnudge.com">
					https://emnudge.com
				</a>
				.
			</p>
		</div>
		<div className="waveform">
			<div className="svg">
				<Waveform />
			</div>
		</div>
	</Block>
);

export default VoiceActingSection;
