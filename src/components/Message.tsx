import React from 'react';
import styled from 'styled-components';

import '../styles';

import {motion} from 'framer-motion';
import {chat, message} from '../types/constants';

const Message = (props: {text: string; hide?: boolean; to?: boolean}) => (
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
	</motion.div>
);

const Provider = (props: {
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
}) => (
	<ProviderContainer variants={props.motion ?? chat} initial="hidden" animate="show">
		{props.pfp ? (
			<>
				<ProviderProfile
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
				<ProviderDiv className="flex flex-col items-start">{props.children}</ProviderDiv>
			</>
		) : (
			props.children
		)}
	</ProviderContainer>
);

Message.Provider = Provider;

export default Message;

const ProviderContainer = styled(motion.div)<{
	pfp?: string;
	to?: boolean;
	className?: string;
}>`
	display: flex;
	${props =>
		props.pfp
			? 'flex-direction: row; margin-right: calc(.75rem * 0); margin-left: calc(.75rem * calc(1 - 0));'
			: 'flex-direction: column;'}
	${props =>
		props.to || props.pfp
			? '-webkit-box-align: end; -ms-flex-align: end; align-items: flex-end;'
			: '-webkit-box-align: start; -ms-flex-align: start; align-items: flex-start;'}
	${props => props.className ?? ''}
`;

const ProviderProfile = styled(motion.img)`
	border-radius: 9999px;
	height: 2rem;
	margin-bottom: 0.375rem;
	width: 2rem;
	z-index: 10;
`;

const ProviderDiv = styled.div`
	display: flex;
	flex-direction: column;
	-webkit-box-align: start;
	-ms-flex-align: start;
	align-items: flex-start;
`;
