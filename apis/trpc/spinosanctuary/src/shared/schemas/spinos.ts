import z from "zod";
import { AMALGAM, DEBATABLE, EXTRA, REAL } from "./species.js";
import FOOD from "./food.js";
import CATEGORY from "./category.js";
import GENDER from "./gender.js";
import { OBJECT_ID_REGEX } from "../../utils/regexp.js";

const specieSchema = z.discriminatedUnion("type", [
	z.object({
		type: z.literal("Real"),
		name: z.enum(REAL, {
			error: "Invalid name for a real specie!",
		}),
	}),

	z.object({
		type: z.literal("Debatable"),
		name: z.enum(DEBATABLE, {
			error: "Invalid name for a debatable specie!",
		}),
	}),

	z.object({
		type: z.literal("Amalgam"),
		name: z.enum(AMALGAM, {
			error: "Invalid name for a amalgam specie!",
		}),
	}),

	z.object({
		type: z.literal("Extra"),
		name: z.enum(EXTRA, {
			error: "Invalid name for a extra specie!",
		}),
	}),
]);

const genderSchema = z.enum(GENDER, {
	error: "Gender is required!",
});

const categorySchema = z.enum(CATEGORY, {
	error: "Category spino is requerid!",
});

const foodSchema = z
	.enum(FOOD, { error: "Food is required!" })
	.default("Carnivorous")
	.optional();

const spinosSchema = z.object({
	id: z
		.string()
		.trim()
		.min(2, "ID is required!")
		.regex(OBJECT_ID_REGEX, "Invalid ObjectId!")
		.optional(),
	name: z.string().trim().min(2, "Name is required!"),
	specie: specieSchema,
	gender: genderSchema,
	category: categorySchema,
	food: foodSchema,
});

export { specieSchema, genderSchema, categorySchema, foodSchema, spinosSchema };
