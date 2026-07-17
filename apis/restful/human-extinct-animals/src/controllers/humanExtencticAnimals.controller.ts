import type { Request, Response } from "express";
import HumanExtincticAnimalsRepository from "../repositories/humanExtincticAnimals.repository.js";

const humanExtincticAnimalsRepository = new HumanExtincticAnimalsRepository();

export default class HumanExtincticAnimalsController {
	getHumanExtincticAnimals(req: Request, res: Response) {
		const extincticAnimals =
			humanExtincticAnimalsRepository.getHumanExtinticAnimals();

		return extincticAnimals;
	}
}
