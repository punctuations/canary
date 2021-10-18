import React from 'react';

export type LinkProps = {
	href?: string;
	underline?: boolean;
	color?: boolean;
	icon?: boolean;
	internal?: boolean;
	children: React.ReactNode;
};

const Link = (props: LinkProps) => (
	<a href={props.href ?? ''}>
		{props.children}
		<style jsx>{`
			a {
				color: ${props.color ? '#0070f3' : 'inherit'};
				text-decoration: ${props.underline ? 'underline' : 'inherit'};
			}

			a:hover {
				color: ${props.color ? '#3291ff' : 'inherit'};
			}

			a:after {
				content: ${props.icon ? (props.internal ? ' \u2192' : ' \u2197') : ''};
			}
		`}</style>
	</a>
);

export default Link;
