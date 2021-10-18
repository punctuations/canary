import React from 'react';
import {storiesOf} from '@storybook/react';
import Link from '../src/link';

storiesOf('HelloWorld', module).add('default', () => (
	<Link color underline icon>
		Hi
	</Link>
));
