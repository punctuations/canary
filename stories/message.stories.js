import React from 'react';
import {storiesOf} from '@storybook/react';
import Message from '../src/message';

storiesOf('Message', module).add('default', () => (
	<>
		<Message style={{fontFamily: 'sans-serif'}} text={'Hello World'} />
		<style jsx global>{`
			html {
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
					Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			}
		`}</style>
	</>
));
storiesOf('Message', module).add('provider', () => (
	<Message.Provider style={{fontFamily: 'sans-serif'}} pfp="https://github.com/punctuations.png">
		<Message text={'Hello World'} />
		<style jsx global>{`
			html {
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
					Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			}
		`}</style>
	</Message.Provider>
));
storiesOf('Message', module).add('to', () => (
	<Message.Provider style={{fontFamily: 'sans-serif'}} to pfp="https://github.com/punctuations.png">
		<Message to text={'Hello World'} />
		<style jsx global>{`
			html {
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
					Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			}
		`}</style>
	</Message.Provider>
));
