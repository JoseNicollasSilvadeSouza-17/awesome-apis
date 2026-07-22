import type { SelectHTMLAttributes } from "react";
import {
	Controller,
	type Control,
	type FieldError,
	type FieldValues,
	type Path,
} from "react-hook-form";
import { Label } from "./Label";
import { OptionLabel } from "./OptionLabel";

interface OptionItem {
	value: string;
	label: string;
}

type CustomSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "name">;

interface SelectProps<T extends FieldValues> extends CustomSelectProps {
	name: Path<T>;
	control: Control<T>;
	label: string;
	options: OptionItem[];
	error?: FieldError;
}

export function Select<T extends FieldValues>({
	name,
	control,
	error,
	label,
	id,
	options,
	...rest
}: SelectProps<T>) {
	return (
		<Label forId={id} label={label} error={error}>
			<Controller
				control={control}
				name={name}
				render={({ field }) => (
					<select className="app__select" id={id} {...rest} {...field}>
						<option value="" disabled>
							Selecione alguma opção
						</option>

						{options.map((item) => (
							<option value={item.value} key={item.value}>
								<OptionLabel label={item.label}/>
							</option>
						))}
					</select>
				)}
			/>
		</Label>
	);
}
