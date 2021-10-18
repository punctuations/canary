export {};

declare global {
	namespace React {
		interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
			jsx?: boolean;
			global?: boolean;
		}
	}
}
