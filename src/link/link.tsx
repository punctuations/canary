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
	<a
		href={props.href ?? ''}
		className={props.icon ? (props.internal ? 'internal' : 'external') : ''}
	>
		<span className="content">{props.children}</span>
		<style jsx>{`
			a {
				color: ${props.color ? '#0070f3' : 'inherit'};
				text-decoration: none;
			}

			a:hover .content {
				color: ${props.color ? '#3291ff' : 'inherit'};
				text-decoration: ${props.underline ? 'underline' : 'inherit'};
			}

			.internal:after {
				content: ' →';
				text-decoration: none;
			}

			.external:after {
				content: ' ↗';
				text-decoration: none;
			}
		`}</style>
	</a>
);

export default Link;
