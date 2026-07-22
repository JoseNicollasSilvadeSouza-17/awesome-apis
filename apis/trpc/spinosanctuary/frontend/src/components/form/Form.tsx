import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/Button";
import { Input } from "./Input";
import { Select } from "./Select";
import type { Url } from "../../shared/types/Url";
import type { ISpinos } from "../../../../src/shared/types/Spinos";
import { spinosSchema } from "../../../../src/shared/schemas/spinos";
import type { AsConst } from "../../shared/types/AsConst";
import FOOD from "../../../../src/shared/schemas/food";
import CATEGORY from "../../../../src/shared/schemas/category";
import GENDER from "../../../../src/shared/schemas/gender";

const url: Url = "http://localhost:3000/trpc";

interface OptionsFieldProps<T extends AsConst> {
	value: T[number];
	label: T[number];
}

export default function Form() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(spinosSchema),
	});

	const requestFetch = async (url: Url, body: unknown) => {
		try {
			const response = await fetch(url, {
				method: "POST",
				body: JSON.stringify(body),
			});

			if (!response.ok) throw new Error("Invalid request!");
		} catch (error) {
			console.error(error);
		}
	};

	const onSubmit: SubmitHandler<ISpinos> = async (data) => {
		alert(JSON.stringify(data));

		await requestFetch(url, data);
	};

	const optionsField = <T extends AsConst>(
		schema: T,
	): OptionsFieldProps<T>[] => {
		return schema.map((field) => ({
			value: field,
			label: field,
		}));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="app__form">
			<fieldset className="app__fieldset">
				<legend className="app__subtitle">Spinosaurídae:</legend>

				<Input
					control={control}
					error={errors.name}
					id="name"
					name="name"
					label="Nome"
					required
					minLength={2}
					placeholder="Ex.: The Spino"
				/>

				<Select
					control={control}
					error={errors.gender}
					id="gender"
					name="gender"
					label="Gênero"
					options={optionsField(GENDER)}
				/>

				<Select
					control={control}
					error={errors.category}
					id="category"
					name="category"
					label="Categoria"
					options={optionsField(CATEGORY)}
				/>

				<Select
					control={control}
					error={errors.food}
					id="food"
					name="food"
					label="Alimentação"
					options={optionsField(FOOD)}
				/>

				<Button className="app__button" type="submit">
					Criar Spinosaurídae
				</Button>
			</fieldset>
		</form>
	);
}
