import {storiesOf} from '@storybook/react';
import Image from '../src/image';
import React from 'react';

storiesOf('Image', module).add('default', () => (
	<div style={{width: '50%'}}>
		<Image
			title="Example"
			href={{ref: '#', type: 'external'}}
			color={'#2d2f3b'}
			src={'https://cdn.dont-ping.me/listen-along.png'}
		>
			Lorem ipsum dolor sit amet...
		</Image>
		<style jsx global>{`
			html {
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
					Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			}
		`}</style>
	</div>
));