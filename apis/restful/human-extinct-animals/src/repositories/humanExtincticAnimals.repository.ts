import { db } from "../database/lowdb.js";

export default class HumanExtincticAnimalsRepository {
	getHumanExtinticAnimals() {
		return db.data.animals;
	}

	async getHumanExtinticAnimal() {}
}
