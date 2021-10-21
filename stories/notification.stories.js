import React from 'react';
import {storiesOf} from '@storybook/react';
import Notification from '../src/notification';

storiesOf('Notification', module).add('iOS', () => (
	<>
		<Notification
			src={
				'https://cdn.discordapp.com/attachments/708830079551275098/890787858862968872/unknown.png'
			}
			text={'The new UI has launched!!'}
			title={'👀💬'}
		/>
		<style jsx global>{`
			html {
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
					Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			}
		`}</style>
	</>
));

storiesOf('Notification', module).add('macOS', () => (
	<div style={{width: '33%', position: 'absolute', right: '.5rem'}}>
		<Notification
			app={'Launch'}
			variant={'macOS'}
			src={
				'https://cdn.discordapp.com/attachments/708830079551275098/890787858862968872/unknown.png'
			}
			text={'The new UI has launched!!'}
			title={'👀💬'}
		/>
		<style jsx global>{`
			html {
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
					Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			}
		`}</style>
	</div>
));

storiesOf('Notification', module).add('dismissible', () => (
	<div style={{width: '33%', position: 'absolute', right: '.5rem'}}>
		<Notification
			dismiss
			app={'Launch'}
			variant={'macOS'}
			src={
				'https://cdn.discordapp.com/attachments/708830079551275098/890787858862968872/unknown.png'
			}
			text={'The new UI has launched!!'}
			title={'👀💬'}
		/>
		<style jsx global>{`
			html {
				font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
					Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
			}
		`}</style>
	</div>
));
