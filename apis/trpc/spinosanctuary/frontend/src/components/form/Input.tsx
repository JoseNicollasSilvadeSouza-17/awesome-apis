import type { InputHTMLAttributes } from "react";
import {
	Controller,
	type Control,
	type FieldError,
	type FieldValues,
	type Path,
} from "react-hook-form";
import { Label } from "./Label";

type CustomInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "name">;

interface InputProps<T extends FieldValues> extends CustomInputProps {
	name: Path<T>;
	control: Control<T>;
	label: string;
	error?: FieldError;
}

export function Input<T extends FieldValues>({
	name,
	label,
	control,
	error,
	id,
	type,
	...rest
}: InputProps<T>) {
	return (
		<Label forId={id} label={label} error={error}>
			<Controller
				control={control}
				name={name}
				render={({ field }) => (
					<input
						className="app__input"
						id={id}
						type={type || "text"}
						{...rest}
						{...field}
					/>
				)}
			/>
		</Label>
	);
}
