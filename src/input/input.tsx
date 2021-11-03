import React from 'react';

type Props = {
	placeholder: string;
	green: boolean;
	value: string;
	onSubmit(event: React.FormEvent): void;
	onChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

export type InputProps = Partial<Props>;

const Input = (props: InputProps) => (
	<div className="canary-input-container">
		<button onClick={props.onSubmit}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={20}
				height={20}
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2.5}
					d="M7 11l5-5m0 0l5 5m-5-5v12"
				/>
			</svg>
		</button>
		<input
			className="canary-input"
			placeholder={props.placeholder ?? 'Message'}
			value={props.value}
			onChange={props.onChange}
		/>
		<style jsx>{`
			:global(.canary-input-container) {
				box-sizing: border-box;

				border-color: rgb(209, 213, 219);
				border-radius: 9999px;
				border-width: 1px;
				border-style: solid;
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-orient: horizontal;
				-webkit-box-direction: normal;
				-ms-flex-direction: row;
				flex-direction: row;
				position: relative;
				color: rgb(107, 114, 128);
				padding: 0.5rem 0.75rem;
				width: 100%;
				-webkit-transition-property: background-color, border-color, color, fill, stroke;
				transition-property: background-color, border-color, color, fill, stroke;
				-webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
				transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
				-webkit-transition-duration: 0.2s;
				transition-duration: 0.2s;
			}
			.inout-container:focus-within {
				color: rgb(75, 85, 99);
			}
			@media (prefers-color-scheme: dark) {
				.input-container {
					border-color: rgb(31, 41, 55);
				}
			}
			button {
				// normalize
				font-family: inherit;
				text-align: center;
				cursor: pointer;
				border-style: unset;
				border-color: unset;
				border-image: unset;
				border-image-repeat: unset;
				box-sizing: border-box;

				background-color: ${props.green ? 'rgb(16, 185, 129)' : 'rgb(59, 130, 246)'};
				border-radius: 9999px;
				display: inline-block;
				margin-right: 0.5rem;
				margin-bottom: 0.375rem;
				padding: 0.125rem;
				position: absolute;
				right: 0;
				bottom: 0;
			}
			svg {
				line-height: normal;
				color: rgb(255, 255, 255);
			}
			:global(.canary-input) {
				// normalize
				border-style: unset;
				border-color: unset;
				border-image-source: unset;
				border-image: unset;
				border-image-repeat: unset;
				padding-top: unset;

				-webkit-appearance: none;
				-moz-appearance: none;
				appearance: none;
				background-color: transparent;
				display: inline-block;
				height: auto;
				margin-right: 1.5rem;
				color: rgb(17, 24, 39);
				width: 100%;
			}
			.canary-input:focus {
				outline: transparent solid 2px;
				outline-offset: 2px;
			}
			.canary-input::-webkit-input-placeholder {
				color: rgb(107, 114, 128);
			}
			.canary-input::-moz-placeholder {
				color: rgb(107, 114, 128);
			}
			.canary-input:-ms-input-placeholder {
				color: rgb(107, 114, 128);
			}
			.canary-input::-ms-input-placeholder {
				color: rgb(107, 114, 128);
			}
			.canary-input::placeholder {
				color: rgb(107, 114, 128);
			}
			@media (min-width: 640px) {
				.canary-input {
					font-size: 0.875rem;
					line-height: 1.25rem;
				}
			}
			@media (prefers-color-scheme: dark) {
				.canary-input {
					color: rgb(156, 163, 175);
				}
			}
		`}</style>
	</div>
);

export default Input;
