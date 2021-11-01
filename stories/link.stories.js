import React from 'react';
import {storiesOf} from '@storybook/react';
import Link from '../src/link';

storiesOf('Link', module).add('default', () => (
	<>
		<Link href="https://example.com/" color underline icon>
			Example
		</Link>
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

storiesOf('Link', module).add('internal', () => (
	<>
		<Link href="https://example.com/" internal color underline icon>
			Learn more
		</Link>
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
