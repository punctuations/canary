import React from 'react';
import {storiesOf} from '@storybook/react';
import Link from '../src/link';

storiesOf('Link', module).add('default', () => (
	<Link color underline icon>
		Hi
	</Link>
));
