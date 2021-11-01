import React from 'react';
import {storiesOf} from '@storybook/react';
import Message from '../src/message';

storiesOf('Message', module).add('default', () => (
	<>
		<Message text={'Hello World'} />
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
storiesOf('Message', module).add('provider', () => (
	<Message.Provider pfp="https://github.com/punctuations.png">
		<Message text={'Hello World'} />
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
	</Message.Provider>
));
storiesOf('Message', module).add('to', () => (
	<Message.Provider to pfp="https://github.com/punctuations.png">
		<Message to text={'Hello World'} />
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
	</Message.Provider>
));
storiesOf('Message', module).add('hidden/multiple', () => (
	<Message.Provider>
		<Message hide text={'Hello World'} />
		<Message text={'Lorem Ipsum...'} />
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
	</Message.Provider>
));
