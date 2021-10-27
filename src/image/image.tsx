import React from 'react';
import {motion} from 'framer-motion';
import FastAverageColor from 'fast-average-color';

export type ImageProps = {
	full?: boolean;
	src: string;
	// Hex colour code OR average colour of image
	color?: string | boolean;
	// ONLY hex code of dark colour
	dark?: string;
	pane?: string;
	title?: string;
	// Description
	children?: React.ReactNode;
	href?: string | {ref: string; type: 'internal' | 'external'};
};

const Image = (props: ImageProps) => {
	const fac = new FastAverageColor();

	fac
		.getColorAsync(props.src)
		.then(color => {
			setAverage({isDark: color.isDark, color: color.hex});
		})
		.catch(e => {
			throw new Error(e);
		});

	const [average, setAverage] = React.useState<{isDark?: boolean; color?: string}>({});
	const [luma, setLuma] = React.useState<number>(0);

	React.useEffect(() => {
		if (props.color && typeof props.color !== 'boolean') {
			const rgb = parseInt(props.color?.substring(1), 16);
			const r = (rgb >> 16) & 0xff; // Extract red
			const g = (rgb >> 8) & 0xff; // Extract green
			const b = (rgb >> 0) & 0xff; // Extract blue

			const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
			setLuma(brightness);
			console.log(brightness);
		}
	}, []);

	return (
		<motion.div
			className="image-container"
			initial={{y: 20, opacity: 0}}
			animate={{
				y: 0,
				opacity: 1,
				transition: {
					duration: 0.4,
					ease: [0.48, 0.15, 0.25, 0.96],
				},
			}}
		>
			<header>
				<h3 className="image-title">{props.title}</h3>
				<p className="image-desc">{props.children}</p>
			</header>
			<div className="image-link">
				<a
					href={typeof props.href === 'string' ? props.href ?? '' : props.href?.ref}
					className={typeof props.href === 'string' ? '' : props.href?.type}
				>
					<span className="content">Check it out</span>
				</a>
			</div>

			<img className="image-src" src={props.src} alt={props.title} />
			<style jsx>{`
				a {
					color: inherit;
					text-decoration: none;
				}

				a:hover .content {
					color: inherit;
					text-decoration: underline;
				}

				.internal:after {
					content: ' ›';
					text-decoration: none;
				}

				.external:after {
					content: ' ↗';
					text-decoration: none;
				}

				.image-container > :not([hidden]) ~ :not([hidden]) {
					margin-top: calc(0.5rem * calc(1 - 0));
					margin-bottom: calc(0.5rem * 0);
				}

				:global(.image-container) {
					background-color: ${typeof props.color === 'string'
			? props.color
			: average.color ?? '#c4c4c4'};
					border-color: ${typeof props.color === 'string' ? props.color : average.color ?? '#fff'};
					border-radius: 0.375rem;
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					-webkit-box-orient: vertical;
					-webkit-box-direction: normal;
					-ms-flex-direction: column;
					flex-direction: column;
					-webkit-box-pack: center;
					-ms-flex-pack: center;
					justify-content: center;
					height: 16rem;
					overflow: hidden;
					padding: 1rem 3rem;
					position: relative;
					-webkit-box-shadow: 0 0 #000, 0 0 #000, 0 0 #000, 0 0, #000,
						0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
					box-shadow: 0 0 #000, 0 0 #000, 0 0 #000, 0 0, #000, 0 4px 6px -1px rgba(0, 0, 0, 0.1),
						0 2px 4px -1px rgba(0, 0, 0, 0.06);
					// replace with fac
					color: ${typeof props.color === 'string'
			? luma < 75
				? '#fff'
				: '#000'
			: average.isDark
				? '#fff'
				: '#000'};
					width: 100%;
					-webkit-transition-property: all;
					transition-property: all;
					-webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
					transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
					-webkit-transition-duration: 0.5s;
					transition-duration: 0.5s;
				}

				.image-container:hover {
					-webkit-box-shadow: 0 0 #000, 0 0 #000, 0 0 #000, 0 0, #000,
						0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
					box-shadow: 0 0 #000, 0 0 #000, 0 0 #000, 0 0, #000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
						0 4px 6px -2px rgba(0, 0, 0, 0.05);
				}

				@media (min-width: 1536px) {
					.image-container {
						height: 20rem;
					}
				}

				header > :not([hidden]) ~ :not([hidden]) {
					margin-right: calc(0.75rem * 0);
					margin-left: calc(0.75rem * calc(1 - 0));
				}
				header {
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					-webkit-box-orient: vertical;
					-webkit-box-direction: normal;
					-ms-flex-direction: column;
					flex-direction: column;
					-webkit-box-align: center;
					-ms-flex-align: center;
					align-items: center;
					-webkit-box-pack: start;
					-ms-flex-pack: start;
					justify-content: flex-start;
					height: 100%;
					margin-top: 0.75rem;
					width: 100%;
					z-index: 10;
				}

				:global(.image-src) {
					width: 91.666667%;
					pointer-events: none;
					position: absolute;
					bottom: -2.25rem;
					right: -9rem;
					-webkit-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
					user-select: none;
				}
				@media (min-width: 640px) {
					.image-src {
						bottom: -4.5rem;
						right: -10rem;
						width: 24rem;
					}
				}
				@media (min-width: 768px) {
					.image-src {
						right: -2rem;
						bottom: -5rem;
						width: 24rem;
					}
				}
				@media (min-width: 1024px) {
					.image-src {
						right: -2rem;
						bottom: -5rem;
						width: 24rem;
					}
				}
				@media (min-width: 1280px) {
					.image-src {
						right: -2rem;
						bottom: -5rem;
						width: 24rem;
					}
				}
				@media (min-width: 1536px) {
					.image-src {
						width: 58.333333%;
						right: -4.5rem;
						bottom: -5rem;
					}
				}
				@media (min-width: 1920px) {
					.image-src {
						width: 50%;
						right: -4.5rem;
						bottom: -5rem;
					}
				}

				:global(.image-title) {
					margin-block-start: unset;
					margin-block-end: unset;
					font-weight: normal;
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					-webkit-box-align: center;
					-ms-flex-align: center;
					align-items: center;
					-webkit-box-pack: center;
					-ms-flex-pack: center;
					justify-content: center;
					font-size: 1.125rem;
					line-height: 1.75rem;
				}
				@media (min-width: 640px) {
					.image-title {
						font-size: 1.5rem;
						line-height: 2rem;
					}
				}
				@media (min-width: 768px) {
					.image-title {
						font-size: 1.5rem;
						line-height: 2rem;
					}
				}
				@media (min-width: 1024px) {
					.image-title {
						font-size: 1.5rem;
						line-height: 2rem;
					}
				}
				@media (min-width: 1280px) {
					.image-title {
						font-size: 1.5rem;
						line-height: 2rem;
					}
				}
				@media (min-width: 1536px) {
					.image-title {
						font-size: 1.875rem;
						line-height: 2.25rem;
					}
				}

				:global(.image-desc) {
					margin-block-start: 0.5rem;
					margin-block-end: unset;
					font-size: 0.75rem;
					line-height: 1rem;
					opacity: 0.5;
					padding-left: 0;
				}
				@media (min-width: 640px) {
					.image-desc {
						font-size: 1rem;
						line-height: 1.5rem;
						padding-left: 0.5rem;
					}
				}
				@media (min-width: 768px) {
					.image-desc {
						font-size: 1rem;
						line-height: 1.5rem;
						padding-left: 0.5rem;
					}
				}
				@media (min-width: 1024px) {
					.image-desc {
						font-size: 1rem;
						line-height: 1.5rem;
						padding-left: 0.5rem;
					}
				}
				@media (min-width: 1280px) {
					.image-desc {
						font-size: 1rem;
						line-height: 1.5rem;
						padding-left: 0.5rem;
					}
				}
				@media (min-width: 1536px) {
					.image-desc {
						font-size: 1.125rem;
						line-height: 1.75rem;
						padding-left: 0.5rem;
					}
				}

				:global(.image-link) {
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					-webkit-box-pack: start;
					-ms-flex-pack: start;
					justify-content: flex-start;
					height: 50%;
					width: 100%;
				}
				@media (min-width: 1536px) {
					.image-link {
						height: 100%;
						font-size: 1.5rem;
						line-height: 2rem;
						margin-left: 5rem;
						padding-bottom: 2rem;
					}
				}
			`}</style>
		</motion.div>
	);
};

export default Image;
