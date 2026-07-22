import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export function Button({ type, children, ...rest }: ButtonProps) {
	return (
		<button type={type || "button"} {...rest}>
			{children}
		</button>
	);
}
