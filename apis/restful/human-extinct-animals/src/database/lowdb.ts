import { Low } from "lowdb";
import { JSONFilePreset } from "lowdb/node";

import path from "node:path";
import z from "zod";

const extinctAnimalsSchema = z.object({
	id: z.guid(),
	name: z.string().min(2, ""),
	nameScientific: z.string().min(2, ""),
	description: z.string().min(2, ""),
	extincticDate: z.date(),
});

type HumanExtincticAnimals = z.infer<typeof extinctAnimalsSchema>;

const __dirname = import.meta.dirname;

type dataSchema = {
	animals: Array<HumanExtincticAnimals>;
};

const defaultData: dataSchema = {
	animals: [
		{
			id: "text",
			name: "text",
			nameScientific: "text",
			description: "text",
			extincticDate: new Date("2023"),
		},
	],
};

const filePath = path.resolve(__dirname, "../../db.json");

type PresetDb = Awaited<ReturnType<typeof JSONFilePreset<dataSchema>>>;

const db: PresetDb = await JSONFilePreset<dataSchema>(filePath, defaultData);

db.write();

export { db };
