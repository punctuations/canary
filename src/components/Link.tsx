import React from 'react';
import styled from 'styled-components';

export const Link = (props: {
	href?: string;
	underline?: boolean;
	color?: boolean;
	icon?: boolean;
	internal?: boolean;
	children: React.ReactNode;
}) => (
	<LinkTag
		href={props.href ?? ''}
		className={props.icon ? (props.internal ? 'internal' : 'external') : ''}
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

	& .external:after {
		content: ' \2197';
	}

	& .internal:after {
		content: ' \2192';
	}
`;
