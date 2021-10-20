import React from 'react';

import {AnimatePresence, motion, Transition} from 'framer-motion';

interface EventTargetWithTagName extends EventTarget {
	tagName: string;
}

interface MouseEventWithTagName extends React.MouseEvent<HTMLDivElement> {
	target: EventTargetWithTagName;
}

export type NotificationProps = {
	initial?: {
		x: string | number;
		y: string | number;
	};
	exit?: {x: string | number; y: string | number};
	transition?: Transition;
	href?: string;
	duration?: number;
	dismiss?: boolean;
	variant?: 'macOS' | 'iOS';
	app?: string;
	src: string;
	title: string;
	text: string;
};

const Notification = (props: NotificationProps) => {
	const router = {
		push: (url: string) => {
			window.location.href = url;
		},
	};

	const [hidden, setHiddenState] = React.useState<boolean>(false);

	// React.useEffect(() => {
	// 	if (!props.dismiss) {
	// 		setTimeout(() => {
	// 			setHiddenState(true);
	// 		}, props.duration ?? 5000);
	// 	}
	// }, []);

	return (
		<AnimatePresence>
			{!hidden && (
				<motion.div
					key={'notification'}
					className="notification-container notification-container-auto"
					initial={{
						y: props.initial?.y ?? props.variant?.toLowerCase() === 'macos' ? 0 : -100,
						x: props.initial?.x ?? props.variant?.toLowerCase() === 'macos' ? 400 : 0,
					}}
					animate={{
						y: 0,
						x: 0,
						transition: props.transition ?? {
							delay: 1,
							duration: 0.4,
							ease: [0.48, 0.15, 0.25, 0.96],
						},
					}}
					exit={{
						y: props.initial?.y ?? props.variant?.toLowerCase() === 'macos' ? 0 : -100,
						x: props.initial?.x ?? props.variant?.toLowerCase() === 'macos' ? 400 : 0,
						transition: props.transition ?? {
							duration: 0.4,
							ease: [0.48, 0.15, 0.25, 0.96],
						},
					}}
					onClick={(event: MouseEventWithTagName) => {
						if (
							props.variant?.toLowerCase() === 'iOS' &&
							props.href &&
							event.target.tagName.toLowerCase() !== 'svg' &&
							event.target.tagName.toLowerCase() !== 'button' &&
							event.target.tagName.toLowerCase() !== 'path'
						) {
							router.push(props.href);
						}
					}}
				>
					<div>
						{props.variant?.toLowerCase() === 'ios' ? (
							<img className="notification-ios" src={props.src} alt={'icon'} />
						) : (
							<header className="notification-macos">
								<img src={props.src} alt={'icon'} />
								<h3>{props.app}</h3>
							</header>
						)}
						<div className="notification-content">
							<h4>{props.title}</h4>
							<p>{props.text}</p>
						</div>
					</div>

					{props.dismiss &&
						(props.variant?.toLowerCase() === 'macos' ? (
							<button
								onClick={() => {
									setHiddenState(true);
								}}
								className="notification-mac-dismiss notification-mac-dismiss-auto"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						) : (
							<button
								onClick={() => {
									setHiddenState(true);
								}}
								className="notification-ios-dismiss"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						))}
					{props.href && props.variant?.toLowerCase() === 'macOS' && (
						<button
							onClick={() => {
								router.push(props.href ?? '');
							}}
							className="notification-link"
						>
							&rsaquo;
						</button>
					)}
				</motion.div>
			)}
			<style jsx global>{`
				.notification-container-auto {
					border-color: ${props.variant?.toLowerCase() === 'macos'
						? 'rgba(255, 255, 255, 0.4)'
						: ''};
					background-color: rgba(229, 231, 235, 0.4);
				}

				@media (prefers-color-scheme: dark) {
					.notification-container-auto {
						border-color: ${props.variant?.toLowerCase() === 'macos' ? 'rgba(31, 41, 55, 1)' : ''};
						background-color: rgba(31, 41, 55, 0.6);
					}
				}

				.notification-container {
					display: -webkit-box;
					display: -ms-flex;
					display: flex;
					-webkit-box-pack: ${props.dismiss && props.variant?.toLowerCase() !== 'macos'
						? 'justify'
						: 'start'};
					-ms-flex-pack: ${props.dismiss && props.variant?.toLowerCase() !== 'macos'
						? 'justify'
						: 'start'};
					justify-content: ${props.dismiss && props.variant?.toLowerCase() !== 'macos'
						? 'space-between'
						: 'flex-start'};
					margin-top: 0.5rem;
					position: relative;
					border-width: ${props.variant?.toLowerCase() === 'macos' ? '1px' : ''};
					padding: ${props.variant?.toLowerCase() === 'macos' ? '0.75rem 1.25rem' : '0.5rem 2rem'};
					-webkit-box-shadow: ${props.variant?.toLowerCase() === 'macos'
						? '0 0 #000, 0 0 #000, 0 0 #000, 0 0, #000, 0 1px 2px 0 rbga(0, 0, 0, 0, 0.5)'
						: ''};
					box-shadow: ${props.variant?.toLowerCase() === 'macos'
						? '0 0 #000, 0 0 #000, 0 0 #000, 0 0, #000, 0 1px 2px 0 rbga(0, 0, 0, 0, 0.5)'
						: ''};
					cursor: ${props.variant?.toLowerCase() !== 'macOS' && props.href ? 'pointer' : 'auto'};
					border-radius: 0.75rem;
					width: 100%;
					backdrop-filter: saturate(2) blur(64px);
				}

				.notification-container > div {
					margin-left: ${props.variant?.toLowerCase() === 'macos'
						? 'unset'
						: 'calc(2rem * calc(1 - 0))'};

					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					-webkit-box-orient: ${props.variant?.toLowerCase() === 'macos' ? 'vertical' : ''};
					-webkit-box-direction: ${props.variant?.toLowerCase() === 'macos' ? 'normal' : ''};
					-ms-flex-direction: ${props.variant?.toLowerCase() === 'macos' ? 'column' : ''};
					flex-direction: ${props.variant?.toLowerCase() === 'macos' ? 'column' : ''};
					-webkit-box-align: ${props.variant?.toLowerCase() === 'macos' ? '' : 'center'};
					-ms-flex-align: ${props.variant?.toLowerCase() === 'macos' ? '' : 'center'};
					align-items: ${props.variant?.toLowerCase() === 'macos' ? '' : 'center'};
					-webkit-box-pack: center;
					-ms-flex-pack: center;
					justify-content: center;
				}

				img.notification-ios {
					border-radius: 0.25rem;
					margin-right: calc(0.5rem * calc(1 - 0));

					height: 2.25rem;
					width: 2.25rem;
				}

				header.notification-macos {
					margin: 0 calc(0.5rem * calc(1 - 0))
						${props.variant?.toLowerCase() === 'macos' ? 'calc(0.5rem * calc(1 - 0))' : 0} 0;

					display: -webkit-inline-flex;
					display: -ms-inline-flexbox;
					display: inline-flex;
					-webkit-box-align: center;
					-ms-flex-align: center;
					align-items: center;
				}

				.notification-macos > img {
					margin-right: calc(0.5rem * calc(1 - 0));

					max-width: 100%;
					height: ${props.variant?.toLowerCase() === 'macos' ? '1.25rem' : '2.25rem'};
					width: ${props.variant?.toLowerCase() === 'macos' ? '1.25rem' : '2.25rem'};
					border-radius: 0.25rem;
				}

				.notification-macos > h3 {
					// normalize
					margin-block-start: unset;
					margin-block-end: unset;

					font-size: 0.75rem;
					line-height: 1rem;
					opacity: 0.6;
					text-transform: uppercase;
				}

				.notification-content {
					margin-top: ${props.variant?.toLowerCase() === 'ios'
						? 'calc(-0.25rem * calc(1 - 0))'
						: ''};

					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					-webkit-box-orient: vertical;
					-webkit-box-direction: normal;
					-ms-flex-direction: column;
					flex-direction: column;
				}

				.notification-content > h4 {
					// normalize
					margin-block-start: unset;
					margin-block-end: unset;

					font-weight: 500;
					font-size: ${props.variant?.toLowerCase() === 'macos' ? '.875rem' : '1rem'};
					line-height: ${props.variant?.toLowerCase() === 'macos' ? '1.25rem' : '1.5rem'};
				}

				.notification-content > p {
					// normalize
					margin-block-start: unset;
					margin-block-end: unset;

					font-size: ${props.variant?.toLowerCase() === 'macos' ? '.75rem' : '.875rem'};
					line-height: ${props.variant?.toLowerCase() === 'macos' ? '1rem' : '1.25rem'};
				}

				.notification-mac-dismiss-auto {
					background-color: rgba(229, 231, 235, 0.4);
					border-color: rgba(255, 255, 255, 0.4);
				}

				@media (prefers-color-scheme: dark) {
					.notification-mac-dismiss-auto {
						background-color: rgba(17, 24, 39, 0.6);
						border-color: rgba(31, 41, 55, 1);
					}
				}

				.notification-mac-dismiss {
					-webkit-appearance: none;
					-moz-appearance: none;
					appearance: none;
					border-radius: 9999px;
					border-width: 1px;
					display: none;
					padding: 0.25rem;
					position: absolute;
					top: -0.25rem;
					left: -0.5rem;
					-webkit-box-shadow: 0 0 #000, 0 0 #000, 0 0 #000, 0 0, #000,
						0 1px 2px 0 rbga(0, 0, 0, 0, 0.5);
					box-shadow: 0 0 #000, 0 0 #000, 0 0 #000, 0 0, #000, 0 1px 2px 0 rbga(0, 0, 0, 0, 0.5);
					backdrop-filter: saturate(2) blur(64px);
				}

				.notification-mac-dismiss:focus {
					outline: transparent solid 2px;
					outline-offset: 2px;
				}

				.notification-container:hover > .notification-mac-dismiss {
					display: flex;
				}

				.notification-ios-dismiss {
					-webkit-appearance: none;
					-moz-appearance: none;
					appearance: none;
				}

				.notification-ios-dismiss:focus {
					outline: transparent solid 2px;
					outline-offset: 2px;
				}

				.notification-link {
					-webkit-appearance: none;
					-moz-appearance: none;
					appearance: none;
					border-radius: 0.25rem;
					display: none;
					font-weight: 200;
					font-size: 1.25rem;
					line-height: 1.75rem;
					padding: 0.125rem 0.625rem;
					position: absolute;
					top: 0.25rem;
					right: 1rem;
					-webkit-transition-property: background-color, border-color, color, fill, stroke;
					transition-property: background-color, border-color, color, fill, stroke;
					-webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
					transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
					-webkit-transition-duration: 0.2s;
					transition-duration: 0.2s;
				}

				.notification-link:hover {
					background-color: rgba(229, 231, 235, 0.2);
				}

				.notification-container:hover .notification-link {
					display: flex;
				}

				.notification-link:focus {
					outline: transparent solid 2px;
					outline-offset: 2px;
				}

				.notification-ios-dismiss > svg {
					height: 1.5rem;
					width: 1.5rem;
				}

				.notification-mac-dismiss > svg {
					height: 1rem;
					width: 1rem;
				}

				button {
					background: none;
					color: inherit;
					border: none;
					padding: 0;
					font: inherit;
					cursor: pointer;
					outline: inherit;
				}
			`}</style>
		</AnimatePresence>
	);
};

export default Notification;
