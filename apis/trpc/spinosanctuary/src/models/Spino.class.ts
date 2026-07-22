import type {
	Specie,
	Gender,
	ISpinos,
	Category,
	Food,
} from "../shared/types/Spinos.js";

export default class Spino {
	private name: string;
	private specie: Specie;
	private gender: Gender;
	private category: Category;
	private food: Food;

	constructor({ name, specie, gender, category, food }: ISpinos) {
		this.name = name;
		this.specie = specie;
		this.gender = gender;
		this.category = category;
		this.food = food;
	}
}
