import {storiesOf} from '@storybook/react';
import Image from '../src/image';
import React from 'react';

storiesOf('Image', module).add('default', () => (
	<div style={{width: '50%'}}>
		<Image
			title="Example"
			href={{ref: '#', type: 'external'}}
			src={'https://cdn.dont-ping.me/canary.png'}
		>
			Lorem ipsum dolor sit amet...
		</Image>
		<style jsx global>{`
			html {
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
					Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			}

			@media (prefers-color-scheme: dark) {
				html {
					background-color: #000;
				}
			}
		`}</style>
	</div>
));

storiesOf('Image', module).add('full', () => (
	<div style={{width: '50%'}}>
		<Image
			variant="full"
			title="Example"
			href={{ref: '#', type: 'internal'}}
			color={'#000000'}
			src={
				'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80'
			}
		>
			Lorem ipsum dolor sit amet...
		</Image>
		<style jsx global>{`
			html {
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
					Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			}

			@media (prefers-color-scheme: dark) {
				html {
					background-color: #000;
				}
			}
		`}</style>
	</div>
));

storiesOf('Image', module).add('direction', () => (
	<div style={{width: '50%'}}>
		<Image
			title="Example"
			direction="column"
			href={{ref: '#', type: 'internal'}}
			src={'https://cdn.dont-ping.me/canary.png'}
		>
			Lorem ipsum dolor sit amet...
		</Image>
		<style jsx global>{`
			html {
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
					Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			}

			@media (prefers-color-scheme: dark) {
				html {
					background-color: #000;
				}
			}
		`}</style>
	</div>
));
