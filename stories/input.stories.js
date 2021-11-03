import React from 'react';
import {storiesOf} from '@storybook/react';
import Input from '../src/input';

storiesOf('Input', module).add('default', () => (
	<>
		<Input />
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
	</>
));

storiesOf('Input', module).add('green', () => (
	<>
		<Input green />
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
	</>
));
