import type { LabelHTMLAttributes, ReactNode } from "react";
import type { FieldError } from "react-hook-form";
import { ErrorGeneric } from "../errors/ErrorGeneric";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	forId?: string;
	label: string;
	children: ReactNode;
	error?: FieldError;
}

export function Label({ forId, label, children, error, ...rest }: LabelProps) {
	return (
		<label className="app__label" htmlFor={forId} {...rest}>
			<span className="app__text-label">{label}:</span>

			{children}

			{error && <ErrorGeneric>{error.message}</ErrorGeneric>}
		</label>
	);
}
