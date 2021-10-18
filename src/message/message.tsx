import React from 'react';

import {motion} from 'framer-motion';
import {chat, message} from '../utils/constants';

export type MessageProviderProps = {
	children: React.ReactNode;
	motion?: {
		hidden: {y: number; opacity: number};
		show: {
			y: number;
			opacity: number;
			transition: {
				staggerChildren: number;
			};
		};
	};
	pfp?: string;
	to?: boolean;
	className?: string;
};

export type MessageProps = {
	text: string;
	hide?: boolean;
	to?: boolean;
};

const Message = (props: MessageProps) => (
	<motion.div
		variants={message}
		style={{userSelect: 'none'}}
		className={
			props.to
				? `${props.hide ? 'message-hidden-to' : 'message-auto-to'}`
				: `${props.hide ? 'message-auto-hidden' : 'message-auto'}`
		}
	>
		{props.text}
		<style jsx>{`
			.message-auto {
				border-radius: 20px;
				padding: 8px 15px;
				margin-top: 5px;
				margin-bottom: 5px;
				display: inline-block;

				align-items: flex-start;

				background-color: #eee;
				color: black;
				position: relative;
			}

			.message-auto:before {
				content: '';
				position: absolute;
				z-index: 0;
				bottom: 0;
				left: -7px;
				height: 20px;
				width: 20px;
				background: #eee;
				border-bottom-right-radius: 15px;
			}

			.message-auto:after {
				content: '';
				position: absolute;
				z-index: 1;
				bottom: 0;
				left: -10px;
				width: 10px;
				height: 20px;
				transition-duration: 240ms;
				background: white;
				border-bottom-right-radius: 10px;
			}

			.message-auto-to:after {
				content: '';
				position: absolute;
				z-index: 1;
				bottom: 0;
				right: -10px;
				width: 10px;
				height: 20px;
				transition-duration: 240ms;
				background: white;
				border-bottom-left-radius: 10px;
			}

			.message-auto-hidden {
				border-radius: 20px;
				padding: 8px 13px;
				margin-top: 5px;
				margin-bottom: -2px;
				display: inline-block;

				align-items: flex-start;

				background-color: #eee;
				color: black;
				position: relative;
			}

			@media (prefers-color-scheme: dark) {
				.message-auto {
					border-radius: 20px;
					padding: 8px 15px;
					margin-top: 5px;
					margin-bottom: 5px;
					display: inline-block;

					align-items: flex-start;

					background-color: #26252a;
					color: white;
					position: relative;
				}

				.message-auto:before {
					content: '';
					position: absolute;
					z-index: 0;
					bottom: 0;
					left: -7px;
					height: 20px;
					width: 20px;
					background: #26252a;
					border-bottom-right-radius: 15px;
				}

				.message-auto:after {
					content: '';
					position: absolute;
					z-index: 1;
					bottom: 0;
					left: -10px;
					width: 10px;
					height: 20px;
					transition-duration: 240ms;
					background: black;
					border-bottom-right-radius: 10px;
				}

				.message-auto-to:after {
					content: '';
					position: absolute;
					z-index: 1;
					bottom: 0;
					right: -10px;
					width: 10px;
					height: 20px;
					transition-duration: 240ms;
					background: black;
					border-bottom-left-radius: 10px;
				}

				.message-auto-hidden {
					border-radius: 20px;
					padding: 8px 13px;
					margin-top: 5px;
					margin-bottom: -2px;
					display: inline-block;

					align-items: flex-start;

					background-color: #26252a;
					color: white;
					position: relative;
				}
			}

			.message-hidden-to {
				border-radius: 20px;
				padding: 8px 13px;
				margin-top: 5px;
				margin-bottom: -2px;
				display: inline-block;

				align-items: flex-end;

				background: rgb(0, 120, 254);
				color: white;
				position: relative;
			}
		`}</style>
	</motion.div>
);

const Provider = (props: MessageProviderProps) => (
	<motion.div variants={props.motion ?? chat} initial="hidden" animate="show">
		{props.pfp ? (
			<>
				<motion.img
					className="profile"
					initial={{opacity: 0}}
					animate={{
						opacity: 1,
						transition: {
							delay: 0.5,
							duration: 0.7,
							ease: [0.48, 0.15, 0.25, 0.96],
						},
					}}
					src={props.pfp}
					alt="pfp"
				/>
				<div>{props.children}</div>
			</>
		) : (
			props.children
		)}
		<style jsx>{`
			.container {
				display: flex;
				${props.pfp
					? 'flex-direction: row; margin-right: calc(.75rem * 0); margin-left: calc(.75rem * calc(1 - 0));'
					: 'flex-direction: column;'}
				${props.to || props.pfp
					? '-webkit-box-align: end; -ms-flex-align: end; align-items: flex-end;'
					: '-webkit-box-align: start; -ms-flex-align: start; align-items: flex-start;'}
        ${props.className ?? ''}
			}

			.profile {
				border-radius: 9999px;
				height: 2rem;
				margin-bottom: 0.375rem;
				width: 2rem;
				z-index: 10;
			}

			.container > div {
				display: flex;
				flex-direction: column;
				-webkit-box-align: start;
				-ms-flex-align: start;
				align-items: flex-start;
			}
		`}</style>
	</motion.div>
);

Message.Provider = Provider;

export default Message;
