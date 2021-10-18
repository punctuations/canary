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
		{props.children}
		<style jsx>{`
			a {
				background: #26252a;
			}
		`}</style>
	</a>
);

export default Link;
