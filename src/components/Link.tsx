import React from 'react';
import styled from 'styled-components';

import '../styles';

export const Link = (props: {
	href?: string;
	underline?: boolean;
	color?: boolean;
	icon?: boolean;
	children: React.ReactNode;
}) => (
	<LinkTag
		href={props.href ?? '#'}
		className={props.icon ? 'external' : ''}
		style={{color: props.color ? '#0070f3' : ''}}
	>
		{props.children}
	</LinkTag>
);

const LinkTag = styled.a<{
	color?: boolean;
	underline?: boolean;
}>`
	${props => (props.color ? 'color: #0070f3;' : '')}
	${props => (props.underline ? 'text-decoration: underline;' : '')}
	
	&:hover {
		${props => (props.color ? 'color: #3291ff;' : '')}
	}
`;
