import React from 'react';
import {storiesOf} from '@storybook/react';
import Message from '../src/message';

storiesOf('Message', module).add('default', () => <Message text={'Hello World'} />);
storiesOf('Message', module).add('provider', () => (
	<Message.Provider pfp="https://github.com/punctuations.png">
		<Message text={'Hello World'} />
	</Message.Provider>
));
storiesOf('Message', module).add('to', () => (
	<Message.Provider to pfp="https://github.com/punctuations.png">
		<Message to text={'Hello World'} />
	</Message.Provider>
));
